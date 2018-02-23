import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule, MatSnackBarModule, MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTooltipModule,
    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  exports: [
    MatTooltipModule,
    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    MatSnackBarModule
  ]
})
export class AppMaterialModule {
}
