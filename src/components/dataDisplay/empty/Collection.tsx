import { Button } from "@/components/ui/button";
import { getUID } from "@/lib/utils";
import useStore from "@/store/context";
import { ActionTypes } from "@/store/types";
import React from "react";

const Collection = () => {
  const id = getUID();
  const { dispatch } = useStore();

  return (
    <div className="mt-4 flex items-center justify-center flex-col h-[calc(100%_-_4rem)] text-center gap-2 p-2">
      <h2 className="text-lg font-medium leading-5">
        Create a collection for your requests
      </h2>
      <p className="text-neutral-600">
        A collection lets you group related requests and easily set common
        authorization, tests, scripts, and variables for all requests in it.
      </p>
      <Button
        variant={"outline"}
        onClick={() =>
          dispatch({
            type: ActionTypes.CREATE_COLLECTION,
            payload: { id: id, name: "New collection" },
          })
        }
      >
        Create collection
      </Button>
    </div>
  );
};

export default Collection;
