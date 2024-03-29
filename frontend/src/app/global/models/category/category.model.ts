export interface Product {
  Name: string;
  NameID: number;
  ClassName: string;
  Price: number;
  ClassId: number;
  ImagePath: string;
  ProductDescriptionPath: string;
}

export interface SubCategory {
  name: string;
  products: Product[];
}

export interface MainCategory {
  name: string;
  subcategories: SubCategory[];
  imagePath: string;
}
