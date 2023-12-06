import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
  standalone: true,
  imports: [MatCardModule, MatChipsModule, CommonModule],
})
export class PartnerComponent implements OnInit {
  id!: String | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  getPartnerData(): any {
    switch (this.id) {
      case 'cdm':
        return {
          aboutText: `A CDM é uma organização sem fins lucrativos, com sede em Belo Horizonte,
            que há mais de três décadas realiza ações de planejamento; gestão;
            execução; e avaliação de programas e projetos sociais; de voluntariado
            corporativo; e de eficiência energética. Todos alinhados às demandas e
            especificidades de cada cliente e localidade. Com o trabalho e
            comprometimento de uma equipe especializada, a CDM contribui com a
            promoção do desenvolvimento de comunidades e territórios onde está
            presente. Sua atuação se dá por meio de iniciativas planejadas a partir do
            conhecimento prévio e das possibilidades de parcerias locais para a
            prestação de serviços diferenciados, bem como da corresponsabilidade dos
            envolvidos.`,
          imageURL: `../../../assets/logos/logo-cmd.png`,
          projects: [
            {
              title: 'CDM',
              status: 'Em Desenvolvimento',
              aboutProject:
                'A CDM é uma organização sem fins lucrativos, com sede em Belo Horizonte, que há mais de três décadas realiza ações de planejamento; gestão; execução; e avaliação de programas e projetos sociais',
              imageURLProject: `../../../assets/logos/logo-cmd.png`,
            },
          ],
        };
      case 'carrancas':
        return {
          aboutText: `Carrancas é um município localizado no estado de Minas Gerais, Brasil. Sua população recenseada em 2022 era de 4.049 habitantesAd1. A cidade é conhecida por suas cachoeiras, poços, grutas e serras. Em 2008, a Revista Encontro de Belo Horizonte elegeu Carrancas como a 4ª Maravilha de Minas GeraisAd1. Rodeada pela Mata Atlântica e Cerrado, é um destino ideal para descansar e explorar a história mineira. A paróquia Nossa Senhora da Conceição pertence à Diocese de São João del-ReiAd1. A cidade está localizada na divisa com o sul de Minas Gerais, a cerca de 80 km de São João del-Rei, 280 km de Belo Horizonte e 100 km de Caxambu, cidade do Circuito das Águas2. Se você visitar Carrancas, encontrará um lugar incrível com cachoeiras maravilhosas e pouco exploradas`,
          imageURL: `../../../assets/logos/brasao-pref-carrancas.png`,
          projects: [
            {
              title: 'Prefeitura de Carrancas',
              status: 'Em Desenvolvimento',
              aboutProject:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo delectus pariatur molestias quos doloribus sit a aut asperiores, ipsum exercitationem, nesciunt ducimus modi hic quod tenetur ratione officiis saepe. Sunt.',
              imageURLProject: `../../../assets/logos/brasao-pref-carrancas.png`,
            },
          ],
        };

      case 'ribeirao-das-neves':
        return {
          aboutText: `Ribeirão das Neves é um município localizado no estado de Minas Gerais, Brasil. Sua população recenseada em 2022 era de 343.000 habitantes. A cidade está situada na Região Metropolitana de Belo Horizonte e faz parte do Colar Metropolitano Norte. Aqui estão alguns pontos relevantes sobre Ribeirão das Neves:`,
          imageURL: `../../../assets/logos/brasao-pref-ribeirao.png`,
          projects: [
            {
              title: 'CDM',
              status: 'Em Desenvolvimento',
              aboutProject:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo delectus pariatur molestias quos doloribus sit a aut asperiores, ipsum exercitationem, nesciunt ducimus modi hic quod tenetur ratione officiis saepe. Sunt.',
              imageURLProject: `../../../assets/logos/brasao-pref-ribeirao.png`,
            },
          ],
        };
      default:
        return '';
    }
  }
}
