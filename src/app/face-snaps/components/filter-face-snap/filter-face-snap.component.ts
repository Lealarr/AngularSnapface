import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable, Subject } from 'rxjs/';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-filter-face-snap',
  templateUrl: './filter-face-snap.component.html',
  styleUrls: ['./filter-face-snap.component.scss']
})
export class FilterFaceSnapComponent implements OnInit {
  
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
          .pipe(map(faceSnaps => 
            faceSnaps.filter(faceSnap => 
              Object.values(faceSnap).some(property => 
                property !== null && property.toString().toLowerCase().includes(facesnapSearch.toLowerCase())
              )
            ))
          )
      )
    );
  }

  storeSearch(): void {
    localStorage.setItem('facesnapSearch', this.facesnapSearch);
    this.facesnapSearch$.next(this.facesnapSearch);
  }
}




