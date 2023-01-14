import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { LibrosService } from "../services/libros.service";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent implements OnInit, OnDestroy {

  /* Parte 1
  libros = ['Cien años de soledad', 'El coronel no tiene quien le escriba', 'Algebra de Baldor'];
  auxLibros = this.libros;

  deleteLibro(libro){
    this.libros = this.libros.filter(p => p !== libro);
  }

  showLibro(libro){
    this.libros = [];
    this.libros.push(this.auxLibros.find(p => p === libro))
  }

  saveLibro(libro){
    if(libro.valid){
      let dataLibro = libro.form.value;
      console.log("guardamos el libro: ", dataLibro.nombreLibro);
      this.libros.push(dataLibro.nombreLibro);
    }else{
      console.log("El input esta vacio");
    }
  }
  */

  /* Parte 2 Con inyeccion de dependencias */

  libros = [];
  private libroSubscription: Subscription;

  constructor(private librosService: LibrosService){
    // this.libros = librosService.getLibros();
  }

  ngOnInit(){
    this.libros = this.librosService.getLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.getLibros();
    });
  }

  ngOnDestroy(): void {
    this.libroSubscription.unsubscribe();
  }

  saveLibro(libro){
    if(libro.valid){
      this.librosService.setLibro(libro.value.nombreLibro);
    }else{
      console.log("El input esta vacio");
    }

  }

  deleteLibro(libro){
    console.log("no hace nada");
  }

}
