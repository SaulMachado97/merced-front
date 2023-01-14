import { Component } from "@angular/core";

@Component({
  selector:'app-usuario',
  templateUrl:'./usuario.component.html'
})

export class UsuarioComponent{
  nombre= "";
  nameButton= "Mostrar";
  usuarios = ['Luis', 'Fernando', 'Maria', 'Alberto']
  visible = false;

  constructor(){
    setTimeout(() => {
      this.visible = true;
      this.nameButton = "Ocultar";
    },5000)
  }

  onAddUser(){
    this.usuarios.push(this.nombre);
  }

  onChangeVisible(){
    if(!this.visible){
      this.visible = true;
      this.nameButton = "Ocultar";
    }else{
      this.visible = false;
      this.nameButton = "Mostrar";
    }
  }

}
