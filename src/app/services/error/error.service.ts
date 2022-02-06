import { AlertController } from '@ionic/angular'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public constructor(public alertCtrl: AlertController) { }

  public async showAlert(errorMessage: string): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Communication error',
      message: errorMessage,
      buttons: [{ text: 'Ok', role: 'ok' }]
    })

    alert.present()
  }
}
