export class Product {
  public id: number;
  public name: string;
  public price: number;
  public urlImg: string;
  public tags: string[];

  constructor(id: number, name: string, price: number, urlImg: string, tags: string[]) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.urlImg = urlImg;
    this.tags = tags;
  }
}
