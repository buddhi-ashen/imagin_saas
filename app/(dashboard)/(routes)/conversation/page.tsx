import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
// ... (other imports)

const ConversationPage = () => {
  // ... (existing code)

  // Function to handle the button click and redirect to the URL
  const handleButtonClick = () => {
    window.location.href = "https://imagingpt.vercel.app/";
  };

  return (
    <div>
      {/* New heading */}
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Conversation Page</h1>

      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        {/* New Button component */}
        <Button className="col-span-12 lg:col-span-2 w-full" size="icon" onClick={handleButtonClick}>
          Go to ImaginGPT V.1.0
        </Button>

        {/* ... (other existing code) */}
      </div>
    </div>
  );
};

export default ConversationPage;
