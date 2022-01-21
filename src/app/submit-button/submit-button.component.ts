import { Component, HostListener, Input } from '@angular/core'

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent {
  @Input() public color: string
  @Input() public disabled: boolean = false
  @Input() public fill: any

  public openKeyboardMode: boolean = false

  @HostListener('window:keyboardWillShow', [])
  public onKeyboardWillShow(): void {
    this.openKeyboardMode = true
  }

  @HostListener('window:keyboardWillHide', [])
  public onKeyboardWillHide(): void {
    this.openKeyboardMode = false
  }
}
