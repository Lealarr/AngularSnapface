import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap! : FaceSnap;
  buttonText!:string;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router){}

  ngOnInit() {
    this.buttonText = "J'aime";
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
  onViewFaceSnap(){
    this.router.navigateByUrl('face-snaps/' + this.faceSnap.id);
  }
}
