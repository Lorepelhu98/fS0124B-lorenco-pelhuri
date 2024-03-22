import { Component } from '@angular/core';
import { Auto } from '../../Models/auto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  autos!: Auto[];
  brand!: string;
  brandLogo!: string;
  images: string[] = ['audi2.jpeg', 'audi3.jpeg'];

  ngOnInit(){
      this.getAutos();
  }

  getAutos() {
      fetch('../../../assets/db.json')
      .then(res => res.json())
      .then(response => {
          this.autos = response;
          this.autos = this.autos.filter((auto) => auto.brand === 'Audi');
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
    return '../../../assets/imgAuto/audi/' + this.images[randomIndex];
  }
}
