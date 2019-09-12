import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imageUrl: string;
    public ingredients: Ingredient[];
    constructor(name: string, descr: string, imageUrl: string, ings: Ingredient[]) {
        this.name = name;
        this.description = descr;
        this.imageUrl = imageUrl;
        this.ingredients = ings;
    }

}
