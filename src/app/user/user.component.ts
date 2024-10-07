import { SharedModule } from './../shared-module';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  onSnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTooltipModule, MatDialogModule, SharedModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit, OnDestroy {
  firestore: Firestore = inject(Firestore);

  allUsers: User[] = [];

  unsubUser: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.fetchUsers();
  }

  ngOnDestroy() {
    this.unsubUser();
  }

  fetchUsers() {
    const usersCollection = collection(this.firestore, 'users');
    onSnapshot(usersCollection, (users) => {
      this.allUsers = [];
      users.forEach((doc) => {
        const user = new User(doc.data());
        this.allUsers.push(user);
      });
      console.log('Users fetched from Firestore:', this.allUsers);
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
