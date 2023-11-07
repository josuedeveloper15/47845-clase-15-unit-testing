import { Injectable } from '@angular/core';

@Injectable()
export class AppMockService {
  saludar(): void {
    console.log('REALIZANDO OPERACION MOCK');
  }
}
