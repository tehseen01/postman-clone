import { Action, ActionTypes, State } from "./types";

export const reducers = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.CREATE_COLLECTION:
      return {
        ...state,
        collections: [action.payload, ...state.collections],
      };
    case ActionTypes.UPDATE_COLLECTION:
      const updatedCollection = state.collections.map((c) =>
        c.$id === action.payload.$id ? { ...c, name: action.payload.value } : c
      );
      return {
        ...state,
        collections: updatedCollection,
      };
    case ActionTypes.SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    case ActionTypes.SELECT_COLLECTION:
      return {
        ...state,
        selectedCollection: action.payload,
      };
    case ActionTypes.CREATE_REQUEST:
      return {
        ...state,
        requests: [action.payload, ...state.requests],
      };
    case ActionTypes.SET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
      };
    case ActionTypes.UPDATE_REQUEST:
      const updatedRequest = state.requests.map((c) =>
        c.$id === action.payload.$id ? { ...c, name: action.payload.value } : c
      );
      return {
        ...state,
        requests: updatedRequest,
      };
    case ActionTypes.IS_RENAMING:
      return {
        ...state,
        renameId: action.payload,
      };
    case ActionTypes.NEW_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
