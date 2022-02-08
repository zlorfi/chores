import { CommonModule } from '@angular/common'
import { ExploreContainerComponent } from './explore-container/explore-container.component'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { InputErrorComponent } from './input-error/input-error.component'
import { SubmitButtonComponent } from './submit-button/submit-button.component'
import { TextInputComponent } from './text-input/text-input.component'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './header/header.component'

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule, RouterModule],
  declarations: [ExploreContainerComponent, InputErrorComponent, SubmitButtonComponent, TextInputComponent, HeaderComponent],
  exports: [ExploreContainerComponent, InputErrorComponent, SubmitButtonComponent, TextInputComponent, HeaderComponent]
})
export class ComponentsModule { }
