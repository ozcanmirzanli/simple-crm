import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDrawer,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDrawer,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressBarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
  ],
})
export class SharedModule {}
