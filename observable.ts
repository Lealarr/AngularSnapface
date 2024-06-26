//!Angular intermediaire openClassRoom
//?Chapitre observable

/*

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { interval, Observable, Subject } from 'rxjs/';
import { take, takeUntil, tap } from 'rxjs/operators';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>
  private destroy$!: Subject<boolean>
  
  constructor(private faceSnapsService: FaceSnapsService){
  }

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
  ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
  
  }
}
*/