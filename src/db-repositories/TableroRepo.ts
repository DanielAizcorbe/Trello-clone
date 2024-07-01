import { Tablero } from '@prisma/client'
import { Repo } from './Repo';
import { ListaRepo } from './ListaRepo';

const repoLista = new ListaRepo();

export class TableroRepo extends Repo {

    private db() {
        return this.getConnection().tablero;
    }

    async getTableros() {
        const tableros = await this.db()
            .findMany({
                include: {
                    listas: {
                        include: {
                            notas: true,
                        },
                    },
                },
            });
        return tableros;
    }

    async getTablero(nombre: string) {
        const tablero = await this.db().findUnique({
            where: { titulo: nombre },
            include: {
                listas: {
                    include: {
                        notas: true,
                    },
                },
            },
        })
        return tablero;
    }

    async createTablero(tableroData: { titulo: string, fondoUrl?: string }) {
        const tableroCreado = await this.db().create({
            data: tableroData
        })
        return tableroCreado;
    }

    async deteleTablero(nombre: string): Promise<Tablero> {
        const deletedTablero = await this.db().delete({
            where: {
                titulo: nombre
            },
            include: {
                listas: true
            }
        })
        return deletedTablero;
    }

    async updateTablero(nombre: string, tableroData: { titulo?: string, fondoUrl?: string }) {
        const updatedTablero = await this.db().update({
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

    async borrarTodo() {
        await this.db().deleteMany({})
    }

    async crearLista(nombreTablero: string, nombreLista: string) {
        const tablero = await this.getTablero(nombreTablero);

        if (!tablero) {
            throw new Error("booom")
        }

        const cantidadListas = tablero.listas.length;

        const datosLista = {
            posicion: cantidadListas + 1,
            titulo: nombreLista,
        }
        const lista = await repoLista.createList(tablero?.id, datosLista)
        return lista;
    }
}