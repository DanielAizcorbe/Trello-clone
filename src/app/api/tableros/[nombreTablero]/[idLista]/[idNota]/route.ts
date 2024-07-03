import { NotaRepo } from "@/db-repositories/NotaRepo";
import { NextRequest, NextResponse } from "next/server";

const repo = new NotaRepo();

// ACTUALIZAR NOTA
export async function PUT(request: NextRequest, params: any) {
    const data = await request.json();
    const id = parseInt(params.params.idNota);
    const nota = {...data, id: id };
    
    const updated = await repo.editarNota(nota);
    return NextResponse.json(updated);
}

// BORRAR NOTA
export async function DELETE(request: NextRequest, params: any) {
    const id = parseInt(params.params.idNota);    
    const borrado = await repo.borrarNota(id)
    return NextResponse.json(borrado);
}

// OBTENER NOTA
export async function GET(request: NextRequest, params: any) {
    const id = parseInt(params.params.idNota);    
    const nota = await repo.getNota(id)
    return NextResponse.json(nota);
}