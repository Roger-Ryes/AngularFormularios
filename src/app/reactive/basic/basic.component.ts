import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {

  myForm: FormGroup = new FormGroup({
    'name': new FormControl('RTX'),
    'price': new FormControl(1500),
    'existence': new FormControl(200),
  });

  constructor() { }

}
