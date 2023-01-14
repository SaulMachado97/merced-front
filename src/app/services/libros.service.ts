import { Subject } from "rxjs";

export class LibrosService{

  librosSubject = new Subject();
  private libros = ['Libro de Saul', 'Libro 1', 'Libro 2'];

  setLibro(libro: string){
    this.libros.push(libro);
    this.librosSubject.next(libro);
  }

  getLibros(){
    return [...this.libros]; //... split operador, lo que hace es traer datos actualizados
  }

  deleteLibro(libro: string){
    this.libros = this.libros.filter(p => p !== libro);
    this.librosSubject.next(libro);
  }

}
