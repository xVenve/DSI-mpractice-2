export class Car {
  brand: string = '';
  model: string = '';
  pic: string = '(sin foto!)';
  year = new Date();
  dateOnSale = new Date();
  price: number = 0;

  constructor(pi: string, b: string, m: string, y: Date, d: Date, pr: number) {
    this.pic = pi;
    this.brand = b;
    this.model = m;
    this.year = y;
    this.dateOnSale = d;
    this.price = pr;
  }
}
