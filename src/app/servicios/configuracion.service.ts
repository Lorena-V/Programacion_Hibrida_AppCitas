import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private readonly KEY_BORAR = "BORRAR";

  constructor() {}

  async deboBorrar(): Promise<boolean> {
    const resultado = await Preferences.get({ key: this.KEY_BORAR });
    return resultado?.value === "true"; // Evaluar estrictamente
  }

  async setDeboBorrar(deboBorrar: boolean): Promise<void> {
    await Preferences.set({
      key: this.KEY_BORAR,
      value: deboBorrar ? "true" : "false",
    });
  }
}