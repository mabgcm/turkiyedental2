"use client";

type Props = {
    onLogout?: () => void | Promise<void>;
    onLogin?: () => void | Promise<void>;
};

export default function AdminWord({ onLogout, onLogin }: Props) {
    return (
        <span className="inline-flex items-center">
            <button
                type="button"
                onClick={onLogout}
                aria-label="Logout"
                title="Logout"
                className="p-0 m-0 bg-transparent border-0 text-inherit font-inherit leading-[inherit] align-baseline focus:outline-none"
            >
                A
            </button>
            <span className="-ml-px">dmi</span>
            <button
                type="button"
                onClick={onLogin}
                aria-label="Login"
                title="Login"
                className="p-0 m-0 bg-transparent border-0 text-inherit font-inherit leading-[inherit] align-baseline focus:outline-none -ml-px"
            >
                n
            </button>
        </span>
    );
}
