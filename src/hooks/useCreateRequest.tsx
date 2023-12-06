import { Service } from "@/appwrite";
import { useToast } from "@/components/ui/use-toast";
import { Types, useStore } from "@/context";
import { useState } from "react";

const useCreateRequest = () => {
  const { toast } = useToast();
  const { dispatch, state } = useStore();

  const [loading, setLoading] = useState(false);

  const handleCreateRequest = async (parentId: string) => {
    setLoading(true);
    try {
      if (state.user) {
        const newDocument = await Service.createRequest({
          userId: state.user.$id,
          parentId: parentId,
        });

        dispatch({
          type: Types.ActionTypes.CREATE_REQUEST,
          payload: {
            $id: newDocument.$id,
            $createdAt: newDocument.$createdAt,
            $updatedAt: newDocument.$updatedAt,
            name: newDocument.name,
            userId: newDocument.userId,
            parentId: newDocument.parentId,
            requestType: newDocument.requestType,
          },
        });
      }
      setLoading(false);
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Failed to create Request",
        description: error.message,
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return { loading, handleCreateRequest };
};

export default useCreateRequest;
