import { Component } from '@angular/core';
import { Auto } from '../../Models/auto';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  autos!: Auto[];
  brand!: string;
  brandLogo!: string;
  images: string[] = ['ford2.jpeg', 'ford3.jpeg'];

  ngOnInit(){
      this.getAutos();
  }

  getAutos() {
      fetch('../../../assets/db.json')
      .then(res => res.json())
      .then(response => {
          this.autos = response;
          this.autos = this.autos.filter((auto) => auto.brand === 'Ford');
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
    return '../../../assets/imgAuto/ford/' + this.images[randomIndex];
  }
}


