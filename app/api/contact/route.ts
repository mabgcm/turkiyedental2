// app/api/contact/route.ts
import { NextResponse } from "next/server";
export const runtime = "nodejs";
// @ts-expect-error: nodemailer types are CommonJS
import nodemailer from "nodemailer";


function makeTransport() {
    const user = process.env.GMAIL_USER!;
    const from = process.env.GMAIL_FROM || process.env.GMAIL_USER!;
    const appPass = process.env.GMAIL_APP_PASSWORD;

    if (appPass) {
        // ✅ Gmail via App Password (simple & stable)
        return {
            from,
            transporter: nodemailer.createTransport({
                service: "gmail",
                auth: { user, pass: appPass },
            }),
        };
    }

    // 🔐 Gmail via OAuth2 (requires Google Cloud OAuth + refresh token)
    const clientId = process.env.GMAIL_CLIENT_ID;
    const clientSecret = process.env.GMAIL_CLIENT_SECRET;
    const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

    if (clientId && clientSecret && refreshToken) {
        return {
            from,
            transporter: nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user,
                    clientId,
                    clientSecret,
                    refreshToken,
                },
            }),
        };
    }

    throw new Error(
        "No Gmail credentials found. Set GMAIL_APP_PASSWORD or OAuth2 vars."
    );
}

export async function POST(req: Request) {
    try {
        const form = await req.formData();

        // --- Required fields (unchanged from your HTML form names) ---
        const name = String(form.get("name") || "");
        const email = String(form.get("email") || "");
        const phone = String(form.get("phone") || "");
        const requestedTreatment = String(form.get("requested_treatment") || "");

        if (!name.trim() || !phone.trim() || !requestedTreatment.trim()) {
            return NextResponse.json(
                { ok: false, error: "Missing required fields." },
                { status: 400 }
            );
        }

        // --- Optional fields (keep your existing keys) ---
        const chronic = String(form.get("chronic") || "");
        const oralIssues = String(form.get("oral_issues") || "");
        const mobileTeeth = String(form.get("mobile_teeth") || "");
        const missingDuration = String(form.get("missing_duration") || "");
        const smoking = String(form.get("smoking") || "");
        const medications = String(form.get("medications") || "");
        const medicalConditions = String(form.get("medical_conditions") || "");
        const allergies = String(form.get("allergies") || "");
        const lastGp = String(form.get("last_gp") || "");
        const lastBloodTest = String(form.get("last_blood_test") || "");
        const surgeries = String(form.get("surgeries") || "");
        const insurance = String(form.get("insurance") || "");
        const travelDates = String(form.get("travel_dates") || "");
        const city = String(form.get("city") || "");
        const postcode = String(form.get("postcode") || "");
        const departureAirport = String(form.get("departure_airport") || "");

        // Files
        const files = form.getAll("files").filter(Boolean) as File[];
        const attachments =
            files.length > 0
                ? await Promise.all(
                    files.map(async (f) => {
                        const buf = Buffer.from(await f.arrayBuffer());
                        return {
                            filename: f.name,
                            content: buf,
                            contentType: f.type || "application/octet-stream",
                        };
                    })
                )
                : [];

        // Email body
        const summary = `
New Second Opinion Request

[Personal]
Name: ${name}
Email: ${email}
Phone: ${phone}
Requested Treatment: ${requestedTreatment}

[Medical]
Chronic/meds/HbA1c: ${chronic}
Oral pain/bleeding/gum disease: ${oralIssues}
Mobile teeth: ${mobileTeeth}
Missing teeth duration: ${missingDuration}
Smoking: ${smoking}
Medications: ${medications}
Medical conditions: ${medicalConditions}
Allergies: ${allergies}
Last GP: ${lastGp}
Last Blood Test: ${lastBloodTest}
Surgeries: ${surgeries}
Insurance: ${insurance}

[Travel]
Dates: ${travelDates}
City: ${city}
Postcode: ${postcode}
Departure airport: ${departureAirport}
`.trim();

        let sent = false;
        try {
            const { transporter, from } = makeTransport();
            await transporter.sendMail({
                from,
                to: process.env.GMAIL_TO || process.env.GMAIL_USER,
                subject: `Second Opinion – ${name} (${requestedTreatment})`,
                text: summary,
                html: `<pre style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; white-space: pre-wrap">${summary}</pre>`,
                attachments,
                ...(email ? { replyTo: email } : {}),
            });
            sent = true;
        } catch (mailErr) {
            console.warn("Email not sent (missing or invalid mail configuration):", mailErr);
            // Fall back to success=false but keep request from failing to avoid user-facing 500s.
            return NextResponse.json({ ok: false, sent: false, error: "Email delivery failed (auth). Please verify mail credentials." }, { status: 200 });
        }

        return NextResponse.json({ ok: true, sent });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
    }
}
