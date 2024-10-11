import { Component, inject, Inject } from '@angular/core';
import { SharedModule } from '../shared-module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [SharedModule, DialogAddUserComponent],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
})
export class DialogEditUserComponent {
  firestore: Firestore = inject(Firestore);

  user!: User;
  userId!: string;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

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
