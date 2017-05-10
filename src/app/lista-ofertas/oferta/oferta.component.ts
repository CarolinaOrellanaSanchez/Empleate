import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../../oferta';
import { OfertaService } from '../../oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  bloquear = true;
  @Input() index: number;
  @Input() oferta: Oferta;

  constructor(private ofertaService: OfertaService, private router: Router) { }

  bloquearOferta() {
    this.bloquear = !this.bloquear;
  }

  eliminar() {
    this.ofertaService.eliminarOferta(this.oferta);
  }



  ngOnInit() { }


  irFormularioAdm() {
    this.router.navigate(['formulario-adm', this.index]);
  }
}
