import { Action, ActionTypes, State } from "./types";

export const reducers = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.CREATE_COLLECTION:
      return {
        ...state,
        collections: [action.payload, ...state.collections],
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
    default:
      return state;
  }
};
