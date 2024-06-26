import { Nota } from "../nota/nota";

export class Lista {
    private id: string;
    private nombre: string;
    private posicion: number;
    private notas: Nota[];

    constructor(id: string, nombre: string, posicion: number) {
        this.id = id;
        this.nombre = nombre;
        this.posicion = posicion;
        this.notas = [];
    }

    getId(): string {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string) {
        if(nombre) {
            this.nombre = nombre;
        }
    }

    getPosicion(): number {
        return this.posicion;
    }

    setPosicion(posicion: number) {
        if(posicion < 1) {
            throw new Error("la posicion no puede ser menor a 1");
        }
        this.posicion = posicion;
    }

    getNotas(): Nota[] {
        return this.notas;
    }

    addNota(nota: Nota) {
        this.getNotas().push(nota);
    }

    removeNota(nota: Nota) {
        this.notas = this.getNotas().filter(n => n.getId() === nota.getId());
    }
}