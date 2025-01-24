import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";

export const Step = ({
  children,
  additional,
  featured,
}: {
  children: React.ReactNode;
  additional?: boolean;
  featured?: boolean;
}) => {
  return (
    <div className="flex items-start justify-start gap-2 mb-4 last-of-type:mb-0">
      <div
        className={cn(
          "h-4 w-4 rounded-full bg-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5",
          additional ? "bg-indigo-600" : "bg-neutral-700"
        )}
      >
        <IconCheck className="h-3 w-3 [stroke-width:4px] text-neutral-300" />
      </div>
      <div
        className={cn(
          "font-medium text-white text-sm",
          featured && "text-black"
        )}
      >
        {children}
      </div>
    </div>
  );
};
