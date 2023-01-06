import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(
    private alerta:AlertController
  ) { }

  ngOnInit() {
  }
  async presentAlert(){
    const alert = await this.alerta.create({
      header: 'Usuario Registrado',
      buttons: ['OK!'],
    });
    await alert.present();
  }
}
