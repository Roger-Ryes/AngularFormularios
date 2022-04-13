import { Component, ViewChild } from '@angular/core';
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
export class DinamicsComponent {
  
  favorite: string = "";

  @ViewChild("dataForm") dataForm!: NgForm;

  persona: Persona = {
    nombre: "Fernando",
    favoritos: [
      {id: 1, nombre: "Metal Gear"},
      {id: 2, nombre: "Minecraft"}
    ]
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

  addFavorite(){
    const newFavorite: Favorito = {
      id:this.persona.favoritos.length+1,
      nombre: this.favorite
    }
    this.persona.favoritos.push({ ...newFavorite });
    this.favorite="";
  }

  deleteFavorite(index: number){
    this.persona.favoritos.splice(index, 1);
  }
}
