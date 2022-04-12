import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {
  
  // Iniciar formulario con valores
  initForm={
    producto: "RTX",
    precio: 10,
    existencia: 10
  }

  @ViewChild("myForm") myForm!:NgForm;

  productValidate():boolean{
    return  this.myForm?.controls['producto']?.invalid 
            && this.myForm?.controls['producto']?.touched
  }

  priceValidate(): boolean{
    return  this.myForm?.controls['precio']?.value<0 
            && this.myForm?.controls['precio']?.touched
  }

  save(){
    // console.log( this.myForm );
    this.myForm.resetForm({
      precio: 0,
      existencia: 0
    }); // Reseteo Form y inicializo con valores 
  }

}
