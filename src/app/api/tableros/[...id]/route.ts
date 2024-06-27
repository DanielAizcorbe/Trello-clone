import { TableroRepo } from "@/db-repositories/TableroRepo";
import { NextRequest, NextResponse } from "next/server";

const repo = new TableroRepo();

export async function GET(request: NextRequest, params: any) {
    const id = params.params.id[0]
    const tablero = await repo.getTablero(id);
    return NextResponse.json(tablero);
}

export async function DELETE(request: NextRequest, params: any) {
    const id = params.params.id[0]
    const tablero = await repo.deteleTablero(id);
    return NextResponse.json(tablero);
}