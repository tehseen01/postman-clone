import { Input } from "@/components/ui/input";
import { Types, useStore } from "@/context";
import { useToggleRename } from "@/hooks";
import { RefObject, useState } from "react";

interface RenameInputProps {
  defaultValue?: string;
  renameId: string;
  renameType: "COLLECTION" | "REQUEST";
  inputRef?: RefObject<HTMLInputElement>;
}

const RenameInput = ({
  defaultValue,
  renameId,
  renameType,
  inputRef,
}: RenameInputProps) => {
  const { dispatch } = useStore();
  const [value, setValue] = useState(defaultValue);
  const toggleRename = useToggleRename();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleUpdate = () => {
    if (value) {
      dispatch({
        type:
          renameType === "COLLECTION"
            ? Types.ActionTypes.UPDATE_COLLECTION
            : Types.ActionTypes.UPDATE_REQUEST,
        payload: { $id: renameId, value: value },
      });
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      toggleRename("");
      handleUpdate();
    }
  };

  return (
    <Input
      ref={inputRef}
      value={value}
      onChange={handleChange}
      onKeyDown={handleEnter}
      className="focus-visible:ring-offset-0 focus-visible:ring-0 rounded-none h-full p-1"
    />
  );
};

export default RenameInput;
