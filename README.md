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

# Lazy loading
ref: https://angular.io/guide/lazy-loading-ngmodules

# Formularios Reactivos
La logica es mantener el html, lo mas sencillo posible, y hacer todo en el TS

Para usarlo importar "ReactiveFormsModule"

## Importar ReactiveFormsModule
En el archivo NAME.module.ts, se debe importar "ReactiveFormsModule"

    import { ReactiveFormsModule } from '@angular/forms';
    imports: [
        ReactiveFormsModule
    ]

En el component.ts

    export class BasicComponent {
    // Asignacion de atributos en formulario
    myForm: FormGroup = new FormGroup({
        'name': new FormControl('RTX'),
    });

    }

Y en el component.html

    <form [formGroup]="myForm"> 
    <input  type="text"
    class="form-control"
    formControlName="name"> <!--Asignacion de nombre dependiendo del FormGroup-->

## FormBuilder 
Es un servicio, y es similar a formGroup pero es mas sencillo de mantener y leerlo

En el component.ts

    myForm: FormGroup = this.fb.group({
        name:['RTX'],
        price: [0],
        existence: [0]
    })

    constructor( private fb: FormBuilder ) { }

Y en el component.html

    <form [formGroup]="myForm"> 
    <input  type="text"
    class="form-control"
    formControlName="name"> <!--Asignacion de nombre dependiendo del FormGroup-->

## Validators Basicos
Con FormBuilder, se puede agregar validaciones sincronos

    // ['name', [validators synchronous], [validators asynchronous]]
    
    myForm: FormGroup = this.fb.group({
        name:['RTX', [Validators.required, Validators.minLength(3)]], // ,Validador sincrono , Validador asincrono
        price: [0, [Validators.min(0), Validators.required]],
        existence: [0, [Validators.min(0), Validators.required]]
    })

## Submit en form
    
    // Marca como si todos los elementos han sido tocados
    this.myForm.markAllAsTouched();

    // Resetea todo el formulario
    this.myForm.reset();

    // Establecemos un valor al formulario
    this.myForm.setValue({
      name: "Procesador i9",
      price: 1500,
      existence: 50
    });

    // Resetea y establesco datos, util en inicializar datos por defecto
    this.myForm.reset({
      name: "Procesador i9",
      price: 1500,
      existence: 50
    });

## Agregar controles al FormArray
En TS

    // inicializar quien tomara los valores
    addFavorite: FormControl = this.fb.control("", Validators.required);


    // Metodo 1: Guardar datos en FormArray desde FormControl 
    this.favoritesArr.push( this.fb.control(this.addFavorite.value, Validators.required) );
    
    // Metodo 2: Guardar datos en FormArray desde FormControl
    this.favoritesArr.push( new FormControl(this.addFavorite.value, Validators.required) );
    
En html

    <input  class="form-control"
            [formControl]="addFavorite">

## Eliminar elemento de FormArray
En TS   
   
    deleteElementFavorite( i: number){
        this.favoritesArr.removeAt(i);
    }

En html

    <button class="btn btn-outline-danger" 
            type="button"
            (click)="deleteElementFavorite(i)">Eliminar</button>

### Establecer mas valores en reset
  
    person={
        gender: "F",
        notification: true
    }
    this.myForm.reset({...this.person, conditions: true});

## Actualizacion de valores

    // Primer metodo
    person={
        gender: "F",
        notification: true
    }

    save(){
        const formValue = {...this.myForm.value};
        delete formValue.conditions;
        this.person = formValue;
    }

### valueChanges

    // Segundo metodo
     ngOnInit(): void {
        this.myForm.valueChanges.subscribe(form=>{
        delete form.conditions;
        this.person = form;
        });
    }

    // Desestructuracion (Igual al anterior)
    this.myForm.valueChanges.subscribe(({conditions, ...rest})=>{
      this.person = rest;
    });