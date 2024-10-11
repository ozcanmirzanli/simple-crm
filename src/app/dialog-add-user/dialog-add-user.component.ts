import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared-module';
import { User } from '../../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  firestore: Firestore = inject(Firestore);

  user = new User();
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user', this.user);
    this.loading = true;

    await addDoc(this.getCollection(), this.user.toJSON()).then(
      (result: any) => {
        console.log('adding user', result);
        this.loading = false;
        this.dialogRef.close();
      }
    );
  }

  getCollection() {
    return collection(this.firestore, 'users');
  }
}
