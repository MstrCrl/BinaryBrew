import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {


  
  signInForm: FormGroup; // Correct form name
  type = false; // Toggle password visibility
  typeConfirmPassword = false;
  isSignUp = false; // Toggle between Sign In and Sign Up forms

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: [''], // For Sign Up
      confirmPassword: [''], // For Sign Up
    });
  }

  ngOnInit() {}

  changeType() {
    this.type = !this.type;
  }

  // Toggle confirm password visibility
  changeConfirmPasswordType() {
    this.typeConfirmPassword = !this.typeConfirmPassword;
  }


  // Switch between Sign In and Sign Up
  switchForm(signUp: boolean) {
    this.isSignUp = signUp;
    this.signInForm.reset(); // Reset form fields when switching
  
    // Reset the password visibility for both fields when switching to sign-up
    if (signUp) {
      this.typeConfirmPassword = false;  // Make sure the confirm password eye starts hidden
    } else {
      this.typeConfirmPassword = false;  // Hide confirm password eye for sign-in
    }
  }

  // Handle form submission
  onSubmit() {
    if (this.signInForm.valid) {
      if (this.isSignUp) {
        const { username, password, confirmPassword } = this.signInForm.value;
        if (password !== confirmPassword) {
          console.log('Passwords do not match');
          return;
        }
        console.log('Sign-Up Data:', { username, password });
      } else {
        const { email, password } = this.signInForm.value;
        console.log('Sign-In Data:', { email, password });
      }
    } else {
      this.signInForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
