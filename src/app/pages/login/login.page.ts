import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AlertController, NavController } from '@ionic/angular'
import { Store } from '@ngxs/store'
import { Login } from '../../store/user/user.action'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  public loginForm: FormGroup

  public constructor(
    private store: Store,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  public login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.controls.email.markAsTouched()
      this.loginForm.controls.password.markAsTouched()
      return
    }

    this.store
      .dispatch(
        new Login(this.loginForm.value.email, this.loginForm.value.password)
      )
      .subscribe({
        next: (): any => {
          this.navCtrl.navigateRoot('/tabs/chores', { replaceUrl: true })
        },
        error: (): any => this.showLoginFailDialog()
      })
  }

  private async showLoginFailDialog(): Promise<any> {
    const alert = await this.alertCtrl.create({
      header: 'Login failed',
      message: 'Please check your email and password and try again.',
      buttons: [{ text: 'Ok', role: 'ok' }]
    })

    alert.present()
  }
}
