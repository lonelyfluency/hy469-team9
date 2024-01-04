export class CategoryModel {
    public _id!: string; // generated by mongoDB
    public title!: string;
    public description!: string;
    public category!: string;
    public price!: string;
    public img_url!: string;
    public createdAt!: Date; // generated by mongoDB
    public updatedAt!: Date; // generated by mongoDB
    constructor(model?: any) {
      Object.assign(this, model);
    }
  
  }
  