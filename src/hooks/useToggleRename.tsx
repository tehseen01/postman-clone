import { Types, useStore } from "@/context";

interface RenameProps {}

const useToggleRename = () => {
  const { dispatch } = useStore();

  const handleRename = (actionId: string) => {
    dispatch({
      type: Types.ActionTypes.IS_RENAMING,
      payload: actionId,
    });
  };

  return handleRename;
};

export default useToggleRename;
