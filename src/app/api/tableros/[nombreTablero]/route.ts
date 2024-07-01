import { TableroRepo } from '@/db-repositories/TableroRepo';
import { NextRequest, NextResponse } from "next/server";

const repo = new TableroRepo();

interface Params {
    params: {
        nombreTablero: string
    }
}

// api/tableros/nombre
// GET TABLERO
export async function GET(request: NextRequest, params: Params) {
    const nombreTablero = params.params.nombreTablero
    const tablero = await repo.getTablero(nombreTablero);
    return NextResponse.json(tablero);
}

// BORRAR TABLERO
export async function DELETE(request: NextRequest, params: Params) {
    const nombreTablero = params.params.nombreTablero
    const tablero = await repo.deteleTablero(nombreTablero);
    return NextResponse.json(tablero);
}

// ACTUALIZAR DATOS TABLEROS
export async function PUT(request: NextRequest, params: Params) {
    const nombreTablero = params.params.nombreTablero;
    const body = await request.json();
    const updated = await repo.updateTablero(nombreTablero, body);
    return NextResponse.json(updated);
}

// CREAR LISTA
export async function POST(request: NextRequest, params: Params) {

    const nombreTablero = params.params.nombreTablero;
    const body = await request.json();
    const nombreLista = body.nombreLista
    const listaCreada = await repo.crearLista(nombreTablero, nombreLista);
    return NextResponse.json(listaCreada);
}