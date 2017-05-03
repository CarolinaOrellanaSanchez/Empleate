import { Component, OnInit } from '@angular/core';
import { Oferta } from "../oferta"

@Component({
  selector: 'app-lista-ofertas',
  templateUrl: './lista-ofertas.component.html',
  styleUrls: ['./lista-ofertas.component.css']
})
export class ListaOfertasComponent implements OnInit {
  listaOfertas: Array<Oferta> = [new Oferta('http://comenzandodecero.com/wp-content/uploads/2013/04/Linkedin-para-buscar-trabajo.jpg', 'Telefonica', 'Maquetador web', '03/05/2017', 'Madrid', 'Necesitamos maquetador web para el desarrollo de contenido e-learning.', ['CSS', 'HTML5', 'Photoshop', 'Illustrator.'], '13.000€', 'Jornada completa'), new Oferta('http://comenzandodecero.com/wp-content/uploads/2013/04/Linkedin-para-buscar-trabajo.jpg', 'Telefonica', 'Maquetador web', '03/05/2017', 'Madrid', 'Necesitamos maquetador web para el desarrollo de contenido e-learning.', ['CSS', 'HTML5', 'Photoshop', 'Illustrator.'], '13.000€', 'Jornada completa')];

  constructor() { }

  ngOnInit() {
  }

}