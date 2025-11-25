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
        return <div className="p-6 text-sm text-gray-700">Loading...</div>;
    }

    if (!user) {
        return (
            <div className="p-6 space-y-4 max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm">
                <h1 className="text-2xl font-semibold text-brand-secondary">Admin Dashboard</h1>
                <p className="text-gray-700">You must sign in as admin to access admin tools.</p>
                <button
                    onClick={handleGoogleLogin}
                    className="px-4 py-2 rounded-xl bg-brand-primary text-white hover:bg-brand-primary-dark transition-colors"
                >
                    Sign in with Google
                </button>
            </div>
        );
    }

    if (!isAdmin) {
        return (
            <div className="p-6 max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm space-y-2">
                <h1 className="text-2xl font-semibold text-brand-secondary">Admin Dashboard</h1>
                <p className="text-gray-700">Not authorized.</p>
            </div>
        );
    }

    return (
        <main className="p-6 space-y-6 max-w-4xl mx-auto">
            <header className="space-y-2">
                <h1 className="text-3xl font-bold text-brand-secondary">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">
                    Manage clinics, reviews and other admin tools.
                </p>
            </header>

            <section className="grid gap-4 md:grid-cols-2">
                <Link
                    href="/admin/clinics"
                    className="border border-gray-200 rounded-2xl p-4 hover:bg-brand-surface transition shadow-sm bg-white"
                >
                    <h2 className="font-semibold mb-1">Clinics</h2>
                    <p className="text-sm text-gray-600">
                        Add, update and manage clinics.
                    </p>
                </Link>

                <Link
                    href="/admin/reviews"
                    className="border border-gray-200 rounded-2xl p-4 hover:bg-brand-surface transition shadow-sm bg-white"
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
