import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save(myForm:NgForm){
    console.log(myForm.value);
  }

}
