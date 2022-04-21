import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    notification: [true, [Validators.required]],
    conditions:[false, [Validators.requiredTrue]] // Requiere que sea verdadero
  });

  person={
    gender: "F",
    notification: true
  }


  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    // this.myForm.setValue(this.person); // Give a error
    // this.myForm.reset(this.person);
    this.myForm.reset({...this.person, conditions: true});

    // this.myForm.valueChanges.subscribe(form=>{
    //   delete form.conditions;
    //   this.person = form;
    // });
    this.myForm.valueChanges.subscribe(({conditions, ...rest})=>{
      this.person = rest;
    });
  }
 
  save(){
    const formValue = {...this.myForm.value};
    delete formValue.conditions;
    this.person = formValue;
  }
}