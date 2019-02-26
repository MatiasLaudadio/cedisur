import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { HistorialInterface } from '../../models/historialInterface';
import { HistorialService } from '../../servicios/historial.service'; 
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {

  constructor(
    public router:Router,
    private historialService: HistorialService
  ) { }

  ngOnInit() {
    this.historialService.getHistorial().subscribe(historial =>{
      console.log(historial);
    });
  }
 
}
