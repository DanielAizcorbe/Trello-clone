import { PrismaClient, Tablero } from '@prisma/client'

const prisma = new PrismaClient();

export class TableroRepo {
    private readonly dbConection: PrismaClient;

    constructor() {
        this.dbConection = prisma;
    }

    async getTableros() {
        const tableros = await this.dbConection
            .tablero.findMany({
                include: {
                    listas: true
                }
            });
        return tableros;
    }

    async getTablero(id: string) {
        const tablero = await this.dbConection.tablero.findUnique({
            where: { id: id },
            include: { listas: true }
        })
        return tablero;
    }

    async createTablero(tableroData: { titulo: string, fondoUrl?: string }) {
        const tableroCreado = await this.dbConection.tablero.create({
            data: tableroData
        })
        return tableroCreado;
    }

    async deteleTablero(id: string): Promise<Tablero> {
        const deletedTablero = await this.dbConection.tablero.delete({
            where: {
                id: id
            }
        })
        return deletedTablero;
    }

    async updateTablero(id: string, tableroData: { titulo?: string, fondoUrl?: string }) {
        const updatedTablero = await this.dbConection.tablero.update({
            where: {
                id: id
            },
            data: {
                titulo: tableroData.titulo,
                fondoUrl: tableroData.fondoUrl
            }
        })
        return updatedTablero;
    }
}