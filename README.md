# FormulariosApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
#
#
<h1> AngularFormularios</h1>

# Link a usar
https://getbootstrap.com/docs/5.1/getting-started/introduction/

# Comandos usados
### Generar Modulo
    ng g m share  
### Generar Componente
    ng g c share/sidemenu --skipTests -is
### Generar Modulo y Routing
    ng g m template --routing

<br>
# Validaciones manuales y asíncronas
## Validators.pattern con formBuilder
El validador se utiliza en la seccion de validadores de formBuilder

    // FormGroup
    myForm: FormGroup = this.fb.group({
                name: [ '', [ Validators.pattern(this.nameLastNa) ] ]
            })

    // Validador de Nombre y Apellido
    nameLastNa: string = "([A-Za-z]+) ([A-Za-z]+)";
    Validators.pattern(this.nameLastNa)

    // Validador de email
    email: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    Validators.pattern(this.email)

    // Validacion personalizado
        // Nickname no igual a roys | funcion validacion personalizada
        notCanBeRoys( argument: FormControl ){
            const value = argument.value?.trim().toLowerCase();
            if(value=="roys"){
            return {
                noRoys: true
            }
            }
            return null;
        }
        
        username: ['', [Validators.required, this.notCanBeRoys], ]

### validate.servie.ts y validations.ts, cumplen la misma funcion en registro.component.ts
Se opto por usar servicios

## AbstractControlOptions
Comparar dos contraseñas

    myForm: FormGroup = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)] ],
        password2: ['', [Validators.required] ]
    },{
        validator: [ this.valSer.campEquals("password", "password2") ]
    });


    // En el servicio
    campEquals( camp1: string, camp2: string){
        // Tomamos los balores del FormGroup
        return (formValue: AbstractControl): ValidationErrors | null =>{
            const pass1 = formValue.get(camp1)?.value;
            const pass2 = formValue.get(camp2)?.value;
            // Se hace la comparacion
            if(pass1!==pass2){
                // Establesco error de no iguales en camp2 (password2)
                formValue.get(camp2)?.setErrors({noIguales: true});
                return { noIguales: true }
            }
            // No establesco error en camp2 (password2)
            formValue.get(camp2)?.setErrors(null);
            return null;
        }
    }

## JSON server
ref: https://www.npmjs.com/package/json-server
En esta rama, se utiliza el db.json (09.0.ServicioBackend)
Start JSON Server

    json-server --watch db.json