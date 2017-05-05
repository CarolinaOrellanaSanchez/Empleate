import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Oferta } from '../oferta';

@Component({
  selector: 'app-oferta-detallada',
  templateUrl: './oferta-detallada.component.html',
  styleUrls: ['./oferta-detallada.component.css']
})
export class OfertaDetalladaComponent implements OnInit {
  subscripcion: Subscription;
  id: string;
  oferta: Oferta;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.subscripcion = this.activatedRoute.params.subscribe(
      params => this.id = params['id']
    );
  }

  ngOnInit() {
  }

}
