import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable, Subject } from 'rxjs/';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})


export class FaceSnapListComponent implements OnInit {
  
  faceSnaps$!: Observable<FaceSnap[]>;
  facesnapSearch: string = "";
  facesnapSearch$ = new Subject<string>();

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router){
  }

  ngOnInit(): void {
    this.facesnapSearch = localStorage.getItem('facesnapSearch') || '';
    this.facesnapSearch$.next(this.facesnapSearch);
    this.faceSnaps$ = this.facesnapSearch$
    .pipe(
      switchMap(facesnapSearch => 
        this.faceSnapsService.getAllFaceSnaps()
          .pipe(
            map(faceSnaps => faceSnaps.filter(faceSnap => 
              Object.values(faceSnap).some(property => 
                property !== null && property.toString().toLowerCase().includes(facesnapSearch.toLowerCase())
              )
            ))
          )
      )
    );
  }

  filterFaceSnap(){
    this.router.navigateByUrl('face-snaps/filter');
  }

  storeSearch(): void {
    localStorage.setItem('facesnapSearch', this.facesnapSearch);
    this.facesnapSearch$.next(this.facesnapSearch);
  }
}




