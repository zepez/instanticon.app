"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ControlBackground from "@/components/control-background";
import ControlForeground from "@/components/control-foreground";

export default function Control() {
  return (
    <Tabs defaultValue="background" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="background" className="w-full">
          Background
        </TabsTrigger>
        <TabsTrigger value="icon" className="w-full">
          Icon
        </TabsTrigger>
      </TabsList>

      <TabsContent value="background">
        <ControlBackground />
      </TabsContent>

      <TabsContent value="icon">
        <ControlForeground />
      </TabsContent>
    </Tabs>
  );
}
