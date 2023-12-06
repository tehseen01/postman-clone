import { Account, Client, Databases, ID, Query } from "appwrite";
import { CreateAccount, Login } from "@/lib/interfaces";
import { conf } from "@/lib";

class AuthService {
  client = new Client();
  account: Account;
  database: Databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
    this.database = new Databases(this.client);
  }

  async createAccount({ email, password, name }: CreateAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.logIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async guestLogin() {
    try {
      const userAccount = await this.account.createAnonymousSession();

      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async logIn({ email, password }: Login) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error: any) {
      throw error;
    }
  }

  async currentUser() {
    try {
      const user = await this.account.get();

      return user;
    } catch (error) {
      console.error(error);
      // throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
