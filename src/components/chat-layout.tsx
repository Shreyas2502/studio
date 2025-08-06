"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import type { Message } from "@/types";
import { sendMessage } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "@/components/chat-message";
import { SendHorizontal, LoaderCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function ChatLayout() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I'm ShreyasGPT. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const viewportRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (viewportRef.current) {
        viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [messages, isPending]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const userMessage: Message = { role: "user", content: trimmedInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    startTransition(async () => {
      const response = await sendMessage(trimmedInput);
      if(response.includes("Sorry, I encountered an error")){
         toast({
            title: "An error occurred",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
         });
      }
      const assistantMessage: Message = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background p-4">
        <Card className="h-full w-full max-w-3xl mx-auto flex flex-col shadow-2xl rounded-xl">
          <CardHeader className="border-b">
            <CardTitle className="text-2xl font-bold text-center text-primary tracking-wider">
              ShreyasGPT
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            <ScrollArea className="flex-1" viewportRef={viewportRef}>
                <div className="p-6 space-y-6">
                    {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg} />
                    ))}
                    {isPending && (
                    <ChatMessage
                        message={{ role: "assistant", content: "" }}
                        isLoading={true}
                    />
                    )}
                </div>
            </ScrollArea>
            <CardFooter className="p-4 border-t bg-card/50">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isPending}
                  autoComplete="off"
                  className="flex-1"
                />
                <Button type="submit" disabled={isPending || !input.trim()} size="icon" className="flex-shrink-0 bg-accent hover:bg-accent/90">
                  {isPending ? (
                    <LoaderCircle className="h-5 w-5 animate-spin" />
                  ) : (
                    <SendHorizontal className="h-5 w-5" />
                  )}
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </CardContent>
        </Card>
    </div>
  );
}
