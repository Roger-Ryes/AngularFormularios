import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {


  person = {
    gender: '',
    notifications: true
  }

  termsAndConditions: boolean = true;

}
