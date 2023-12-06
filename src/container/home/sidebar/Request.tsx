import { DataDisplay, DataEntry, Navigation } from "@/components";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context";
import { useClickOutside, useToggleRename } from "@/hooks";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import { useRef } from "react";

interface IProp {
  collectionID: string;
}

const Request = (prop: IProp) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { collectionID } = prop;
  const { state } = useStore();
  const { requests, renameId } = state;

  const toggleRename = useToggleRename();

  useClickOutside(() => {
    toggleRename("");
  }, inputRef);

  return (
    <div>
      {requests &&
      requests.length > 0 &&
      requests.find((find) => find.parentId === collectionID) ? (
        <div className="text-sm select-none">
          {requests
            .filter((request) => request.parentId === collectionID)
            .map((request) => (
              <div
                key={request.$id}
                className=" py-1 pl-12 hover:bg-gray-100 flex items-center pr-3 group cursor-pointer"
                onDoubleClick={() => toggleRename(request.$id)}
              >
                <span
                  className={cn(
                    "h-6 w-6 flex items-center justify-center",
                    request.requestType === "GET" && "text-green-500 pr-1"
                  )}
                >
                  {request.requestType}
                </span>
                {renameId === request.$id ? (
                  <DataEntry.Input.RenameInput
                    inputRef={inputRef}
                    renameId={request.$id}
                    renameType="REQUEST"
                    defaultValue={request.name}
                  />
                ) : (
                  <p className="flex-1">{request.name}</p>
                )}
                <Navigation.Dropdown.SidebarMoreActions
                  dropdownType="request"
                  actionId={request.$id}
                >
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className="p-0 h-6 w-6"
                  >
                    <MoreHorizontal className="w-5 h-5" strokeWidth={1.5} />
                  </Button>
                </Navigation.Dropdown.SidebarMoreActions>
              </div>
            ))}
        </div>
      ) : (
        <DataDisplay.Empty.SidebarRequest collectionID={collectionID} />
      )}
    </div>
  );
};

export default Request;
