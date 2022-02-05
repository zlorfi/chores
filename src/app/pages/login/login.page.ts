import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AlertController, NavController } from '@ionic/angular'
import { Select, Store } from '@ngxs/store'
import { Observable, Subscription } from 'rxjs'
import { Login, Logout } from '../../store/user/user.action'
import { UserModel } from '../../store/user/user.model'
import { UserState } from '../../store/user/user.state'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  @Select(UserState.getApiKey)
  public user$: Observable<UserModel>

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  public userApiKey: string
  public userSubscription: Subscription = Subscription.EMPTY

  public constructor(
    private store: Store,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  public ngOnInit(): void {
    this.userSubscription = this.user$.subscribe((user: UserModel) => {
      this.userApiKey = user.apiKey
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
          console.log('success')
          this.navCtrl.navigateRoot('/tabs/chores', { replaceUrl: true })

        },
        error: (): any => this.showLoginFailDialog()
      })
  }

  public logout(): void {
    this.store.dispatch(new Logout())
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
