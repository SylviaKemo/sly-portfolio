import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-[clamp(90px,12vw,160px)] flex flex-wrap justify-between gap-4 border-t border-line px-[clamp(20px,4vw,56px)] py-7 text-xs tracking-[0.08em] text-muted uppercase">
      <span>Copyright © {new Date().getFullYear()}. All rights reserved.</span>
      <span>
        Developed by{" "}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="border-b border-line2 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Sylvia
        </a>
      </span>
      <a href="#home" className="transition-colors hover:text-ink">
        Back to top ↑
      </a>
    </footer>
  );
}
