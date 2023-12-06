import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { reducers } from "./reducers";
import { Action, ActionTypes, State } from "./types";
import { AuthService, Service } from "@/appwrite";
import { conf } from "@/lib";

const StoreContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

const initialState: State = {
  collections: [],
  selectedCollection: null,
  requests: [],
  renameId: "",
  user: null,
};

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    (async () => {
      try {
        if (state.user) {
          const collections = await Service.getAllDocs(
            conf.foldersCollectionId,
            state.user.$id
          );
          if (collections.total > 0) {
            dispatch({
              type: ActionTypes.SET_COLLECTIONS,
              payload: collections.documents as any,
            });
          }

          const requests = await Service.getAllDocs(
            conf.requestsCollectionId,
            state.user.$id
          );
          if (requests.total > 0) {
            dispatch({
              type: ActionTypes.SET_REQUESTS,
              payload: requests.documents as any,
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [state.user]);

  useEffect(() => {
    (async () => {
      try {
        const currentUser = await AuthService.currentUser();
        if (!currentUser) {
          const newUser = await AuthService.guestLogin();
          dispatch({
            type: ActionTypes.NEW_USER,
            payload: {
              $id: newUser.userId,
              $createdAt: newUser.$createdAt,
              $updatedAt: newUser.$createdAt,
              email: "",
              name: "",
            },
          });
        } else {
          dispatch({
            type: ActionTypes.NEW_USER,
            payload: {
              $id: currentUser.$id,
              $createdAt: currentUser.$createdAt,
              $updatedAt: currentUser.$updatedAt,
              email: currentUser.email,
              name: currentUser.name,
            },
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export default useStore;
