"use client";

import { useState } from "react";
import ArrowButton from "@/components/ui/ArrowButton";

// `website` is a hidden honeypot field — only spam bots fill it in.
const emptyForm = { name: "", email: "", message: "", website: "" };
const fallbackError = "Something went wrong. Please email me directly instead.";

const fieldClass = "flex flex-col gap-2 border-b border-line2 py-[18px]";
const labelClass = "text-xs tracking-[0.08em] text-muted uppercase";
const inputClass = "bg-transparent py-1 text-[22px] outline-none placeholder:text-muted/60";

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState(fallbackError);

  const update = (field: keyof typeof emptyForm) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [field]: event.target.value });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => null);

    if (response?.ok) {
      setStatus("sent");
      return;
    }

    const data = await response?.json().catch(() => null);
    setError(data?.error ?? fallbackError);
    setStatus("error");
  };

  const reset = () => {
    setForm(emptyForm);
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-4 rounded border border-line px-8 py-12">
        <span className={labelClass}>Message sent</span>
        <p className="text-[28px] leading-[1.2] tracking-[-0.015em]">
          Thanks, {form.name} — I&apos;ll be in touch soon.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-3 cursor-pointer self-start rounded-full border border-line2 px-5 py-3 text-xs tracking-[0.08em] uppercase"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={update("website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <label className={fieldClass}>
        <span className={labelClass}>Your name *</span>
        <input required value={form.name} onChange={update("name")} placeholder="Jane Doe" className={inputClass} />
      </label>
      <label className={fieldClass}>
        <span className={labelClass}>Email *</span>
        <input
          required
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="jane@company.com"
          className={inputClass}
        />
      </label>
      <label className={fieldClass}>
        <span className={labelClass}>Message *</span>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell me about your project…"
          className={`${inputClass} resize-y`}
        />
      </label>
      <ArrowButton type="submit" className="mt-7 self-start">
        {status === "sending" ? "Sending…" : "Send message"}
      </ArrowButton>
      {status === "error" && (
        <p role="alert" className="mt-2 text-sm text-accent">
          {error}
        </p>
      )}
    </form>
  );
}
