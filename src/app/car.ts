export class Car {
  pic: string = '(sin foto!)';
  brand: string = '';
  model: string = '';
  year: number = 0;
  dateOnSale: string = ''; //Date = new Date();
  price: number = 0;

  constructor(
    pi: string,
    b: string,
    m: string,
    y: number,
    d: string, //Date,
    pr: number
  ) {
    this.pic = pi;
    this.brand = b;
    this.model = m;
    this.year = y;
    this.dateOnSale = d;
    this.price = pr;
  }
}
