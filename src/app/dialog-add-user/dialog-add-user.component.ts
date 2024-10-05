import { Component, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    SharedModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  firestore: Firestore = inject(Firestore);

  user = new User();
  birthDate!: Date;

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user', this.user);

    await addDoc(this.getCollection(), this.user.toJSON()).then(
      (result: any) => {
        console.log('adding user', result);
      }
    );
  }

  getCollection() {
    return collection(this.firestore, 'users');
  }
}
