import { Lista } from "../lista/lista";

export class Tablero {
    private id: string;
    private nombre: string;
    private fondoUrl: string;
    private listas: Lista[];

    constructor(id: string, nombre: string, fondoUrl: string) { 
        this.id = id;
        this.nombre = nombre;
        this.fondoUrl = fondoUrl;
        this.listas = [];
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

    getFondoUrl(): string {
        return this.fondoUrl
    }

    setFondoUrl(fondo: string) {
        this.fondoUrl = fondo;
    }

    getListas(): Lista[] {
        return this.listas;
    }

    addLista(lista: Lista) {
        this.listas.push(lista);
    }

    removeLista(lista: Lista) {
        this.listas = this.listas.filter(l => l.getId() === lista.getId());
    }
}