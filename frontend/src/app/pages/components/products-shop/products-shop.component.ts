// products-shop.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/global/services/category/category.service';
import { CartService } from 'src/app/global/services/cart/cart.service';
import { MainCategory, SubCategory, Product } from 'src/app/global/models/category/category.model';
import { CartItemModel } from 'src/app/global/models/cart/cart.model';

@Component({
  selector: 'app-products-shop',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.scss']
})
export class ProductsShopComponent implements OnInit {
  mainCategories!: MainCategory[];
  selectedMainCategory?: MainCategory;
  selectedSubCategory?: SubCategory;

  constructor(
    private categoryService: CategoryService,
    private cartService: CartService // Inject the CartService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.mainCategories = categories;
      if (this.mainCategories.length > 0) {
        this.selectedMainCategory = this.mainCategories[0];
        if (this.selectedMainCategory.subcategories.length > 0) {
          this.selectedSubCategory = this.selectedMainCategory.subcategories[0];
        }
      }
    });
  }

  onMainCategorySelected(mainCategory: MainCategory): void {
    this.selectedMainCategory = mainCategory;
    if (mainCategory.subcategories.length > 0) {
      this.selectedSubCategory = mainCategory.subcategories[0];
    } else {
      this.selectedSubCategory = undefined;
    }
  }

  onSubCategorySelected(subCategory: SubCategory): void {
    this.selectedSubCategory = subCategory;
  }

  onProductSelected(product: Product): void {   // check this for the adding
    const cartItem = new CartItemModel({
      NameID: product.NameID,
      Name: product.Name,
      Price: product.Price,
      Amount: 1, // Default quantity to add
      ImagePath: product.ImagePath,
      selected: false
    });

    this.cartService.add(cartItem).subscribe(
      (addedProduct) => {
        // alert(`Successfully added ${product.Name} to the cart`); // Show an alert
        console.log(`Product added to cart: ${addedProduct.Name}`);
      },
      (error) => {
        console.error('Error adding product to cart', error);
      }
    );
  }
}
