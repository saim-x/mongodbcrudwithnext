import TopicsList from "@/components/TopicsList";
import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HoverCardDemo } from "@/components/HoverCardSaim";

export default function Home() {
  return (
    <>
      <div>
        <TopicsList />
        <HoverCardDemo />
      </div>
    </>
  );
}
