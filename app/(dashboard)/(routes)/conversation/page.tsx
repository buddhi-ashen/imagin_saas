"use client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";


  return ( 
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          
              <a href="https://imagingpt.vercel.app/">
  <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
    Try ImaginGPT V.1.0
  </Button>
</a>
            </div>
    </div>
   );
}
 
export default ConversationPage;
