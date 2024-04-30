import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  onClick,
  disabled,
  active,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full font-bold border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-bottom-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[117px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <div className="min-h-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <Check className="check-mark text-white stroke-[4] h-4 w-4" />
          </div>
        )}
      </div>
      {title.length > 0 && (<p>{title}</p>)}
      <div></div>
    </div>
  );
};
