import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
  }

  buscarpuesto(puesto: string) {
    this.clicked.emit(puesto);
    this.ofertaService.guardarPuesto(puesto);
  }
}
