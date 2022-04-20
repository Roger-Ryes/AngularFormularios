import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {

  // myForm: FormGroup = new FormGroup({
  //   'name': new FormControl('RTX'),
  //   'price': new FormControl(1500),
  //   'existence': new FormControl(200),
  // });

  myForm: FormGroup = this.fb.group({
    name:['RTX'],
    price: [0],
    existence: [0]
  })

  constructor( private fb: FormBuilder ) { }

}
