import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
 titulo="Alerta"
  constructor(private alertCtr:AlertController) {     }


  async presentarAlerta(){
    const alerta = await this.alertCtr.create({
      header:'Alerta Header mm',
      subHeader:'Alerta SubHeader',
      message:'Alerta Mensaje',
      buttons:[
        {text:'ok',handler: ()=>{console.log("ok")}},
        {text:'Cancelar',role: "cancel", handler: ()=>{console.log("Cancelar")}},
      ]
    }) ;
    await alerta.present();
  }

  async presentarAlertaPrompt(){
      const alerta = await this.alertCtr.create({
        header:"Escriba el nuebo titulo",
        inputs:[{type:"text",placeholder:"Nuevo titulo",label:"Digite el nuevo titulo",name:"nuevoTitulo"}],
        buttons:[
          {
            text:"ok",
            role:"ok",
            handler:(e)=> { 
             console.log(e.nuevoTitulo )
            this.titulo= e.nuevoTitulo
              }
          },
          {
            text:"Cancelar",
            role:'cancel',
            handler:()=>{console.log("Se ha cancelado")}
          }
        ]
      })
      await alerta.present();
  }


  ngOnInit() {
    
  }

}


interface Alertas {
  nombre:string,
  typo:string
}
