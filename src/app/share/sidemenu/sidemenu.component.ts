import { Component } from '@angular/core';

interface MenuItem{
  text: String,
  route: String,
  active?: String
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    .list-group-item{
      cursor: pointer;
    }
  `]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    {
      text: "Básicos",
      route: "./template/basicos",
      active: "active"
    },
    {
      text: "Dínamicos",
      route: "./template/dinamicos" 
    },
    {
      text: "Switches",
      route: "./template/switches" 
    }
  ]
  
  reactiveMenu: MenuItem[] = [
    {
      text: "Básicos",
      route: "./reactive/basicos",
      active: "active"
    },
    {
      text: "Dínamicos",
      route: "./reactive/dinamicos" 
    },
    {
      text: "Switches",
      route: "./reactive/switches" 
    }
  ]
  

}
