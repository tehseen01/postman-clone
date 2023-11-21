import { Button } from "@/components/ui/button";
import { Interfaces } from "@/lib";
import { cn, getUID } from "@/lib/utils";
import useStore from "@/store/context";
import { ActionTypes } from "@/store/types";
import { ChevronDown, MoreHorizontal, Star } from "lucide-react";
import { useState } from "react";
import Request from "./Request";

interface IProp {
  data: Interfaces.Collection | Interfaces.Request;
}

const Collection = (prop: IProp) => {
  const { data } = prop;
  const { dispatch, state } = useStore();
  const { selectedCollection } = state;

  const [openCollection, setOpenCollection] = useState(true);

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between gap-2 px-2 py-1 text-sm hover:bg-gray-100 cursor-pointer group relative",
          selectedCollection?.id === data.id &&
            "bg-gray-200 hover:bg-gray-200 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary"
        )}
        onClick={() => {
          dispatch({
            type: ActionTypes.SELECT_COLLECTION,
            payload: data,
          });
        }}
      >
        <Button
          variant={"ghost"}
          size={"icon"}
          className="aspect-square h-6 w-6"
          onClick={() => setOpenCollection(!openCollection)}
        >
          <ChevronDown
            className={cn("w-4 h-4", !openCollection && "-rotate-90")}
          />
        </Button>
        <p className="flex-1">{data.name}</p>
        <div className="hidden items-center group-hover:flex gap-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="aspect-square h-6 w-6"
          >
            <Star className="w-4 h-4" strokeWidth={1.5} />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="aspect-square h-6 w-6"
          >
            <MoreHorizontal strokeWidth={1.5} />
          </Button>
        </div>
      </div>
      {openCollection && <Request collectionID={data.id} />}
    </>
  );
};

export default Collection;
