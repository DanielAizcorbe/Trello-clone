import { NotaRepo } from "./NotaRepo";
import { Repo } from "./Repo";
import { CreationNotaData } from "./dataInterfaces";

const repoNotas = new NotaRepo();

export class ListaRepo extends Repo {

    private db() {
        return super.getConnection().lista;
    }

    async createList(idTablero: string, data: any) {
        const list = await this.db().create({
            data: {
                tableroId: idTablero,
                posicion: data.posicion,
                titulo: data.titulo,
            }
        });

        return list;
    }

    async updateLista(lista: string, data: any) {
        const listaActualizada = await this.db().update({
            where: {
                id: lista
            },
            data: {
                titulo: data.titulo
            },
            include: {
                notas: true
            }
        });

        return listaActualizada;
    }

    async agregarNota(notaData: CreationNotaData) {
        const notaCreada = await repoNotas.createNote(notaData);
        return notaCreada;
    }

    async cantidadNotas(idLista: string) {
        const count = await this.db().findMany({
            where: { id: idLista },
            select: {
                _count: {
                    select: { notas: true },
                },
            },
        });

        return count[0]?._count?.notas || 0;
    }

    async borrarLista(idLista: string) {
        const borrado = await this.db().delete({
            where: {
                id: idLista
            },
            include: {
                notas: true
            }
        })

        return borrado;
    }
}
