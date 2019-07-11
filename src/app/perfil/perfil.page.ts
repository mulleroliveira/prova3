import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; // Passo 3 - Câmera
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  user = {
    "nome": "",
    "foto": ""
  }

  constructor(public modalController: ModalController, private camera: Camera) { }

  ngOnInit() {
  }

  atualizar() {
    this.modalController.dismiss(this.user)
  }

  tirar_foto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.user.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err)
    });
  }

}
