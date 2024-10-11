import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../shared-module';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { docData } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  userId = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    console.log('Got ID:', this.userId);
    this.getUser();
  }

  getUser() {
    const userDocRef = doc(this.firestore, 'users', this.userId);
    docData(userDocRef).subscribe((user: any) => {
      this.user = new User(user);
      console.log('retrived user', user);
    });
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
