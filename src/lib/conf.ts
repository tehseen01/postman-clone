const conf = {
  appwriteURL: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  foldersCollectionId: "656d64a424f3e700a3ee",
  requestsCollectionId: "656d64cfc9ce4e960fd8",
};

export default conf;
