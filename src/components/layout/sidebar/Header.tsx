import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Plus } from "lucide-react";
import React from "react";
import { useCreateCollection } from "@/hooks";
import { conf } from "@/lib";

const Header = () => {
  const { handleCreateCollection, loading } = useCreateCollection({
    collectionId: conf.foldersCollectionId,
  });

  return (
    <div className="flex items-center justify-between gap-2 p-2">
      <Button
        size={"icon"}
        className="aspect-square w-8 h-8"
        variant={"ghost"}
        title="Create new collection"
        onClick={handleCreateCollection}
        disabled={loading}
      >
        {loading ? <Loader2 className="animate-spin" /> : <Plus />}
      </Button>
      <Input placeholder="Search" type="text" className="h-8 py-2" />
    </div>
  );
};

export default Header;
