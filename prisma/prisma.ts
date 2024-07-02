import { PrismaClient } from "@prisma/client";

export class PrismaSingleton {

    private static instance: PrismaClient;

    private constructor() {
    }

    static getInstance(): PrismaClient {
        if(!this.instance) {
            this.instance = new PrismaClient();
        }
        return this.instance;
    }

}