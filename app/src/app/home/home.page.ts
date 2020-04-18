import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  // textos inicio
  tituloHeader: string = "COLHENDO O MELHOR DE NÓS!";
  
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
  tituloDetalhesMissao: string = "MISSÃO";
  subtituloDetalhesMissao: string = "Combater a fome e a miséria de populações em situação de vulnerabilidade social com ênfase na doação de alimentos derivados no campo.";
  textoDescricaoDetalhesMissao: string = "- Estamos fazendo o nosso melhor para ajudar!";

  tituloDetalhesVisao: string = "VISÃO";
  subtituloDetalhesVisao: string = "Alcançar pessoas em situação de vulnerabilidade alimentar, encurtando nossas distâncias, entre necessidade e possibilidade em busca de um futuro melhor após a pandemia";
  textoDescricaoDetalhesVisao: string = "- Juntos somos mais fortes!";

  tituloDetalhesValores: string = "VALORES";
  subtituloDetalhesValores: string = "Aproximando as pessoas, valorizando a mão de obra agrícola, expandido com responsabilidade o alcance a uma alimentação saudável para a sociedade em situação de vulnerabilidade em pról da contribuição comunitária.";
  textoDescricaoDetalhesValores: string = "";
  primeiroTopicoDetalhesValores: string = "Dignidade alimentícia";
  segundoTopicoDetalhesValores: string = "Alimentação Saudável";
  terceiroTopicoDetalhesValores: string = "Valorização Humanitária";
  quartoTopicoDetalhesValores: string = "Ética e Humildade";

  // textos midia
  tituloMidia: string = "MÍDIA";
  subtituloMidia: string = "Estamos fazendo a diferença!";
  textoDescricaoMidia: string = "Veja o que estão falando do projeto";

  tituloAbaPrimeiraMidia: string = "GLOBO PLAY";
  tituloPrimeiraMidia: string = "Diário TV 1ª Edição";
  textoDescricaoPrimeiraMidia: string = "Produtores rurais adotam medidas para evitar desperdício de produtos";
  primeiroTopicoPrimeiraMidia: string = "Exibição em 4 Abr 2020";

  tituloAbaSegundaMidia: string = "O DIÁRIO";
  tituloSegundaMidia: string = "O Diário de Mogi";
  textoDescricaoSegundaMidia: string = "Agricultores de Quatinga doam parte da safra após fechamento de feiras";
  primeiroTopicoSegundaMidia: string = "Exibição em 1 de abril de 2020";


  tituloAbaTerceiraMidia: string = "YOUTUBE";
  tituloTerceiraMidia: string = "Agro Meeting 1";
  textoDescricaoTerceiraMidia: string = "As ações que estão sendo feitas em prol dos pequenos agricultores";
  primeiroTopicoTerceiraMidia: string = "Palestrante: Simone Silotti – Pesquisadora Chefe – Inteligência no Agro";
  segundoTopicoTerceiraMidia: string = "Exibição em 14/04 às 15H";

 

  // textos doacao
  tituloRedesSociais: string = "REDES SOCIAIS";

  // textos footer
  tituloFooter: string = "SOBRE O ROÇA EATS";
  textoFooter: string = "Procurando sempre satisfazer a necessidade de uma alimentação saudável, direto do campo para sua casa.";

}
