"use client";

import { Companion, Message } from "@prisma/client";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      message: Number;
    };
  };
}
export const ChatClient = ({companion}:ChatClientProps) => {
  return <div>news</div>;
};
