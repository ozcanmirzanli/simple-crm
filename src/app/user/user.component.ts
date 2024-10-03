import { SharedModule } from './../shared-module';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTooltipModule, MatDialogModule, SharedModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
