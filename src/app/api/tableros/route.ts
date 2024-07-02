import { TableroRepo } from "@/db-repositories/TableroRepo";
import { NextRequest, NextResponse } from "next/server";

const repo = new TableroRepo();

// ALL TABLEROS
export async function GET() {
    const tableros = await repo.getTableros();
    return NextResponse.json(tableros);
}

// CREATE TABLERO
export async function POST(request: NextRequest) {
    const res = await request.json()
    const tableroCreado = await repo.createTablero(res);
    return NextResponse.json(tableroCreado);
}

// DELETE ALL TABLEROS
export async function DELETE(request: NextRequest) {
    await repo.borrarTodo();
    return NextResponse.json("borrados");
}
