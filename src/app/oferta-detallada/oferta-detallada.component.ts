import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Oferta } from '../oferta';
import { OfertaService } from '../oferta.service'

@Component({
  selector: 'app-oferta-detallada',
  templateUrl: './oferta-detallada.component.html',
  styleUrls: ['./oferta-detallada.component.css']
})
export class OfertaDetalladaComponent implements OnInit {
  subscripcion: Subscription;
  id: number;
  oferta: Oferta;
  bloquear = true;
  mostrado = false;
  @Input() index:number;

  constructor(private activatedRoute: ActivatedRoute, private ofertaService: OfertaService, private router: Router) { 
    this.subscripcion = this.activatedRoute.params.subscribe(
      params => this.id = params['id']
    );
  }

   bloquearOferta(){
    this.bloquear=!this.bloquear;
  }
    eliminar(){
    this.ofertaService.eliminarOferta(this.oferta);
    this.router.navigate(['/lista-ofertas'])
  }
 
     irFormularioAdm(){
      this.router.navigate(['formulario-adm', this.id]);
    }

  ngOnInit() {
    this.oferta = this.ofertaService.devolverOferta(this.id);
  }
 inscribirse() {
    this.mostrado = !this.mostrado;
  }

}
