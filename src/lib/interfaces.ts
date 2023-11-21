export interface Collection {
  id: string;
  name: string;
}

export interface Request extends Collection {
  collectionID: string;
  requestType: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}
