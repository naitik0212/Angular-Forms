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
  genders = ['male', 'female'];
  defaultGender = 'male';
  suggestedName = 'test';


  autofill() {
    this.signUpForm.setValue({
      userData: {
        username: this.suggestedName,
        email: this.suggestedName + '@gmail.com'
      },
      secret: 'pet',
      AnswerSecretQuestion: 'dog',
      gender : 'male'
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
    console.log(this.signUpForm);
  }
}
