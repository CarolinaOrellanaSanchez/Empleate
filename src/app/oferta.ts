export class Oferta {
    constructor(public imagenUrl: string, public nombreEmpresa: string, public puesto: string, public fecha: number,  public lugar: string, public descripcion: string, public skills: Array<string>, public salario: any, public horario: string,) {
    }
}