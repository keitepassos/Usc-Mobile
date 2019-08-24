import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  private caminho1:string;
  private titulo:string;
  private descricao:string;
  constructor() {
    this.caminho1 = "/assets/img/gatoJailson.png";
    this.titulo = "Gatos pretos";
    this.descricao = "Gatos pretos são os melhores.";
   }

  ngOnInit() {
  }

}
