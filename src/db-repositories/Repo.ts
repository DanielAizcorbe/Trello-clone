import { PrismaClient } from "@prisma/client";
import prisma from "../../prisma/prisma";

export abstract class Repo {
    private readonly dbConnection: PrismaClient;

    constructor() {
        this.dbConnection = prisma;
    }

    getConnection(): PrismaClient {
        return this.dbConnection;
    }
}