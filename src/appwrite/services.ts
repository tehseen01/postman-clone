import { conf } from "@/lib";
import { Client, Databases, ID, Query } from "appwrite";

interface CreateRequest {
  collectionId: string;
  data: { userId: string; parentId: string };
}

class Service {
  client = new Client();
  database: Databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
  }

  async createCollection({ userId }: { userId: string }) {
    try {
      const newDocument = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.foldersCollectionId,
        ID.unique(),
        { userId: userId }
      );

      return newDocument;
    } catch (error) {
      throw error;
    }
  }

  async getAllDocs(collectionId: string, userId: string) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        collectionId,
        [Query.equal("userId", userId)]
      );
    } catch (error) {
      throw error;
    }
  }

  async updateDocument(collectionId: string, documentId: string) {
    await this.database.updateDocument(
      conf.appwriteDatabaseId,
      collectionId,
      documentId
    );
  }

  async createRequest(data: { userId: string; parentId: string }) {
    try {
      const newDocument = await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.requestsCollectionId,
        ID.unique(),
        data
      );

      return newDocument;
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();

export default service;
