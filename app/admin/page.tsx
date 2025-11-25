"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { isAdminUser } from "@/lib/admin";

export default function AdminDashboardPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loadingUser, setLoadingUser] = useState(true);
    const isAdmin = useMemo(() => isAdminUser(user), [user]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current) => {
            setUser(current);
            setLoadingUser(false);
        });
        return () => unsubscribe();
    }, []);

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error: any) {
            console.error("SIGN-IN ERROR (admin dashboard):", error);
            alert(`${error?.code ?? "unknown"} - ${error?.message ?? "Sign-in failed"}`);
        }
    };

    if (loadingUser) {
        return <div className="p-4">Loading...</div>;
    }

    if (!user) {
        return (
            <div className="p-4 space-y-4">
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                <p>You must sign in as admin to access admin tools.</p>
                <button
                    onClick={handleGoogleLogin}
                    className="px-4 py-2 rounded bg-black text-white"
                >
                    Sign in with Google
                </button>
            </div>
        );
    }

    if (!isAdmin) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                <p>Not authorized.</p>
            </div>
        );
    }

    return (
        <main className="p-4 space-y-6 max-w-3xl mx-auto">
            <header>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">
                    Manage clinics, reviews and other admin tools.
                </p>
            </header>

            <section className="grid gap-4 md:grid-cols-2">
                <Link
                    href="/admin/clinics"
                    className="border rounded-lg p-4 hover:bg-gray-50 transition"
                >
                    <h2 className="font-semibold mb-1">Clinics</h2>
                    <p className="text-sm text-gray-600">
                        Add, update and manage clinics.
                    </p>
                </Link>

                <Link
                    href="/admin/reviews"
                    className="border rounded-lg p-4 hover:bg-gray-50 transition"
                >
                    <h2 className="font-semibold mb-1">Reviews</h2>
                    <p className="text-sm text-gray-600">
                        Moderate patient reviews and approvals.
                    </p>
                </Link>

                {/* Add other admin routes here as needed */}
            </section>
        </main>
    );
}
