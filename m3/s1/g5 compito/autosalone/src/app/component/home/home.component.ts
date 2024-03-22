import { Component } from '@angular/core';
import { Auto } from '../../Models/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  auto!: Auto[];
  randomAuto: Auto[] = [];
  brands!: string[];

  ngOnInit(){
      this.getAuto();
  }

  getAuto() {
      fetch('../../../assets/db.json')
      .then(res => res.json())
      .then(response => {
          this.auto = response;
          console.log(this.auto);
          this.brands = this.getBrand();
          this.getRandomAuto(2);
      })
      .catch(error => console.error('Error:', error));
  }

  getBrand():string[] {
      const marchi:string[] = [];
      let marchio:string = '';
      for (let i = 0; i < this.auto.length; i++) {
          if (marchio != this.auto[i].brandLogo) {
              marchio = this.auto[i].brandLogo;
              marchi.push(this.auto[i].brandLogo);
          }
      }
      return marchi;
  }

  getRandomAuto(num:number) {
      const presenti:number[] = [];
      for (let i = 0; i < num; i++) {
          const indice = Math.floor(Math.random() * this.auto.length);
          if (presenti.includes(indice)) this.getRandomAuto(num - i);
          presenti.push(indice);
          this.randomAuto.push(this.auto[indice]);
      }
  }
}
