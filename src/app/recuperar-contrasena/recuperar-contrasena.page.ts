import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  constructor(private aviso:AlertController) { }

  ngOnInit() {
  }

  async avisoCorreo(){
    const alert = await this.aviso.create({
      header: 'Si los datos coinciden recibiras un correo',
      buttons: ['OK!'],
    });
    await alert.present();
  }
}
