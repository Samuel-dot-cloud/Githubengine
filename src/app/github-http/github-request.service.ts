import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {Repository} from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  userProfile: User[] = [];
  userRepository: Repository[] = [];

 url = 'https://api.github.com/users';
  constructor() { }
}
