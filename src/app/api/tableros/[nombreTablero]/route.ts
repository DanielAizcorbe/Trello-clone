import { TableroRepo } from '@/db-repositories/TableroRepo';
import { NextRequest, NextResponse } from "next/server";

const repo = new TableroRepo();

interface Params {
    params: {
        nombreTablero: string
    }
}

export async function GET(request: NextRequest, params: Params) {
    const nombreTablero = params.params.nombreTablero
    const tablero = await repo.getTablero(nombreTablero);
    return NextResponse.json(tablero);
}

export async function DELETE(request: NextRequest, params: Params) {
    const nombreTablero = params.params.nombreTablero
    const tablero = await repo.deteleTablero(nombreTablero);
    return NextResponse.json(tablero);
}

export async function PUT(request: NextRequest, params: Params) {
    const nombreTablero = params.params.nombreTablero;
    const body = await request.json();
    const updated = await repo.updateTablero(nombreTablero, body);
    return NextResponse.json(updated);
}