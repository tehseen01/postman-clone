import { Button } from "@/components/ui/button";
import { getUID } from "@/lib/utils";
import useStore from "@/store/context";
import { ActionTypes } from "@/store/types";
import React from "react";

const SidebarRequest = ({ collectionID }: { collectionID: string }) => {
  const uniqueID = getUID();
  const { state, dispatch } = useStore();

  return (
    <div className="text-sm py-1 pl-8">
      This collection is empty{" "}
      <Button
        asChild
        className="p-0 h-auto"
        variant={"link"}
        onClick={() => {
          dispatch({
            type: ActionTypes.CREATE_REQUEST,
            payload: {
              collectionID: collectionID,
              name: "New request",
              requestType: "GET",
              id: uniqueID,
            },
          });
        }}
      >
        <span className="text-sky-700 cursor-pointer">add a request </span>
      </Button>{" "}
      to start working.
    </div>
  );
};

export default SidebarRequest;
