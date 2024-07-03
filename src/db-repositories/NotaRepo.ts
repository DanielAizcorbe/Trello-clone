import { Repo } from "./Repo";
import { CreationNotaData } from "./dataInterfaces";

export class NotaRepo extends Repo {

    private db() {
        return super.getConnection().nota;
    }

    async getNota(idNota: number) {
        const nota = await this.db().findUnique({
            where: {
                id: idNota
            }
        })

        return nota;
    }

    async createNote(data: CreationNotaData) {
        
        const notaCreada = await this.db().create({
            data: data,
        })

        return notaCreada;
    }

    async editarNota(data: any) {
        const notaEditada = await this.db().update({
            data: data,
            where: {
                id: data.id
            }
        })

        return notaEditada;
    }

    async borrarNota(notaId: number) {
        const notaBorrada = await this.db().delete({
            where: {
                id: notaId
            }
        })

        return notaBorrada;
    }
}

