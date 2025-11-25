"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { isAdminUser } from "@/lib/admin";
import { createClinic, deleteClinic, getAllClinics, updateClinic } from "@/lib/clinicService";
import { type Clinic } from "@/types/review";

type FormState = {
    name: string;
    slug: string;
    city: string;
    country: string;
};

const initialForm: FormState = {
    name: "",
    slug: "",
    city: "",
    country: "Turkey",
};

export default function AdminClinicsPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loadingUser, setLoadingUser] = useState(true);
    const [clinics, setClinics] = useState<Clinic[]>([]);
    const [loadingClinics, setLoadingClinics] = useState(false);
    const [form, setForm] = useState<FormState>(initialForm);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const isAdmin = useMemo(() => isAdminUser(user), [user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current) => {
            setUser(current);
            setLoadingUser(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const loadClinics = async () => {
            if (!isAdmin) return;
            setLoadingClinics(true);
            setError(null);
            try {
                const data = await getAllClinics();
                setClinics(data);
            } catch {
                setError("Failed to load clinics.");
            } finally {
                setLoadingClinics(false);
            }
        };
        loadClinics();
    }, [isAdmin]);

    const handleSignIn = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error: any) {
            console.error("SIGN-IN ERROR (admin clinics):", error);
            const message = `${error?.code ?? "unknown"} - ${error?.message ?? "Sign-in failed"}`;
            setError(message);
            alert(message);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isAdmin) return;
        setSaving(true);
        setError(null);
        setSuccess(null);

        const payload = {
            name: form.name.trim(),
            slug: form.slug.trim(),
            city: form.city.trim(),
            country: form.country.trim(),
        };

        if (!payload.name || !payload.slug || !payload.city || !payload.country) {
            setError("Please fill in all required fields.");
            setSaving(false);
            return;
        }

        try {
            if (editingId) {
                await updateClinic(editingId, payload);
                setSuccess("Clinic updated.");
                setClinics((prev) => prev.map((c) => (c.id === editingId ? { ...c, ...payload } : c)));
            } else {
                const created = await createClinic(payload as Omit<Clinic, "id" | "avgRating" | "reviewCount" | "createdAt" | "updatedAt">);
                setSuccess("Clinic created.");
                setClinics((prev) => [...prev, created as Clinic]);
            }
            setForm(initialForm);
            setEditingId(null);
        } catch {
            setError("Failed to save clinic.");
        } finally {
            setSaving(false);
        }
    };

    const handleEdit = (clinic: Clinic) => {
        setEditingId(clinic.id);
        setForm({
            name: clinic.name,
            slug: clinic.slug,
            city: clinic.city,
            country: clinic.country,
        });
        setSuccess(null);
        setError(null);
    };

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this clinic? This will not delete existing reviews.",
        );
        if (!confirmed) return;
        try {
            await deleteClinic(id);
            setClinics((prev) => prev.filter((c) => c.id !== id));
        } catch {
            setError("Failed to delete clinic.");
        }
    };

    if (loadingUser) {
        return <main className="max-w-5xl mx-auto p-6 text-sm text-gray-700"><p>Loading user...</p></main>;
    }

    if (!user) {
        return (
            <main className="max-w-5xl mx-auto p-6 space-y-3">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-2">
                    <h1 className="text-2xl font-bold text-brand-secondary">Admin – Clinics</h1>
                    <p className="text-gray-700">You must sign in as admin to manage clinics.</p>
                </div>
                <button onClick={handleSignIn} className="bg-blue-600 text-white px-4 py-2 rounded">
                    Sign in with Google
                </button>
                {error && <p className="text-red-600">{error}</p>}
            </main>
        );
    }

    if (!isAdmin) {
        return <main className="max-w-5xl mx-auto p-6 text-gray-700"><p>Not authorized.</p></main>;
    }

    return (
        <main className="max-w-5xl mx-auto p-6 space-y-6">
            <header className="space-y-1">
                <h1 className="text-3xl font-bold text-brand-secondary">Admin – Clinics</h1>
                <p className="text-sm text-gray-700">Create, edit, or delete clinics. Admin-only.</p>
            </header>

            <section className="space-y-3 bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
                <h2 className="text-xl font-semibold text-brand-secondary">{editingId ? "Edit clinic" : "Create clinic"}</h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <label className="block">
                        <span className="block text-sm font-medium">Name</span>
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                            className="border rounded px-2 py-1 w-full"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium">Slug</span>
                        <input
                            type="text"
                            value={form.slug}
                            onChange={(e) => setForm((prev) => ({ ...prev, slug: e.target.value }))}
                            className="border rounded px-2 py-1 w-full"
                            required
                        />
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                        <label className="block">
                            <span className="block text-sm font-medium">City</span>
                            <input
                                type="text"
                                value={form.city}
                                onChange={(e) => setForm((prev) => ({ ...prev, city: e.target.value }))}
                                className="border rounded px-2 py-1 w-full"
                                required
                            />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium">Country</span>
                            <input
                                type="text"
                                value={form.country}
                                onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
                                className="border rounded px-2 py-1 w-full"
                                required
                            />
                        </label>
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    {success && <p className="text-green-700 text-sm">{success}</p>}
                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={saving}
                            className="bg-brand-primary text-white px-4 py-2 rounded-xl disabled:opacity-60"
                        >
                            {saving ? "Saving..." : editingId ? "Update clinic" : "Create clinic"}
                        </button>
                        {editingId && (
                            <button
                                type="button"
                                className="border border-gray-200 px-3 py-2 rounded-xl"
                                onClick={() => {
                                    setEditingId(null);
                                    setForm(initialForm);
                                    setSuccess(null);
                                    setError(null);
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </section>

            <section className="space-y-3 bg-white border border-gray-200 rounded-2xl shadow-sm p-5">
                <h2 className="text-xl font-semibold text-brand-secondary">Clinic list</h2>
                {loadingClinics ? (
                    <p>Loading clinics...</p>
                ) : (
                    <div className="space-y-3">
                        {!clinics.length && <p>No clinics found.</p>}
                        {clinics.length > 0 && (
                            <table className="w-full text-sm border border-gray-200 rounded-2xl overflow-hidden">
                                <thead className="bg-brand-surface">
                                    <tr>
                                        <th className="text-left p-2 border-b border-gray-200">Name</th>
                                        <th className="text-left p-2 border-b border-gray-200">Slug</th>
                                        <th className="text-left p-2 border-b border-gray-200">City</th>
                                        <th className="text-left p-2 border-b border-gray-200">Country</th>
                                        <th className="text-left p-2 border-b border-gray-200">Avg Rating</th>
                                        <th className="text-left p-2 border-b border-gray-200">Reviews</th>
                                        <th className="text-left p-2 border-b border-gray-200">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clinics.map((clinic) => (
                                        <tr key={clinic.id}>
                                            <td className="p-2 border-b border-gray-200">{clinic.name}</td>
                                            <td className="p-2 border-b border-gray-200">{clinic.slug}</td>
                                            <td className="p-2 border-b border-gray-200">{clinic.city}</td>
                                            <td className="p-2 border-b border-gray-200">{clinic.country}</td>
                                            <td className="p-2 border-b border-gray-200">
                                                {clinic.avgRating != null ? clinic.avgRating.toFixed(1) : "N/A"}
                                            </td>
                                            <td className="p-2 border-b border-gray-200">{clinic.reviewCount ?? 0}</td>
                                            <td className="p-2 border-b border-gray-200 space-x-2">
                                                <button
                                                    type="button"
                                                    className="text-brand-primary underline"
                                                    onClick={() => handleEdit(clinic)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    className="text-red-600 underline"
                                                    onClick={() => handleDelete(clinic.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                )}
            </section>
        </main>
    );
}
