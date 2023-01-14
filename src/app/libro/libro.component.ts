import { Component, Input, EventEmitter, Output } from "@angular/core";
import { LibrosService } from "../services/libros.service";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})

export class LibroComponent {
  @Input() tituloLibro!: string;
  @Output() eventLibroClicked = new EventEmitter();

  constructor(private librosService: LibrosService){

  }

  onClickedLibro(){
    //this.eventLibroClicked.emit();
    this.librosService.deleteLibro(this.tituloLibro);
  }

}
