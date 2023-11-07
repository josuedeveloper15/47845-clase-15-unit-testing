export class Robot {
  energia = 100;

  iniciarSistema(): void {
    this.energia = this.energia - 50;
    this.saludarUsuario();
  }

  saludarUsuario(): void {
    console.log('HOLA USUARIO');
  }
}
