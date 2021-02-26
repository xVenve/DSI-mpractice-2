import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Concesionario';
  Coche1 = new Car(
    'https://i.pinimg.com/564x/28/55/ec/2855ecb2332a00a084ea305d85841a36.jpg',
    'Seat',
    'Ibiza',
    2003,
    '03-2018',
    1200
  );
  Coche2 = new Car(
    'https://i.pinimg.com/564x/28/55/ec/2855ecb2332a00a084ea305d85841a36.jpg',
    'Seat',
    'Ibiza',
    2003,
    '03-2018',
    1200
  );
  Coche3 = new Car(
    'https://i.pinimg.com/564x/28/55/ec/2855ecb2332a00a084ea305d85841a36.jpg',
    'Seat',
    'Ibiza',
    2003,
    '03-2018',
    1200
  );
  Coche4 = new Car(
    'https://i.pinimg.com/564x/28/55/ec/2855ecb2332a00a084ea305d85841a36.jpg',
    'Seat',
    'Ibiza',
    2003,
    '03-2018',
    1200
  );

  cars: Car[] = [this.Coche1, this.Coche2, this.Coche3, this.Coche4];
}
