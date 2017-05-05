import { Component, OnInit } from '@angular/core';
import { Oferta } from "../oferta";
import { Router } from '@angular/router';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-lista-ofertas',
  templateUrl: './lista-ofertas.component.html',
  styleUrls: ['./lista-ofertas.component.css']
})
export class ListaOfertasComponent implements OnInit {
  listaOfertas: Array < Oferta > = [];

  constructor(private router: Router, private ofertaService: OfertaService) {}

  ngOnInit() {
    this.listaOfertas = this.ofertaService.devolverOferta();
  }

  navegarAOferta(indice:any) {
    this.router.navigate(['oferta-detallada', indice]);
  }
}
