export interface CreateAccount {
  email: string;
  password: string;
  name: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface User {
  $id: string;
  name: string;
  email: string;
  $createdAt: string;
  $updatedAt: string;
}

export interface Collection {
  $id: string;
  name: string;
  userId: string;
  $createdAt: string;
  $updatedAt: string;
}

export interface IRequest extends Collection {
  parentId: string;
  requestType: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}
