import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bar-navegation',
  templateUrl: './bar-navegation.component.html',
  styleUrls: ['./bar-navegation.component.css']
})
export class BarNavegationComponent implements OnInit, OnDestroy {

  @Output() menuToggle = new EventEmitter<void>();
  estadoSesion : boolean;
  usuariosSubscription: Subscription;

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
    this.usuariosSubscription = this.seguridadService.seguridadSubject.subscribe( status => {
      this.estadoSesion = status
    });
  }

  onMenuToggleDispatch(){
    this.menuToggle.emit();
  }

  ngOnDestroy(): void {
    this.usuariosSubscription.unsubscribe();
  }

}
