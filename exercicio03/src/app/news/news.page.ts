import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  
  public lista: Array<{ titulo: string; subtitulo: string }> = [];

  constructor() { }
  
  cadastrarInformacao(til:string, sub:string){
    if(til.length>0)
      this.lista.push({titulo:til, subtitulo:sub  }); 
    else
       alert("Por favor, informe um Título");    
  }
  limparLista(){    
    this.lista =[];    
  }


  ngOnInit() {
  }

}
