import { Injectable } from '@nestjs/common';

import * as admin from 'firebase-admin';
import { auth } from 'firebase-admin';
import { User } from './user.model';

@Injectable()
export class UserService {
  private DB = admin.firestore();
  private AUTH: auth.Auth = admin.auth();

  login() {
    return 'Hello World!';
  }

  async register(body) {
    const fields = ['username', 'password', 'confirm_password'];
    const keys = Object.keys(body);

    const valid = fields.every((key) => keys.indexOf(key) > -1);

    if (!valid) {
      throw new Error('Body invalid');
    }

    if (body['password'] !== body['confirm_password']) {
      throw new Error('Passwords do not match');
    }
    const user = new User(body.username, body.password);

    await user.save();
  }
}
