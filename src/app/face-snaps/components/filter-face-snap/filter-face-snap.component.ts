import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-filter-face-snap',
  templateUrl: './filter-face-snap.component.html',
  styleUrls: ['./filter-face-snap.component.scss']
})
export class FilterFaceSnapComponent implements OnInit {

  constructor(
    private router :Router

  ) { }

  ngOnInit(): void {
  }

}
