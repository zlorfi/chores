import { Component, Input, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() public label: string = 'Label'
  @Input() public disabled: boolean = false
  @Input() public inputmode: any = 'text'
  @Input() public name: string
  @Input() public placeholder: string
  @Input() public readonly: boolean = false
  @Input() public required: boolean = false
  @Input() public type: any = 'text'
  @Input() public value: string

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public propagateChange = (_: any): void => {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onBlur = (): void => {}

  public writeValue(value: any): void {
    this.value = value
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn
  }

  public registerOnTouched(fn: any): void {
    this.onBlur = fn
  }
}
