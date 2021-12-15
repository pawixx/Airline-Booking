import { v4 as uid } from 'uuid';
import * as admin from 'firebase-admin';

export class User {
  username: string;
  password: string;
  id: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.id = uid().toString().replace(/-/g, '').substring(0, 27);
  }

  async save() {
    const db = admin.firestore();

    await db.collection('users').doc(this.id).set(this.toJson());

    return true;
  }

  toJson() {
    return {
      id: this.id,
      username: this.username,
      password: this.password,
    };
  }
}
