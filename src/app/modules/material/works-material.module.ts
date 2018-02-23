import {NgModule} from '@angular/core';
import {MatTableModule, MatTabsModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    MatTabsModule,
    MatTableModule,
    CdkTableModule
  ],
  exports: [
    MatTabsModule,
    MatTableModule,
    CdkTableModule
  ]
})
export class WorksMaterialModule {
}
