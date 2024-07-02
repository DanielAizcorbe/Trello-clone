import { ListaRepo } from "@/db-repositories/ListaRepo";
import { CreationNotaData } from "@/db-repositories/dataInterfaces";
import { NextRequest, NextResponse } from "next/server";

const repo = new ListaRepo();

interface Params {
    params: {
        tableroNombre: string,
        idLista: string
    }
}
// api/tableros/nombre/id-lista
// UPDATE LISTA
export async function PUT(req: NextRequest, urlParams: Params) {
    const { params } = urlParams;
    const body = await req.json();
    const recursoActualizado = await repo.updateLista(params.idLista, body)
    return NextResponse.json(recursoActualizado);
}

// CREAR NOTA
export async function POST(req: NextRequest, urlParams: Params) {
    const { params } = urlParams;
    const body = await req.json();
    const cantidadNotas = await repo.cantidadNotas(params.idLista);
    const notaData: CreationNotaData = {
        listaId: params.idLista,
        posicion: cantidadNotas + 1,
        titulo: body.titulo,
        descripcion: body.descripcion,
        fondoUrl: body.fondoUrl
    }
    const nuevaNota = await repo.agregarNota(notaData);

    return NextResponse.json(nuevaNota);
}

// BORRAR LISTA
export async function DELETE(req: NextRequest, urlParams: Params) {
    const idLista = urlParams.params.idLista;
    const recursoEliminado = await repo.borrarLista(idLista);
    return NextResponse.json(recursoEliminado);
}

