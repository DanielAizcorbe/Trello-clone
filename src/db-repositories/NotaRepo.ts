import { Repo } from "./Repo";
import { CreationNotaData } from "./dataInterfaces";

export class NotaRepo extends Repo {

    private db() {
        return super.getConnection().nota;
    }

    async createNote(data: CreationNotaData) {
        
        const notaCreada = await this.db().create({
            data: data,
        })

        return notaCreada;
    }

    async borrarNota() {
        
    }
}

