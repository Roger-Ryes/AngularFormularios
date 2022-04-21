import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {
  
  dataForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array([
      ["Metal Gear"],
      ["Deatpool"]
    ], Validators.required)
  })
  
  addFavorite: FormControl = this.fb.control("", Validators.required);


  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  save(){
    if(this.dataForm.invalid){
      return;
    }
    console.log(this.dataForm);
  }

  validateCondition(state: string): Boolean | null{
    return this.dataForm.controls[state].errors && this.dataForm.controls[state].touched;
  }

  get favoritesArr(){
    return this.dataForm.get("favorites") as FormArray;
    //dataForm.controls['favorites'].value
  }

  addNewFavorite(){
    if(this.addFavorite.invalid) 
      return;
    
    // this.favoritesArr.push( this.fb.control(this.addFavorite.value, Validators.required) );
    this.favoritesArr.push( new FormControl(this.addFavorite.value, Validators.required) );
    this.addFavorite.reset();
  }

  deleteElementFavorite( i: number){
    this.favoritesArr.removeAt(i);
  }
}
