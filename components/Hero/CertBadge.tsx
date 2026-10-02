/** Certification badge. Swap the dashed placeholder for a real badge image. */
export default function CertBadge() {
  return (
    <div className="flex w-[260px] max-w-full flex-col items-center gap-2.5 text-center text-[15px] leading-[1.6] font-light tracking-[0.06em] text-ink2">
      <span className="grid size-[70px] place-items-center rounded-full border border-dashed border-line2 text-[10px] text-muted">
        badge
      </span>
      <span>
        CERTIFIED
        <br />
        CLOUD
        <br />
        DEVELOPER
      </span>
    </div>
  );
}
