import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;
    public ingredients: Ingredient[];
    constructor(id: number, name: string, descr: string, imageUrl: string, ings: Ingredient[]) {
        this.id = id;
        this.name = name;
        this.description = descr;
        this.imageUrl = imageUrl;
        this.ingredients = ings;
    }

}
