type CircleButtonProps = {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  size?: "md" | "lg";
};

/** Round outlined button that fills with the accent colour on hover. */
export default function CircleButton({ label, onClick, children, size = "md" }: CircleButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`grid cursor-pointer place-items-center rounded-full border border-line2 text-lg transition-colors duration-250 hover:border-accent hover:bg-accent hover:text-on-accent ${
        size === "lg" ? "size-14" : "size-12"
      }`}
    >
      {children}
    </button>
  );
}
