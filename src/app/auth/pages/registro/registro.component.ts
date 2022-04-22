import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  // TODO: Temporal 
  nameLastNa: string = "([A-Za-z]+) ([A-Za-z]+)";
  email: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // Nickname no igual a roys
  notCanBeRoys( argument: FormControl ){
    const value = argument.value?.trim().toLowerCase();
    if(value=="roys"){
      return {
        noRoys: true
      }
    }
    return null;
  }

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.nameLastNa)]],
    email: ['', [Validators.required, Validators.pattern(this.email)]],
    username: ['', [Validators.required, this.notCanBeRoys], ]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name:"Roger Reyes",
      email:"test@test.com",
      username: "RoysCode"
    });
  }


  campNoValid( camp: string ){
    return  this.myForm.get(camp)?.invalid
            && this.myForm.get(camp)?.touched;
  }

  submitForm(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    } 

    

  }
}
