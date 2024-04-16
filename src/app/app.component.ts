import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(){
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami',
      new Date(),
      'https://picsum.photos/300/200',
      0
    )
    this.myOtherSnap = new FaceSnap(
      'Un bon repas',
      'En famille ou entre amis',
      new Date(),
      'https://picsum.photos/300/200',
      0
    )
    this.myLastSnap = new FaceSnap(
      'Mon animal préféré',
      'Yuna, Akita Inu de 3 ans',
      new Date(),
      'https://picsum.photos/300/200',
      0
    );
  }
}
