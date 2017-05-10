import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../../oferta';
import { OfertaService } from '../../oferta.service'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  bloquear = true
  @Input() index:number;
  
  bloquearOferta(){
    this.bloquear=!this.bloquear;
  }

  eliminar(){
    this.ofertaService.eliminarOferta(this.oferta);
  }

  @Input() oferta: Oferta;
  constructor(private ofertaService: OfertaService) { }

  ngOnInit() {
  }

}
