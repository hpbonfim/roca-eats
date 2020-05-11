import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  redirectLogin(){
    return window.location.replace('#');
  }
  redirectRegister(){
    return window.location.href = '#';
  }
 // textos inicio
  tituloHeader: string = "COLHENDO O MELHOR DE NÓS!";

  //
  tituloSobreNos: string = "COLHENDO O MELHOR DE NÓS!";
  sobreNos: string = "A RoçaEats é uma rede que une instituições sem fins lucrativos e produtores rurais, desenvolvida com o fim de, adequar a necessidade do recebimento de doações por entidades beneficentes, à dificuldade enfrentada na escoação da produção rural, zelando pela expansão social, valorização da saúde pública frente ao combate a pandemia e a preservação do meio ambiente."
  
  // textos projeto
  tituloProjeto: string = "PROJETO";
  subtituloProjeto: string = "Queremos diminuir o impacto que o novo coronavirus COVID-19 está fazendo em nossas vidas.";

  tituloPrimeiroCard: string = "";
  textoPrimeiroCard: string = "Unindo produtores rurais e instituições sem fins lucrativos por meio de uma plataforma digital, desenvolvida com o fim de, adequar a necessidade do recebimento de doações por entidades beneficentes, à dificuldade enfrentada  na escoação da produção rural, vista a baixa demanda consumerista por parte de estabelecimentos comerciais alimentícios, zelando pela  expansão social, e valorização da saúde pública frente ao combate a pandemia.";

  tituloSegundoCard: string = "";
  textoSegundoCard: string = "Auxiliar os pequenos produtores da região da Metropolitana, no escoamento da produção rural, tendo em vista que as colheitas realizadas por estes, não estão sendo comercializadas em sua totalidade, acarretando diminuição nos lucros e consequentemente levando a demissões no setor.";

  tituloTerceiroCard: string = "";
  textoTerceiroCard: string = "Evitar os desperdícios dos alimentos produzidos pelo agronegócio, tão bem com restringir empregos de técnicas agrícolas em vão, reduzido a degradação do solo e seus componentes, e mantendo postos de trabalhos das pequenas regiões, evitando maiores demandas para o grandes centro como o de São Paulo.";

  // textos detalhes
  tituloDetalhesMissao: string = "MISSÃO";
  subtituloDetalhesMissao: string = "Buscar por parcerias no agronegócio a fim de estimular políticas sociais ao combate a fome e a miséria de pessoas em situações de vulnerabilidade,  com ênfase na doação de alimentos derivados do campo, auxiliando no escoamento excedente da produção agrícola  frente às dificuldades enfrentadas perante a pandemia.";
  textoDescricaoDetalhesMissao: string = "- Estamos fazendo o nosso melhor para ajudar!";

  tituloDetalhesVisao: string = "VISÃO";
  subtituloDetalhesVisao: string = "Alcançar pessoas em situação de vulnerabilidade alimentar e social durante e após qualquer crise pública, seja em escala estadual, municipal ou nacional, agregando pequenos, médios e grandes agricultores a corrente solidária, realizando um encurtamento social entre o alimento doado e a mesa dos necessitados.";
  textoDescricaoDetalhesVisao: string = "- Juntos somos mais fortes!";

  tituloDetalhesValores: string = "VALORES";
  subtituloDetalhesValores: string = "";
  textoDescricaoDetalhesValores: string = "";
  primeiroTopicoDetalhesValores: string = "Dignidade Alimentícia";
  segundoTopicoDetalhesValores: string = "Inovação tecnológica e Compromisso Social";
  terceiroTopicoDetalhesValores: string = "Valorização Humanitária";
  quartoTopicoDetalhesValores: string = "Ética e Igualdade";
  quintoTopicoDetalhesValores: string = "";


  // textos midia
  tituloMidia: string = "MÍDIA";
  subtituloMidia: string = "";
  textoDescricaoMidia: string = "Veja o que estão falando do projeto";

  tituloAbaPrimeiraMidia: string = "MÍDIA 1";
  tituloPrimeiraMidia: string = "...";
  textoDescricaoPrimeiraMidia: string = "Projeto";
  primeiroTopicoPrimeiraMidia: string = "Exibição em 4 Abr 2020";

  tituloAbaSegundaMidia: string = "MÍDIA 2";
  tituloSegundaMidia: string = "...";
  textoDescricaoSegundaMidia: string = "Projeto";
  primeiroTopicoSegundaMidia: string = "Exibição em 1 de abril de 2020";


  tituloAbaTerceiraMidia: string = "MÍDIA 3";
  tituloTerceiraMidia: string = "...";
  textoDescricaoTerceiraMidia: string = "Projeto";
  primeiroTopicoTerceiraMidia: string = "Info";
  segundoTopicoTerceiraMidia: string = "Exibição em 14/04 às 15H";

 

  // textos doacao
  tituloRedesSociais: string = "REDES SOCIAIS";

  // textos footer
  tituloFooter: string = "SOBRE O ROÇA EATS";
  textoFooter: string = "A RoçaEats é uma rede que une instituições sem fins lucrativos e produtores rurais, desenvolvida com o fim de, adequar a necessidade do recebimento de doações por entidades beneficentes, à dificuldade enfrentada na escoação da produção rural, zelando pela expansão social, valorização da saúde pública frente ao combate a pandemia e a preservação do meio ambiente.";

}
