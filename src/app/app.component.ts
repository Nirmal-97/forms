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

  genders = [
    'male', 'female'
  ];

  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  
  submitted = false;

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

  // this.signupForm.form.patchValue({
  //   userData: {
  //     username: suggestedName
  //   }
  // })

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  
  onSubmit() {
    this.submitted = true;

    this.user.username = this.signupForm?.value.userdata.username;

    this.user.email = this.signupForm?.value.userdata.email;

    this.user.secret = this.signupForm?.value.userdata.secret;

    this.user.answer = this.signupForm?.value.questionAnswer;

    this.user.gender = this.signupForm?.value.userdata.gender;

    this.signupForm?.reset();
  }
}
