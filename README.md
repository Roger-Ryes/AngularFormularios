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

# AngularFormularios

## Link a usar
https://getbootstrap.com/docs/5.1/getting-started/introduction/

## Comandos usados
<h1>Generar Modulo</h1>
    ng g m share  
<h1>Generar Componente</h1>
    ng g c share/sidemenu --skipTests -is
<h1>Generar Modulo y Routing</h1>
    ng g m template --routing

## Lazy loading
ref: https://angular.io/guide/lazy-loading-ngmodules

## FormsModule
    Para el uso de template
    Con ngForm se envia todo del formulario
    <form (ngSubmit)="save( myForm )" #myForm="ngForm"></form>

    Para tomar datos se requiere indicarlo a angular con  <strong>ngModel name=""</strong>

    <input  type="text"
            class="form-control"
            ngModel
            name="producto"
            placeholder="Nombre del producto">

## Condicionales en Formularios

El signo de interrogacion (?) indica que si el valor existe, si no, esperar a que exista

<span *ngIf="myForm.controls['producto']?.invalid &&
             myForm.controls['producto']?.touched" 
            class="form-text text-danger">
Debe de ser de tres letras</span>

## ViewChild
Toma un elemento del local
<h3>TS</h3>
 @ViewChild("myForm") myForm!:NgForm;
<h3>HTML</h3>
<form (ngSubmit)="save()" #myForm="ngForm">