import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {

  @ViewChild("myForm") myForm!:NgForm;

  productValidate():boolean{
    return this.myForm?.controls['producto']?.invalid && this.myForm?.controls['producto']?.touched
  }

  save(){
    console.log( this.myForm );
  }

}
