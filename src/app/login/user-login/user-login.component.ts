import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router,) { }
  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe((userdata) => {
      console.log('userdata', userdata)
      this.router.navigate(['dashboard']);
    })
  }
}
