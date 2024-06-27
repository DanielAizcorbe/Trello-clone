import { TableroRepo } from "@/db-repositories/TableroRepo";
import { NextRequest, NextResponse } from "next/server";

const repo = new TableroRepo();

interface Params {
    params: {
        id: string[]
    }
}

export async function GET(request: NextRequest, params: Params) {
    const id = params.params.id[0]
    const tablero = await repo.getTablero(id);
    return NextResponse.json(tablero);
}

export async function DELETE(request: NextRequest, params: Params) {
    const id = params.params.id[0]
    const tablero = await repo.deteleTablero(id);
    return NextResponse.json(tablero);
}

export async function PUT(request: NextRequest, params: Params) {
    const id = params.params.id[0];
    const body = await request.json();
    const updated = await repo.updateTablero(id, body);
    return NextResponse.json(updated);
}