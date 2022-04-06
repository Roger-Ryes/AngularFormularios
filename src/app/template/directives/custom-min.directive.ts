import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]', //Indica que debe tener para que funcione nuestra directiva  
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validators{
    @Input() minimo!:number;

    constructor(){
    }

    validate(control: FormControl){ //Funcion de clase Validators
        const inputValue = control.value;
        return ( inputValue < this.minimo )
                ?{'customMin': true}
                :null;
    }

}