import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  private pathUrl: string = "http://localhost:3000";
  
  constructor(private http: HttpClient) { }
  

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    return  this.http.get<any[]>(`${this.pathUrl}/usuarios?q=${email}`)
            .pipe(
              map( resp=>{
                return (resp.length==0)? null : { emailExist: true}
              })
            );
  }
}
