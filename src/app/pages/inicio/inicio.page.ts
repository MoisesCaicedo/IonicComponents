import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  
  componentes :ListComponentes[] = [
    {icon:'american-football',name:'Action Sheet',redirecTo:"/action-sheet"},
    {icon:'add',name:'Alert',redirecTo:"/alert"}
  ]
  constructor() { }
  ngOnInit() { }


}

interface ListComponentes {
  icon:string,
  name:string,
  redirecTo:string
}
