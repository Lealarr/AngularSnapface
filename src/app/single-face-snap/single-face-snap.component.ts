import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!:string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute){}

  ngOnInit() {
    this.buttonText = "J'aime";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if(this.buttonText === "J'aime"){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Je n'aime plus";
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "J'aime";
    }
  }
}


