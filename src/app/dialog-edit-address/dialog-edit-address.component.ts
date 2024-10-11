import { Component, inject, Inject } from '@angular/core';
import { SharedModule } from '../shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [SharedModule, DialogAddUserComponent],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss',
})
export class DialogEditAddressComponent {
  firestore: Firestore = inject(Firestore);

  user!: User;
  userId!: string;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  async saveUser() {
    this.loading = true;

    const userDocRef = doc(this.firestore, 'users', this.userId);

    try {
      await updateDoc(userDocRef, this.user.toJSON());
      console.log('User updated successfully');
      this.dialogRef.close(true);
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      this.loading = false;
    }
  }
}
