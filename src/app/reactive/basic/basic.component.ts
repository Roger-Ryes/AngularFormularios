import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit{

  // myForm: FormGroup = new FormGroup({
  //   'name': new FormControl('RTX'),
  //   'price': new FormControl(1500),
  //   'existence': new FormControl(200),
  // });

  myForm: FormGroup = this.fb.group({
    name:[ , [Validators.required, Validators.minLength(3)]], // ,Validador sincrono , Validador asincrono
    price: [ , [Validators.min(0), Validators.required]],
    existence: [ , [Validators.min(0), Validators.required]]
  })

  constructor( private fb: FormBuilder ) {
  }

  ngOnInit(): void {
    this.myForm.reset({
      name: "Procesador i9",
      price: 1500,
      existence: 50
    });
  }

  campValid( campo: string ): Boolean|null {
    return  this.myForm.controls[campo].errors 
            && this.myForm.controls[campo].touched;
  }

  save(){
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
