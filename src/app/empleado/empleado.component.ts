import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí vivía un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Francisco";
  apellido = "Díaz";
  edad = 37;
  empresa = "Ayesa";

  /*getEdad() {
    return this.edad;
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
