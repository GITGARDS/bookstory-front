import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  livro: Livro = {
    titulo: '',
    nome_autor: '',
    texto: ''
  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

create(): void{

}

cancel(): void{
  
}


}
