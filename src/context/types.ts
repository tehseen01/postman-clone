import { Interfaces } from "@/lib";

export enum ActionTypes {
  CREATE_COLLECTION = "CREATE_COLLECTION",
  SET_COLLECTIONS = "SET_COLLECTIONS",
  UPDATE_COLLECTION = "UPDATE_COLLECTION",
  DELETE_COLLECTION = "DELETE_COLLECTION",
  SELECT_COLLECTION = "SELECT_COLLECTION",
  CREATE_REQUEST = "CREATE_REQUEST",
  SET_REQUESTS = "SET_REQUESTS",
  UPDATE_REQUEST = "UPDATE_REQUEST",
  IS_RENAMING = "IS_RENAMING",
  NEW_USER = "NEW_USER",
}

export type Action =
  | { type: ActionTypes.CREATE_COLLECTION; payload: Interfaces.Collection }
  | { type: ActionTypes.SET_COLLECTIONS; payload: Interfaces.Collection[] }
  | {
      type: ActionTypes.UPDATE_COLLECTION;
      payload: { $id: string; value: string };
    }
  | { type: ActionTypes.SELECT_COLLECTION; payload: Interfaces.Collection }
  | { type: ActionTypes.CREATE_REQUEST; payload: Interfaces.IRequest }
  | { type: ActionTypes.SET_REQUESTS; payload: Interfaces.IRequest[] }
  | {
      type: ActionTypes.UPDATE_REQUEST;
      payload: { $id: string; value: string };
    }
  | { type: ActionTypes.IS_RENAMING; payload: string }
  | { type: ActionTypes.NEW_USER; payload: Interfaces.User };

export interface State {
  user: Interfaces.User | null;
  collections: Interfaces.Collection[] | [];
  selectedCollection: Interfaces.Collection | null;
  requests: Interfaces.IRequest[] | [];
  renameId: string;
}
