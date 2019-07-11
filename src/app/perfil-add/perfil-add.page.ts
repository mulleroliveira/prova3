import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-perfil-add',
  templateUrl: './perfil-add.page.html',
  styleUrls: ['./perfil-add.page.scss'],
})
export class PerfilAddPage implements OnInit {

  cliente = {
    "cliente":"",
    "data":"",
    "qtd":"",
    "vlr_unitario":"",
    "vlr_total":"",
  }

  constructor(public modal:ModalController) { }

  ngOnInit() {
  }

  add(){
    this.modal.dismiss(this.cliente)
  }

}
