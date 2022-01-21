import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { LoginPageRoutingModule } from './login-routing.module'

import { LoginPage } from './login.page'
import { InputErrorComponent } from '../input-error/input-error.component'
import { TextInputComponent } from '../text-input/text-input.component'
import { SubmitButtonComponent } from '../submit-button/submit-button.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
    InputErrorComponent,
    TextInputComponent,
    SubmitButtonComponent
  ]
})
export class LoginPageModule {}
