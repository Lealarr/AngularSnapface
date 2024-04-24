import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FilterFaceSnapComponent } from './components/filter-face-snap/filter-face-snap.component';
//import { AuthGuard } from '../core/guards/auth.guard';
//! Ajouter la ligne ci-dessous dans le tableau des routes pour protéger la route
//? exemple: { path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard] },
//canActivate: [AuthGuard]

const routes: Routes = [
    { path: 'create', component: NewFaceSnapComponent },
    { path: 'face-snaps/:id', component: SingleFaceSnapComponent },
    { path: 'filter', component: FilterFaceSnapComponent },
    { path: '', component: FaceSnapListComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaceSnapsRoutingModule {}