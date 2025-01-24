import { cn } from "@/lib/utils";

export const Divider = ({
  featured,
  text,
}: {
  featured?: boolean;
  text: string;
}) => {
  return (
    <div className="relative py-4">
      <div
        className={cn("w-full h-px bg-neutral-950", featured && "bg-white")}
      />
      <div
        className={cn(
          "w-full h-px bg-neutral-800",
          featured && "bg-neutral-200"
        )}
      />
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-0.5 px-2  rounded-xl bg-neutral-800 shadow-[0px_-1px_0px_0px_var(--neutral-700)] flex items-center justify-center",
          featured && "bg-white shadow-aceternity text-neutral-700"
        )}
      >
        {text}
      </div>
    </div>
  );
};
