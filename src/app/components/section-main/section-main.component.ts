import { Component, Input } from '@angular/core';
import { Color } from '../../models/color/color.interface';

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.scss']
})
export class SectionMainComponent {

  @Input() colors: [Color];

  constructor() {
  }

}
