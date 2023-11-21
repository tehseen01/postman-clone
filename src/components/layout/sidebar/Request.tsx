import { DataDisplay } from "@/components";
import { Button } from "@/components/ui/button";
import { cn, getUID } from "@/lib/utils";
import useStore from "@/store/context";
import { MoreHorizontal } from "lucide-react";

interface IProp {
  collectionID: string;
}

const Request = (prop: IProp) => {
  const uniqueID = getUID();
  const { collectionID } = prop;
  const { state, dispatch } = useStore();
  const { requests } = state;

  return (
    <div>
      {requests &&
      requests.length > 0 &&
      requests.find((request) => request.collectionID === collectionID) ? (
        <div className="text-sm">
          {requests
            .filter((request) => request.collectionID === collectionID)
            .map((request) => (
              <div
                key={request.id}
                className=" py-1 pl-12 hover:bg-gray-100 flex items-center pr-3 group"
              >
                <span
                  className={cn(
                    "h-6 w-6 flex items-center justify-center",
                    request.requestType === "GET" && "text-green-500 pr-1"
                  )}
                >
                  {request.requestType}
                </span>
                <p className="flex-1">{request.name}</p>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  className="p-0 h-6 w-6  hidden group-hover:flex"
                >
                  <MoreHorizontal className="w-5 h-5" strokeWidth={1.5} />
                </Button>
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
