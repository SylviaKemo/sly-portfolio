import { socials } from "@/data/profile";

/** Vertical tab of social links with a "Follow me" label. */
export default function SocialTab() {
  return (
    <div className="flex flex-col items-center gap-3.5 rounded-b-xl bg-s2 px-3.5 pt-[18px]">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          title={social.name}
          aria-label={social.name}
          target="_blank"
          rel="noreferrer"
          className="grid size-7 place-items-center rounded-full border border-line2 text-xs transition-colors duration-250 hover:border-accent hover:bg-accent hover:text-on-accent"
        >
          {social.short}
        </a>
      ))}
      <span className="-mb-px rounded-br-[10px] bg-accent px-1.5 py-3 text-[11px] tracking-[0.14em] text-on-accent [writing-mode:vertical-rl]">
        FOLLOW ME
      </span>
    </div>
  );
}
