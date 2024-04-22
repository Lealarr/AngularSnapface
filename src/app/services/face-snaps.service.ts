import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    constructor(private http: HttpClient) { }   





    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami',
            createdDate: new Date(),
            imageUrl: 'https://picsum.photos/300/200',
            snaps: 150,
            location:'Paris'
        },
        {
            id: 2,
            title: 'Un bon repas',
            description: 'En famille ou entre amis',
            createdDate: new Date(),
            imageUrl: 'https://picsum.photos/300/200',
            snaps: 0,
            location:'La montagne'
        },
        {
            id: 3,
            title: 'Mon animal préféré',
            description: 'Yuna, Akita Inu de 3 ans',
            createdDate: new Date(),
            imageUrl: 'https://picsum.photos/300/200',
            snaps: 0
        },
        {
            id: 4,
            title: 'Sport favori',
            description: 'Karuta, sport de carte japonais',
            createdDate: new Date(),
            imageUrl: 'https://picsum.photos/300/200',
            snaps: 0
        },
        {
            id: 5,
            title: 'Le japon',
            description: 'Pays du soleil levant',
            createdDate: new Date(),
            imageUrl: 'https://picsum.photos/300/200',
            snaps: 0
        },
        {
            id: 6,
            title: 'Mon animal préféré',
            description: 'Yuna, Akita Inu de 3 ans',
            createdDate: new Date(),
            imageUrl: 'https://picsum.photos/300/200',
            snaps: 0
        }
    ]; 
    
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
        const faceSnap: FaceSnap = {
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };
        this.faceSnaps.push(faceSnap);
    }
}