import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private auth: Auth, private router : Router) { 
    this.LoginForm = this.formBuilder.group({
      email : formBuilder.control('',[
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      Password : formBuilder.control('',[
        Validators.required,
        Validators.minLength(6)
      ]) 
    });
  }

  public onSubmit(){
    /*console.log(this.LoginForm.value) */
    signInWithEmailAndPassword (
      this.auth,
      this.LoginForm.value.email,
      this.LoginForm.value.Password
    )
      .then((res: any) => {
        console.log(res)
        this.router.navigate(['/dashboard'])
        alert('Success')
      })
      .catch((err) => {
        console.log(err)
        alert('Failure')
      });
  }

  ngOnInit(): void {
  }

}
