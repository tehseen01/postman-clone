import { Button } from "@/components/ui/button";
import { Interfaces, cn } from "@/lib";
import { ChevronDown, MoreHorizontal, Star } from "lucide-react";
import { useRef, useState } from "react";
import Request from "./Request";
import { DataEntry, Navigation } from "@/components";
import { Types, useStore } from "@/context";
import { useClickOutside, useToggleRename } from "@/hooks";

interface IProp {
  data: Interfaces.Collection | Interfaces.IRequest;
}

const Collection = (prop: IProp) => {
  const { data } = prop;
  const { dispatch, state } = useStore();
  const { selectedCollection } = state;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [openCollection, setOpenCollection] = useState(false);

  const toggleRename = useToggleRename();

  const handleOpenCollection = () => {
    setOpenCollection(!openCollection);
    dispatch({
      type: Types.ActionTypes.SELECT_COLLECTION,
      payload: data,
    });
  };

  useClickOutside(() => {
    toggleRename("");
  }, inputRef);

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between gap-2 px-2 text-sm hover:bg-gray-100 cursor-pointer group relative select-none",
          selectedCollection?.$id === data.$id &&
            "bg-gray-200 hover:bg-gray-200 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary"
        )}
        onClick={handleOpenCollection}
        onDoubleClick={() => toggleRename(data.$id)}
      >
        <span className="aspect-square">
          <ChevronDown
            className={cn("w-4 h-4", !openCollection && "-rotate-90")}
          />
        </span>
        {state.renameId === data.$id ? (
          <DataEntry.Input.RenameInput
            inputRef={inputRef}
            renameType="COLLECTION"
            defaultValue={data.name}
            renameId={data.$id}
          />
        ) : (
          <p className="flex-1 py-1">{data.name}</p>
        )}
        <div className="items-center flex gap-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="aspect-square h-6 w-6"
          >
            <Star
              className="w-4 h-4 hidden group-hover:block"
              strokeWidth={1.5}
            />
          </Button>
          <Navigation.Dropdown.SidebarMoreActions
            dropdownType="collection"
            actionId={data.$id}
          >
            <Button
              variant={"ghost"}
              size={"icon"}
              className="aspect-square h-6 w-6"
            >
              <MoreHorizontal
                className="w-5 h-5 hidden group-hover:block"
                strokeWidth={1.5}
              />
            </Button>
          </Navigation.Dropdown.SidebarMoreActions>
        </div>
      </div>
      {openCollection && <Request collectionID={data.$id} />}
    </>
  );
};

export default Collection;
