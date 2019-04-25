export class Greet {
    constructor(public genre: string) {
        this.genre = genre;
    }
    public greeting(): string {
        return this.genre;
    }
}