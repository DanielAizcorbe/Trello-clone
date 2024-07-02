import { PrismaClient } from "@prisma/client";
import { PrismaSingleton } from "../../prisma/prisma";

export abstract class Repo {
    private readonly dbConnection: PrismaClient;

    constructor() {
        this.dbConnection = PrismaSingleton.getInstance();
    }

    getConnection(): PrismaClient {
        return this.dbConnection;
    }
}