import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import  {viajero} from 'src/app/model/viajero';
import { ViajeroService } from 'src/app/service/viajero.service';
@Component({
  selector: 'app-viajero-listar',
  templateUrl: './viajero-listar.component.html',
  styleUrls: ['./viajero-listar.component.css']
})
export class ViajeroListarComponent implements OnInit {
  dataSource:MatTableDataSource<viajero>=new MatTableDataSource();
  displayedColumns:string[] =['id','nombre','contrasenia','correo','contactos','tipoViajero','recomendado']
  constructor(private pt:ViajeroService) { }

  ngOnInit(): void {
    this.pt.listar().subscribe(d =>{
      this.dataSource= new MatTableDataSource(d);
    })
  }

}
