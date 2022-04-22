import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatesService {

  public nameLastNaPattern: string = "([A-Za-z]+) ([A-Za-z]+)";
  public emailPattern:      string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  constructor() { }

  // Nickname no igual a roys
  public notCanBeRoys( argument: FormControl ): ValidationErrors|null{
  const value = argument.value?.trim().toLowerCase();
  if(value=="roys"){
      return {
      noRoys: true
      }
  }
  return null;
  }


  campEquals( camp1: string, camp2: string){
    return (formValue: AbstractControl): ValidationErrors | null =>{
        const pass1 = formValue.get(camp1)?.value;
        const pass2 = formValue.get(camp2)?.value;
        if(pass1!==pass2){
          formValue.get(camp2)?.setErrors({noIguales: true});
          return { noIguales: true }
        }
        
        formValue.get(camp2)?.setErrors(null);
        return null;
    }
  }
}
