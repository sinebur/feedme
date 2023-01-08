export class Meal {
  public price: number;
  public title: string;
  public ingrideants: string;
  public description: string;

  constructor(price: number, title: string, Ingrideants: string, Description: string) {
    this.price = price;
    this.title = title;
    this.ingrideants = Ingrideants;
    this.description = Description;
  }
}
