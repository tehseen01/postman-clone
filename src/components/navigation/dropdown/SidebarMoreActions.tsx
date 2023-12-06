import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCreateRequest, useToggleRename } from "@/hooks";

interface IProp {
  children: React.ReactNode;
  dropdownType: "collection" | "request";
  actionId: string;
}

const SidebarMoreActions = ({ children, dropdownType, actionId }: IProp) => {
  const handleRename = useToggleRename();
  const { handleCreateRequest } = useCreateRequest();

  const handleAddRequest = async () => {
    await handleCreateRequest(actionId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>
          {dropdownType === "request" ? "Request" : "Collection"} Actions
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownType === "collection" && (
          <DropdownMenuItem onClick={handleAddRequest}>
            <span>Add Request</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => handleRename(actionId)}>
          <span>Rename</span>
          <DropdownMenuShortcut>⌘+R</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Duplicate</span>
          <DropdownMenuShortcut>⌘+D</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Delete</span>
          <DropdownMenuShortcut>Del</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarMoreActions;
