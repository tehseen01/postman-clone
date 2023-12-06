import { Button } from "@/components/ui/button";
import React from "react";
import { useCreateRequest } from "@/hooks";

const SidebarRequest = ({ collectionID }: { collectionID: string }) => {
  const { handleCreateRequest, loading } = useCreateRequest();

  const createRequestHandler = async () => {
    await handleCreateRequest(collectionID);
  };

  return (
    <div className="text-sm py-1 pl-8">
      This collection is empty{" "}
      <Button
        disabled={loading}
        asChild
        className="p-0 h-auto"
        variant={"link"}
        onClick={createRequestHandler}
      >
        <span className="text-sky-700 cursor-pointer">
          {loading ? "Creating..." : "add a request"}{" "}
        </span>
      </Button>{" "}
      to start working.
    </div>
  );
};

export default SidebarRequest;
