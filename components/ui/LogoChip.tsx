import type { Tech } from "@/data/types";

type LogoChipProps = {
  tech: Tech;
  /** Circle size in px, or "fill" to take the parent's size */
  size?: number | "fill";
  /** Icon size as a CSS background-size, e.g. "22px" or "48%" */
  iconSize?: string;
};

/** White circle with a technology logo from cdn.simpleicons.org. */
export default function LogoChip({ tech, size = 40, iconSize = "55%" }: LogoChipProps) {
  const fill = size === "fill";

  return (
    <span
      role="img"
      aria-label={tech.name}
      title={tech.name}
      className={`block flex-none rounded-full bg-white bg-center bg-no-repeat ${fill ? "size-full" : ""}`}
      style={{
        width: fill ? undefined : size,
        height: fill ? undefined : size,
        backgroundImage: `url(https://cdn.simpleicons.org/${tech.slug}/${tech.color})`,
        backgroundSize: iconSize,
      }}
    />
  );
}
