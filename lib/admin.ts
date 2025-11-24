import type { User } from "firebase/auth";

// TODO: replace with your real admin emails.
export const ADMIN_EMAILS = ["bugucam@gmail.com"];

export function isAdminUser(user: User | null): boolean {
    return !!user?.email && ADMIN_EMAILS.includes(user.email);
}
