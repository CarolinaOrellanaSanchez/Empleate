import {
  Component,
  OnInit
} from '@angular/core';
import {
  Oferta
} from "../oferta";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ofertas',
  templateUrl: './lista-ofertas.component.html',
  styleUrls: ['./lista-ofertas.component.css']
})
export class ListaOfertasComponent implements OnInit {
  listaOfertas: Array < Oferta > = [
    new Oferta('../../../assets/telefonica.png', 'Telefonica', 'Maquetador web', '03/05/2017', 'Madrid', 'Grado Medio informática', 'Min dos años', ['CSS', 'HTML5', 'Photoshop', 'Illustrator.'], 'Necesitamos maquetador web para el desarrollo de contenido e-learning.', 3, 'Larga duración', '13.000€', 'Jornada completa'),
    new Oferta('../../../assets/telefonica.png', 'Telefonica', 'Maquetador web', '03/05/2017', 'Madrid', 'Grado Medio informática', 'Min dos años', ['CSS', 'HTML5', 'Photoshop', 'Illustrator.'], 'Necesitamos maquetador web para el desarrollo de contenido e-learning.', 3, 'Larga duración', '13.000€', 'Jornada completa')
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navegarAOferta(indice:any) {
    this.router.navigate(['lista-ofertas', indice, 'ver-detalle']);
  }
}
