import type { Message } from "@/types";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User, LoaderCircle } from "lucide-react";

interface ChatMessageProps {
  message: Message;
  isLoading?: boolean;
}

export function ChatMessage({ message, isLoading = false }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex items-start gap-4",
        isUser && "justify-end"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 border">
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Bot className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-[75%] rounded-lg p-3 text-sm shadow-md",
          isUser
            ? "bg-accent text-accent-foreground"
            : "bg-card text-card-foreground"
        )}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <LoaderCircle className="w-4 h-4 animate-spin" />
            <span>Thinking...</span>
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{message.content}</p>
        )}
      </div>
      {isUser && (
        <Avatar className="h-8 w-8 border">
          <AvatarFallback className="bg-card">
            <User className="h-5 w-5 text-primary" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
