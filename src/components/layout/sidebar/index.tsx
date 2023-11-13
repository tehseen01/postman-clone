import React from "react";
import Header from "./Header";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="w-[300px] border-r p-2">
      <Header />
      <div className="mt-4 flex items-center justify-center flex-col h-full text-center gap-2">
        <h2 className="text-lg font-medium leading-5">
          Create a collection for your requests
        </h2>
        <p className="text-neutral-600">
          A collection lets you group related requests and easily set common
          authorization, tests, scripts, and variables for all requests in it.
        </p>
        <Button variant={"outline"}>Create collection</Button>
      </div>
    </aside>
  );
};

export default Sidebar;
