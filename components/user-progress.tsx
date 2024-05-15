import Link from "next/link";
import { Button } from "./ui/button";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: {
    imageSrc: string;
    title: string;
  };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">Courses</Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          Points: {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          Hearts:{" "}
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
