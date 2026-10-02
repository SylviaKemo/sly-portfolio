import LogoChip from "@/components/ui/LogoChip";
import { tools } from "@/data/tools";

// Bubble sizes cycle through these values (px) so the cloud looks organic.
const mobileSizes = [52, 44, 58, 48, 54];
const desktopSizes = [76, 64, 88, 70, 80];

/** Toolkit logos that gently bob up and down, each on its own rhythm. */
export default function ToolBubbles() {
  return (
    <div className="mx-auto mt-[clamp(28px,5vw,48px)] flex max-w-[980px] flex-wrap justify-center gap-[clamp(14px,3vw,36px)]">
      {tools.map((tool, index) => (
        <div
          key={tool.name}
          title={tool.name}
          className="flex animate-tool-bob flex-col items-center gap-2.5"
          style={{
            animationDuration: `${3.2 + (index % 4) * 0.5}s`,
            animationDelay: `${-index * 0.37}s`,
          }}
        >
          <div
            className="size-(--mobile) transition-transform duration-300 hover:scale-112 md:size-(--desktop)"
            style={
              {
                "--mobile": `${mobileSizes[index % 5]}px`,
                "--desktop": `${desktopSizes[index % 5]}px`,
              } as React.CSSProperties
            }
          >
            <LogoChip tech={tool} size="fill" iconSize="48%" />
          </div>
          <span className="text-[11px] text-ink2 md:text-[13px]">{tool.name}</span>
        </div>
      ))}
    </div>
  );
}
