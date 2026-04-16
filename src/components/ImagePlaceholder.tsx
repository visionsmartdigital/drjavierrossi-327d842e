interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export function ImagePlaceholder({ label, className = "", aspectRatio = "4/3" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-surface border border-border rounded-lg ${className}`}
      style={{ aspectRatio }}
    >
      <p className="text-muted-foreground text-sm text-center px-4 font-sans">{label}</p>
    </div>
  );
}
