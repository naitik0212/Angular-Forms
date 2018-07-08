import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female'];
  defaultGender = 'Male';
  suggestedName = 'test';
  user = {
    username : '',
    email: '',
    gender: '',
    secretQuestion: '',
    answer: ''
  };
  submitted  =  false;


  autofill() {
    this.signUpForm.setValue({
      userData: {
        username: this.suggestedName,
        email: this.suggestedName + '@gmail.com'
      },
      secret: 'pet',
      AnswerSecretQuestion: 'dog',
      gender : 'Male'
    });
  }
    suggestedUserName() {
    this.signUpForm.form.patchValue({
      userData: {
        username: this.suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.AnswerSecretQuestion;

    this.signUpForm.reset();


  }
}
