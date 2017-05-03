export class Oferta {
    constructor(public imagenUrl: string, public nombreEmpresa: string, public puesto: string, public fecha: string,  public lugar: string, public descripcion: string, public skills: Array<string>, public salario: string, public horario: string) {
    }
}