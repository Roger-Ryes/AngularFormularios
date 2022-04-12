import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  @ViewChild("dataForm") dataForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log("formulario");
    console.log(this.dataForm);
  }
  // textEnable():boolean{
  //   return this.dataForm?.touched==true;
  // }
  

  enable():boolean{
    return this.dataForm?.invalid==true;
  }
}
