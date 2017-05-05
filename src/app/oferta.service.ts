import { Injectable } from '@angular/core';
import { Oferta } from './oferta';

@Injectable()
export class OfertaService {
  listaOfertas: Array < Oferta > = [
    new Oferta('../../../assets/telefonica.png', 'Telefonica', 'Maquetador web', '03/05/2017', 'Madrid', 'Grado Medio informática', 'Min dos años', ['CSS', 'HTML5', 'Photoshop', 'Illustrator.'], 'Necesitamos maquetador web para el desarrollo de contenido e-learning.', 3, 'Larga duración', '13.000€', 'Jornada completa'),
    new Oferta('../../../assets/telefonica.png', 'Telefonica', 'Maquetador web', '03/05/2017', 'Madrid', 'Grado Medio informática', 'Min dos años', ['CSS', 'HTML5', 'Photoshop', 'Illustrator.'], 'Necesitamos maquetador web para el desarrollo de contenido e-learning.', 3, 'Larga duración', '13.000€', 'Jornada completa')
  ];
  constructor() { }
 
  devolverOfertas(): Array<Oferta> {
    return this.listaOfertas;
  }

  devolverOferta(id: any){
    return this.listaOfertas[id];
  }

}
