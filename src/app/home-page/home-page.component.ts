import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../service/customers.service';
import { Customers } from '../interface/customers';
import { error } from 'console';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit{
  mostrarSpinner : boolean = false;
  // displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'correo', 'telefono'];
  // dataSource: Customers[] = [];
  customer: Customers[] = []; 
  cedula: string = '';

  constructor(private CustomersService: CustomersService) { }
 

  ngOnInit(): void {
  }
  
  buscarPorCedula(){
    this.mostrarSpinner  = true;
    if(this.isValidCedula(this.cedula)){
      this.CustomersService.fetchCustomersXCedula(this.cedula).subscribe(response => {
        this.mostrarSpinner  = false;
        this.customer = response;
      }, error => {
        this.mostrarSpinner  = false;
        console.log("Error al obtener cliente", error);
      }
    );
    }else{
      this.mostrarSpinner  = false;
      alert("Ingresa un numero de cedula valido")
    }
  }
  soloNumeros(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  isValidCedula(cedula: string): boolean {
    if (cedula.length !== 10 || !/^[0-9]+$/.test(cedula)) {
      return false;
    }

    return true;
  }
  
}
