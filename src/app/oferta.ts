export class Oferta {
    constructor(public imagenUrl: string, public nombreEmpresa: string, public puesto: string, public fecha: string,  public lugar: string,  public estudios: string,  public experiencia: string, public skills: Array<string>,public descripcion: string,  public vacantes: number,  public duracion: string, public salario: string, public horario: string, public descEmpresa: string) {
    }
}