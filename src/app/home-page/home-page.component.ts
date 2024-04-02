import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Productos } from '../productos';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit{
  datos: any;

  constructor(private ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.ProductosService.getAllCustomers().subscribe((data: Productos[]) => {
      this.datos = data;
      // Aquí puedes realizar cualquier procesamiento adicional de los datos recibidos
    });

  }
}
