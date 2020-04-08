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



  constructor(private http: HttpClient) { }

  userSearch(userName: string) {
    // tslint:disable-next-line:class-name
    interface data {
      name: string;
      avatar_url: string;
      followers_url: number;
      following_url: number;
      bio: string;
      login: string;

    }
    const promise =  new Promise ((resolve, reject) => {
      this.userProfile = [];
      this.http.get<data>(this.url + userName + this.token).toPromise().then(
        (result) => {
          console.log(result);
          this.userProfile.push();
          resolve();
        },
        (error) => {
          reject();
        });
    });
    return promise;
  }
  myRepo(userName: string) {
    // tslint:disable-next-line:class-name
    interface repoData {
      name: string;
      html_url: string;
      description: string;
      language: string;
    }
    const promise = new Promise ((resolve, reject) => {
      this.userRepository = [];
      this.http.get<repoData>(this.url + userName + '/repos?' + this.token).toPromise().then(
        (result) => {
          this.userRepository.push(result);
          resolve();
        },
        (error) => {
          reject();
        });
    });
    return promise;
}
}

