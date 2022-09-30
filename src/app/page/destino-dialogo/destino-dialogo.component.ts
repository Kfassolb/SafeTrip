import { Component, OnInit } from '@angular/core';
import { DestinoService } from 'src/app/service/destino.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-destino-dialogo',
  templateUrl: './destino-dialogo.component.html',
  styleUrls: ['./destino-dialogo.component.css']
})
export class DestinoDialogoComponent implements OnInit {

  constructor(private destinoService:DestinoService,private dialogRef : MatDialogRef<DestinoDialogoComponent>) { }

  ngOnInit(): void {
  }
  confirmar(estado : boolean){
    this.destinoService.setConfirmaEliminar(estado);
    this.dialogRef.close();
  }

}
