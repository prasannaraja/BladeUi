import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from 'ngx-typesafe-forms';

@Component({
  selector: 'app-slider-toggle',
  templateUrl: './slider-toggle.component.html',
  styleUrls: ['./slider-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderToggleComponent {
  @Input() label: string = 'no-label';
  @Input() readOnly: boolean = false;
  @Input() formControl: FormControl<boolean>;
}
