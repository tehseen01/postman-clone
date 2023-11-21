import { Collection, Request } from "@/lib/interfaces";

export enum ActionTypes {
  CREATE_COLLECTION = "CREATE_COLLECTION",
  UPDATE_COLLECTION = "UPDATE_COLLECTION",
  DELETE_COLLECTION = "DELETE_COLLECTION",
  SELECT_COLLECTION = "SELECT_COLLECTION",
  CREATE_REQUEST = "CREATE_REQUEST",
}

export type Action =
  | {
      type: ActionTypes.CREATE_COLLECTION;
      payload: Collection;
    }
  | {
      type: ActionTypes.SELECT_COLLECTION;
      payload: Collection;
    }
  | {
      type: ActionTypes.CREATE_REQUEST;
      payload: Request;
    };

export interface State {
  collections: Collection[];
  selectedCollection: Collection | null;
  requests: Request[];
}
