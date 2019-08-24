import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  private nome: string;
  private idade: string;
  private email: string;
  private telefone: string;

  private pessoa:object;

  private caminho:string;

  constructor() { 
    this.caminho = "/assets/icon/favicon.png";

    this.nome = "Jailson";
    this.idade = "1";
    this.email = "jailson@nenou.com";
    this.telefone = "14997217432";

    this.pessoa = {
      nome : "Jailson",
      idade : "1",
      email : "jailson@nenou.com",
      telefone : "14997217432"
    }
  }

  

  ngOnInit() {
  }

}
