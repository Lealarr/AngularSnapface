/*export class FaceSnap {
    title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;
    
    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdDate = createdDate;
        this.snaps = snaps;
    }
}
*/
//? raccourci TypeScript equivalent à la classe ci-dessus
/*
export class FaceSnap {
    constructor(
        public title: string,
        public description: string,
        public createDate: Date, 
        public imageUrl: string,
        public snaps: number,
        public location?: string){
    }
}
*/
//? On retire le constructeur qui est inutile
export class FaceSnap {
    id!: number;
    title!: string;
    description!: string;
    createdDate!: Date;
    imageUrl!: string;
    snaps!: number;
    location?: string;
}
