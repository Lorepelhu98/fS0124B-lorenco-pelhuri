import { Component } from '@angular/core';
import { Auto } from '../../Models/auto';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  autos!: Auto[];
  brand!: string;
  brandLogo!: string;
  images: string[] = ['fiat2.jpeg','fiat3.jpeg'];

  ngOnInit(){
      this.getAutos();
  }

  getAutos() {
      fetch('../../../assets/db.json')
      .then(res => res.json())
      .then(response => {
          this.autos = response;
          this.autos = this.autos.filter((auto) => auto.brand === 'Fiat');
          this.brandLogo = this.autos[0].brandLogo;
          this.brand = this.autos[0].brand;
          this.autos.forEach(auto => {
            auto.modelImage = this.getRandomImage();
          });
      })
      .catch(error => console.error('Error:', error));
  }

  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return '../../../assets/imgAuto/fiat/' + this.images[randomIndex];
  }
}

