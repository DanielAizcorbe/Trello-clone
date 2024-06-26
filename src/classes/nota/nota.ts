export class Nota {
    private id: string;
    private titulo: string;
    private posicion: number;
    private descripcion: string;
    private fondoUrl: string;

    constructor(id: string, nombre: string, posicion: number, descripcion: string, fondoUrl: string) {
        this.id = id;
        this.titulo = nombre;
        this.posicion = posicion;
        this.descripcion = descripcion;
        this.fondoUrl = fondoUrl;
    }

    public getId(): string {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getPosicion(): number {
        return this.posicion;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public getFondoUrl(): string {
        return this.fondoUrl;
    }

    public setId(id: string) {
        this.id = id;
    }

    public setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    public setPosicion(posicion: number) {
        this.posicion = posicion;
    }

    public setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }

    public setFondoUrl(fondoUrl: string) {
        this.fondoUrl = fondoUrl;
    }
}