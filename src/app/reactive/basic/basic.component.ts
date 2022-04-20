import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
    name:[ '', [Validators.required, Validators.minLength(3)]], // ,Validador sincrono , Validador asincrono
    price: [ 0, [Validators.min(0), Validators.required]],
    existence: [ 0, [Validators.min(0), Validators.required]]
  })

  constructor( private fb: FormBuilder ) {
    console.log(this.myForm);
  }

  campValid( campo: string ): Boolean|null {
    return  this.myForm.controls[campo].errors 
            && this.myForm.controls[campo].touched;
  }

}
