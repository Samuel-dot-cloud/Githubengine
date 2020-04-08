import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Repository} from '../repository';
import {GithubRequestService} from '../github-http/github-request.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  user: User[];
  repository: Repository[];

  constructor(private http: GithubRequestService) { }



  ngOnInit() {
    this.myName('Samuel-dot-cloud');
  }
  myName(userName) {
    this.http.userSearch(userName).then(
      (success) => {
        this.user = this.http.userProfile;
        console.log(this.user);
  },

  (error) => {
    console.log(error);
  });
    this.http.myRepo(userName).then(
    (success) =>  {
      this.repository = this.http.userRepository;
      console.log(this.repository);
    },
    (error) => {
      console.log(error);
    });

}

}


