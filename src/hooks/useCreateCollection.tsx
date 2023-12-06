import { Service } from "@/appwrite";
import { useToast } from "@/components/ui/use-toast";
import { Types, useStore } from "@/context";
import { useState } from "react";

const useCreateCollection = () => {
  const { toast } = useToast();
  const { dispatch, state } = useStore();

  const [loading, setLoading] = useState(false);

  const handleCreateCollection = async () => {
    setLoading(true);
    try {
      if (state.user) {
        const newDocument = await Service.createCollection({
          userId: state.user.$id,
        });

        dispatch({
          type: Types.ActionTypes.CREATE_COLLECTION,
          payload: {
            $id: newDocument.$id,
            $createdAt: newDocument.$createdAt,
            $updatedAt: newDocument.$updatedAt,
            name: newDocument.name,
            userId: newDocument.userId,
          },
        });
      }
      setLoading(false);
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Failed to create collection",
        description: error.message,
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return { loading, handleCreateCollection };
};

export default useCreateCollection;
