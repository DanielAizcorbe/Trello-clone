import { PrismaClient, Tablero } from '@prisma/client'

const prisma = new PrismaClient();

export class TableroRepo {
    private readonly dbConnection: PrismaClient;

    constructor() {
        this.dbConnection = prisma;
    }

    private getConnection() {
        return this.dbConnection.tablero;
    }

    async getTableros() {
        const tableros = await this.getConnection()
            .findMany({
                include: {
                    listas: true
                }
            });
        return tableros;
    }

    async getTablero(nombre: string) {
        const tablero = await this.getConnection().findUnique({
            where: { titulo: nombre },
            include: { listas: true }
        })
        return tablero;
    }

    async createTablero(tableroData: { titulo: string, fondoUrl?: string }) {
        const tableroCreado = await this.getConnection().create({
            data: tableroData
        })
        return tableroCreado;
    }

    async deteleTablero(nombre: string): Promise<Tablero> {
        const deletedTablero = await this.getConnection().delete({
            where: {
                titulo: nombre
            }
        })
        return deletedTablero;
    }

    async updateTablero(nombre: string, tableroData: { titulo?: string, fondoUrl?: string }) {
        const updatedTablero = await this.getConnection().update({
            where: {
                titulo: nombre
            },
            data: {
                titulo: tableroData.titulo,
                fondoUrl: tableroData.fondoUrl
            }
        })
        return updatedTablero;
    }
}