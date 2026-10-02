import { profile } from "@/data/profile";

const labelClass = "mb-1.5 text-xs tracking-[0.08em] text-muted uppercase";
const valueClass = "text-[22px] transition-colors hover:text-muted";

/** Intro text, contact details and quick links beside the form. */
export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <p className="max-w-[420px] text-[clamp(18px,1.6vw,22px)] leading-[1.45] text-pretty text-ink2">
        Have a project, a role, or just want to say hello? Send a message and I&apos;ll reply within
        two working days.
      </p>

      <div className="flex flex-col gap-[22px]">
        <div>
          <div className={labelClass}>Email</div>
          <a href={`mailto:${profile.email}`} className={valueClass}>
            {profile.email}
          </a>
        </div>
        <div>
          <div className={labelClass}>Based in</div>
          <span className="text-[22px]">{profile.location}</span>
        </div>

        <div className="flex flex-wrap gap-5 text-[13px] tracking-[0.08em] uppercase">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-muted">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-muted">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  );
}
