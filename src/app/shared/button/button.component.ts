import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styles: [':host { width: 100% }'],
})
export class ButtonComponent {
  @Input() clickHandlerProp: () => void;
  @Input() disabledProp: boolean;
  @Input() btnTypeProp: 'button' | 'submit' | 'reset';
  @Input() btnTextProp: string;
  @Input() ngClassesBtnProp: string;
  @Input() ngClassesDivProp: string;
  @Input() ngClassesSpanProp: string;
}
