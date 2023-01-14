import { Subject } from 'rxjs';
import { Usuario } from './usuario.model';
import { LoginData } from './login-data.model';

export class SeguridadService {
  private usuario: Usuario;
  public seguridadSubject = new Subject<boolean>();

  registrarUsuario(user: Usuario) {
    this.usuario = {
      usuarioId: Math.round(Math.random() * 10000).toString(),
      email: user.email,
      nombre: user.nombre,
      apellido: user.apellido,
      username: user.username,
      password: user.password
    }

    this.seguridadSubject.next(true);
  }

  login(loginData: LoginData) {
    this.usuario = {
      email: loginData.email,
      usuarioId: Math.round(Math.random() * 10000).toString(),
      nombre: "",
      apellido: "",
      username: "",
      password: loginData.password
    }

    this.seguridadSubject.next(true);

  }

  logout() {
    this.usuario = null
    this.seguridadSubject.next(false);
  }

  obtenerUsuario(){
    return {...this.usuario};
  }
}
