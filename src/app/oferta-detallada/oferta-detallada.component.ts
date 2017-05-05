import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Oferta } from '../oferta';
import { OfertaService} from '../oferta.service'

@Component({
  selector: 'app-oferta-detallada',
  templateUrl: './oferta-detallada.component.html',
  styleUrls: ['./oferta-detallada.component.css']
})
export class OfertaDetalladaComponent implements OnInit {
  subscripcion: Subscription;
  id: string;
  oferta: Oferta;
  constructor(private activatedRoute: ActivatedRoute, private ofertaService: OfertaService) { 
    this.subscripcion = this.activatedRoute.params.subscribe(
      params => this.id = params['id']
    );
  }

  ngOnInit() {
    this.oferta = this.ofertaService.devolverOferta(this.id);
  }

}
