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
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SharedModule, RouterLink, MatTooltipModule],
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
    this.unsubUser = onSnapshot(usersCollection, (users) => {
      this.allUsers = [];
      users.forEach((doc) => {
        const userData = doc.data() as User;
        userData.id = doc.id;
        this.allUsers.push(userData);
      });
      console.log('Users fetched from Firestore:', this.allUsers);
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
