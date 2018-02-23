import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../material/shared-material.module';
import {SharedModule} from '../shared/shared.module';

const authRoutes: Routes = [
  {path: '', component: AuthComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    MatCardModule,
    MatInputModule,
    SharedMaterialModule,
    SharedModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule {
}
