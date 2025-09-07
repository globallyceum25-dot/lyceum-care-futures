import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    if (!isOpen) {
      // Open BotPenguin chat in new window if widget doesn't load
      window.open(
        "https://page.botpenguin.com/68bd6fe95500a0e58effab7e/68bd6f07d72892e902e22bb1",
        "BotPenguinChat",
        "width=400,height=600,scrollbars=yes,resizable=yes"
      );
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary-foreground" />
          ) : (
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          )}
        </Button>
      </div>

      {/* Chat Widget Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-background border border-border rounded-lg shadow-2xl z-50 overflow-hidden">
          <iframe
            src="https://page.botpenguin.com/68bd6fe95500a0e58effab7e/68bd6f07d72892e902e22bb1"
            className="w-full h-full border-0"
            title="Lyceum Day Care Chat Support"
          />
        </div>
      )}
    </>
  );
};

export default ChatBot;