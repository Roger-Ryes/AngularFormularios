import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  @ViewChild("dataForm") dataForm!: NgForm;

  persona: Persona = {
    nombre: "Fernando",
    favoritos: [
      {id: 1, nombre: "Metal Gear"},
      {id: 2, nombre: "Minecraft"}
    ]
  }
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
