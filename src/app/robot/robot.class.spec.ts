import { Robot } from './robot.class';

describe('Testing de la class Robot', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
  });

  it('Al iniciar sistema la energia debe reducirse en 50', () => {
    robot.iniciarSistema();
    expect(robot.energia).toBe(50);
  });

  it('Al iniciar sistema se debe saludar al usuario', () => {
    const spyOnSaludarUsuario = spyOn(robot, 'saludarUsuario');

    robot.iniciarSistema();

    console.log('ENERGIA: ', robot.energia);
    // Se debe haber llamado...
    expect(spyOnSaludarUsuario).toHaveBeenCalled();
  });
});
