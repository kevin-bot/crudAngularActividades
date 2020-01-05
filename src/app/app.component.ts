import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // se crea una variable que nos permite mostrar o no el formulario de editar
  mostarformEditar: boolean = true;

  //se crea un variable que contiene el titulo
  title: string = 'CRUD Angular'; 

  //se crea una variable que va a contener en contenido de la notificacion debido a que cambia cada vez que se hace un aperación
  mensajeAlerta: string = '';

  //se crea un arreglo de personas vacio 
  personas = [];

  //se crea un modelo que se va a llenar con los datos de los campos de texto 
  modelo: any = {};

  //se crea otro modelo que va a contener el empleado que se va a editar
  modelo2: any = {};

  // se crea un metodo que cierre la alerta, esto se hace gracias que en el file app.cononent.html se valida con un  *ngIf si la variable esta '' vacia
  cerrarAlerta(): void {
    this.mensajeAlerta = '';
  }
  
  //para aderir personas simplemente se hacer un push
  addpersona(): void {
    this.personas.push(this.modelo);
    this.modelo = {};
    this.mensajeAlerta = 'Campo agregado';
  }

  myvalorEditar;

  editarPersona(i){
    this.modelo2.nombre = this.personas[i].nombre;
    this.modelo2.cargo = this.personas[i].cargo;
    this.modelo2.email = this.personas[i].email;
    this.myvalorEditar =  i;
    this.mostarformEditar = false;
  }

  adtualizarPersona(): void { 
    let i = this.myvalorEditar;

    for (let j = 0; j < this.personas.length; j++){
      if (i === j) {
          this.personas[i] = this.modelo2;
          this.modelo2 = {};
          this.mensajeAlerta = 'Campo actualizado';          
          this.mostarformEditar = true;
      }
    }
  }

  eliminarPersona(i): void{
      if ( confirm('¿ Desea realmente eliminar la persona ? ')) {
          this.personas.splice(i,1);
          this.mensajeAlerta = 'Campo eliminado';
      }
  }


}
