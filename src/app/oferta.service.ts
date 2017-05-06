import { Injectable } from '@angular/core';
import { Oferta } from './oferta';

@Injectable()
export class OfertaService {
  listaOfertas: Array < Oferta > = [
    new Oferta('../../../assets/telefonica1.png', 'Telefonica', 'Maquetador web', '1 hora', 'Madrid', 'Grado Medio informática', 'Min dos años', ['CSS', 'HTML5', 'Photoshop', 'Illustrator.'], 'Necesitamos maquetador web para el desarrollo de contenido e-learning.', 3, 'Larga duración', '13.000€', 'Jornada completa', ['hola', 'hola']),
    new Oferta('../../../assets/telefonica1.png', 'Grupo Agio', 'Perfiles Java: Coordinador equipo y AP J2ee', '3 horas', 'Barcelona', 'Grado Medio informática', 'Min dos años', ['CSS', 'HTML5', 'Photoshop', 'Illustrator.'], 'Necesitamos maquetador web para el desarrollo de contenido e-learning.', 3, 'Larga duración', '13.000€', 'Jornada completa', ['hola', 'hola'])
  ];
  constructor() { }
 
  devolverOfertas(): Array<Oferta> {
    return this.listaOfertas;
  }

  devolverOferta(id: any){
    return this.listaOfertas[id];
  }

}
