import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';

// import { emailPattern, nameLastNaPattern, notCanBeRoys } from 'src/app/share/validator/validations';
import { ValidatesService } from '../../../share/validator/validates.service';
import { EmailValidatorService } from '../../../share/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  // TODO: Temporal 
  // nameLastNa: string = "([A-Za-z]+) ([A-Za-z]+)";
  // email: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.valSer.nameLastNaPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.valSer.emailPattern)], [ this.emailValidatirSer]],
    username: ['', [Validators.required, this.valSer.notCanBeRoys], ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ]
  },{
    validator: [ this.valSer.campEquals("password", "password2") ]
  });

  get emailMessageError():string{
    return  (this.convertJson(this.myForm.get("email")?.errors).required)?"El correo es obligatorio":
            (this.convertJson(this.myForm.get("email")?.errors).pattern)?"El formato del correo no es correcto":
            (this.convertJson(this.myForm.get("email")?.errors).emailExist)?"El correo ya existe":"Otro error";
  }

  constructor(
    private fb:FormBuilder,
    private valSer: ValidatesService,
    private emailValidatirSer: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name:"Roger Reyes",
      email:"test@test.com",
      username: "RoysCode",
      password: "123456",
      password2: "123456"
    });
  }

  campNoValid( camp: string ){
    return  this.myForm.get(camp)?.invalid
    && this.myForm.get(camp)?.touched;
  }


  convertJson(var1: any){
    return JSON.parse(JSON.stringify(var1));
  }

  emailRequired(){
    return this.convertJson(this.myForm.get("email")?.errors).required
    && this.myForm.get("email")?.touched;
  }
  
  emailFormat(){
    return this.convertJson(this.myForm.get("email")?.errors).pattern
    && this.myForm.get("email")?.touched;
  }
  
  emailExist(){
    return this.convertJson(this.myForm.get("email")?.errors).emailExist
    && this.myForm.get("email")?.touched;
  }

  submitForm(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return;
    }    
  }

}
