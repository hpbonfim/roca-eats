import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  // textos inicio
  tituloHeader: string = "SEMEANDO O MELHOR DE NÓS!";
  
  // textos projeto
  tituloProjeto: string = "PROJETO";
  subtituloProjeto: string = "Queremos diminuir o impacto que o novo coronavirus COVID-19 está fazendo em nossas vidas.";

  tituloPrimeiroCard: string = "Conteúdo 1";
  textoPrimeiroCard: string = "Desenvolver texto para a imagem escolhida ou tema";

  tituloSegundoCard: string = "Conteúdo 2";
  textoSegundoCard: string = "Desenvolver texto para a imagem escolhida ou tema";

  tituloTerceiroCard: string = "Conteúdo 3";
  textoTerceiroCard: string = "Desenvolver texto para a imagem escolhida ou tema";

  // textos detalhes
  tituloDetalhes: string = "MISSÃO";
  subtituloDetalhes: string = "A união faz a força, vamos juntos lutar essa guerra!.";
  textoDescricaoDetalhes: string = "Queremos diminuir o impacto que o novo coronavirus COVID-19 está fazendo em nossas vidas.";
  primeiroTopicoDetalhes: string = "detalhes da missão 1";
  segundoTopicoDetalhes: string = "detalhes da missão 2";


  // textos midia
  tituloMidia: string = "MÍDIA";
  subtituloMidia: string = "Estamos fazendo a diferença!";
  textoDescricaoMidia: string = "Veja o que estão falando do projeto";

  tituloAbaPrimeiraMidia: string = "TITULO ABA 1";
  tituloPrimeiraMidia: string = "TITULO REPORTAGEM 1";
  textoDescricaoPrimeiraMidia: string = "texto descritivo sobre a mídia";
  primeiroTopicoPrimeiraMidia: string = "palavra/frase chave 1";
  segundoTopicoPrimeiraMidia: string = "palavra/frase chave 2";
  terceiroTopicoPrimeiraMidia: string = "palavra/frase chave 3";

  tituloAbaSegundaMidia: string = "TITULO ABA 2";
  tituloSegundaMidia: string = "TITULO REPORTAGEM 2";
  textoDescricaoSegundaMidia: string = "texto descritivo sobre a mídia";
  primeiroTopicoSegundaMidia: string = "palavra/frase chave 1";
  segundoTopicoSegundaMidia: string = "palavra/frase chave 2";
  terceiroTopicoSegundaMidia: string = "palavra/frase chave 3";

  tituloAbaTerceiraMidia: string = "TITULO ABA 3";
  tituloTerceiraMidia: string = "TITULO REPORTAGEM 3";
  textoDescricaoTerceiraMidia: string = "texto descritivo sobre a mídia";
  primeiroTopicoTerceiraMidia: string = "palavra/frase chave 1";
  segundoTopicoTerceiraMidia: string = "palavra/frase chave 2";
  terceiroTopicoTerceiraMidia: string = "palavra/frase chave 3";

 

  // textos doacao
  tituloRedesSociais: string = "REDES SOCIAIS";

  // textos footer
  tituloFooter: string = "SOBRE O ROÇA EATS";
  textoFooter: string = "Procurando sempre satisfazer a necessidade de uma alimentação saudável, direto do campo para sua casa.";

}
