import { Injectable } from '@angular/core';
import { Oferta } from './oferta';

@Injectable()
export class OfertaService {
  listaOfertas: Array < Oferta > = [
    new Oferta('../../../assets/telefonica1.png', 'Telefonica', 'Maquetador web', '1 hora', 'Madrid', 'Grado Medio informática', '2 años', ['CSS3', 'HTML5', 'Photoshop', 'Git', 'Illustrator.'], 'En estos momentos necesitamos incorporar a nuestro EQUIPO un Maquetador Web Senior para el desarrollo de contenido e-learning con experiencia en Javascript, JQuery, peticiones Web (Rest) y conocimientos de otros Frameworks como Angular.', 3, 'Larga duración', '13.000€', 'Jornada completa', ['hola', 'hola']),
    new Oferta('../../../assets/telefonica1.png', 'Grupo Agio', 'Perfiles Java: Coordinador equipo y AP J2ee', '3 horas', 'Barcelona', 'Cualquier persona que pueda demostrar sus conocimientos, valorándose estudios en informática o ingeniería.', 'Entre 2 y 3 años.', ['CSS', 'HTML', 'JQuery', 'Javascript.'], 'Necesitamos maquetador web para el desarrollo de contenido e-learning.', 3, 'Larga duración', '13.000€', 'Jornada completa', ['hola', 'hola'])
  ];
  constructor() { }
 
  devolverOfertas(): Array<Oferta> {
    return this.listaOfertas;
  }

  devolverOferta(id: any){
    return this.listaOfertas[id];
  }

}
