import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Concesionario';
  brandToFilter = "";
  Coche1 = new Car(
    'https://i.pinimg.com/564x/28/55/ec/2855ecb2332a00a084ea305d85841a36.jpg',
    'Seat',
    'Ibiza',
    2003,
    '03-2018',
    1200
  );
  Coche2 = new Car(
    'https://avtotachki.com/wp-content/uploads/2020/05/citroen-c3-1-2-puretech-68-l-s-5-mkp-1.jpg',
    'Citroen',
    'C3',
    2016,
    '05-2017',
    10499
  );
  Coche3 = new Car(
    'https://cars.usnews.com/static/images/Auto/izmo/i159614145/2021_hyundai_kona_angularfront.jpg',
    'Hyundai',
    'Kona',
    2017,
    '05-2019',
    14399
  );
  Coche4 = new Car(
    'https://www.lloydmotorgroup.com/ImageLibrary/Vehicle/526629-LwY3ZPABjEGguuRwf8sBNw.jpg',
    'Ford',
    'Fiesta',
    2017,
    '01-2019',
    14199
  );
    Coche5 = new Car(
    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2020/06/16/-1/2021-Ford-Mustang-Mach-1.jpg',
    'Ford',
    'Mustang',
    2021,
    '02-2021',
    27155
  );

  cars: Car[] = [this.Coche1, this.Coche2, this.Coche3, this.Coche4, this.Coche5];
}
