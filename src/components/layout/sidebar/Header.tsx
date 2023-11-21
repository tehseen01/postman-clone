import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUID } from "@/lib/utils";
import useStore from "@/store/context";
import { ActionTypes } from "@/store/types";
import { Plus } from "lucide-react";
import React from "react";

const Header = () => {
  const id = getUID();
  const { dispatch } = useStore();

  return (
    <div className="flex items-center justify-between gap-2 p-2">
      <Button
        size={"icon"}
        className="aspect-square w-8 h-8"
        variant={"ghost"}
        title="Create new collection"
        onClick={() => {
          dispatch({
            type: ActionTypes.CREATE_COLLECTION,
            payload: { id, name: "New Collection" },
          });
        }}
      >
        <Plus />
      </Button>
      <Input placeholder="Search" type="text" className="h-8 py-2" />
    </div>
  );
};

export default Header;
