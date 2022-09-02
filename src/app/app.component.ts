import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm | undefined;
  deafultQuestion = 'pet';
  answer = '';
  gender = [
    'male', 'female'
  ];
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };




  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm?.setValue({
      userdata: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: ''
    });
  }
  
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  
  onSubmit() {
    this.user.username = this.signupForm?.value.userdata.username;

    this.user.email = this.signupForm?.value.userdata.email;

    this.user.secret = this.signupForm?.value.userdata.secret;

    this.user.answer = this.signupForm?.value.userdata.questionAnswer;

    this.user.gender = this.signupForm?.value.userdata.gender;



  }
}
