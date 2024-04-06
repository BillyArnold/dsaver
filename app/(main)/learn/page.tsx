import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Data Structures", imageSrc: "/logo.png" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Data Structures" />
        <div className="space-y-4">
          <div className="h-[700px] bg-blue-500 w-full"></div>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
