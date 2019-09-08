export class Recipe {
    public name: string;
    public description: string;
    public imageUrl: string;
    constructor(name: string, descr: string, imageUrl: string) {
        this.name = name;
        this.description = descr;
        this.imageUrl = imageUrl;
    }

}
