import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }

  ngOnInit(): void {
  }

  saveUsuario(formRegister: NgForm) {

    const email = formRegister.value.email;
    const name = formRegister.value.name;
    const lastName = formRegister.value.lastName;
    const username = formRegister.value.userName;
    const password = formRegister.value.password;

    // console.log(formRegister);
    // console.log(`El email es: ${email} y la contrasena es: ${password}`);

    this.seguridadService.registrarUsuario({
      usuarioId: "",
      nombre: name,
      apellido: lastName,
      username: username,
      email: email,
      password: password
    });

  }

}
