"use client"; // Add this line at the beginning of the file
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      

      {/* New button */}
      <div className="mt-4 px-4 lg:px-8">
        <Link href="https://imagingpt.vercel.app/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Button className="w-full" size="icon">
              Try ImaginGPT V.1.0
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ConversationPage;
