import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <Button size={"icon"} className="aspect-square" variant={"ghost"}>
        <Plus />
      </Button>
      <Input placeholder="Search" type="text" />
    </div>
  );
};

export default Header;
