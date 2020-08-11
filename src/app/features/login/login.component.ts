import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMsg: string = '';

  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    let unAuthError = this.loginService.getAuthError();
    if (unAuthError) {
      this.errorMsg = unAuthError;
    }
    this.loginForm = this.fb.group({
      uname: new FormControl(),
      pass: new FormControl(),
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.value.uname && this.loginForm.value.pass) {
      let values = this.loginForm.value;
      let user = { uname: values.uname, pass: values.pass };
      let loggedIn = this.loginService.login(user);
      if (loggedIn) {
        this.router.navigate(['home']);
      } else {
        this.errorMsg = "Invalid Credentails!";
      }
    }
  }
}
