"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const callbackUrl = sp.get("callbackUrl") ?? "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const res = await signIn("credentials", { redirect: false, email, password, callbackUrl });
    setBusy(false);

    if (res?.error) return toast.error("Invalid email or password");
    toast.success("Logged in");
    router.push(callbackUrl);
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border p-5">
      <h1 className="text-xl font-semibold">Login</h1>
      <p className="mt-1 text-sm text-slate-600">Use your account to create and save teams.</p>

      <form className="mt-4 space-y-3" onSubmit={onSubmit}>
        <div>
          <label className="text-sm">Email</label>
          <input className="mt-1 w-full rounded-xl border px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label className="text-sm">Password</label>
          <input className="mt-1 w-full rounded-xl border px-3 py-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button disabled={busy} className="w-full rounded-xl bg-slate-900 px-4 py-2 text-white">
          {busy ? "Please wait…" : "Login"}
        </button>
      </form>

      <p className="mt-4 text-sm text-slate-600">
        New here? <Link className="underline" href="/register">Create an account</Link>
      </p>
    </div>
  );
}
