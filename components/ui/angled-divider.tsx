import { cn } from "@/lib/utils";

interface AngledDividerProps {
  className?: string;
  direction?: "top" | "bottom" | "both";
  color?: string;
}

export function AngledDivider({ 
  className, 
  direction = "both",
  color = "bg-background"
}: AngledDividerProps) {
  if (direction === "both") {
    return (
      <div className={cn("relative h-24 w-full overflow-hidden", className)}>
        <div 
          className={cn("absolute inset-0", color)}
          style={{
            clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)"
          }}
        />
      </div>
    );
  }

  if (direction === "top") {
    return (
      <div className={cn("relative h-16 w-full overflow-hidden", className)}>
        <div 
          className={cn("absolute inset-0", color)}
          style={{
            clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 100%)"
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative h-16 w-full overflow-hidden", className)}>
      <div 
        className={cn("absolute inset-0", color)}
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)"
        }}
      />
    </div>
  );
}
