import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm !: FormGroup

  constructor( private formbuilder : FormBuilder,  private auth: Auth) { 
      this.RegisterForm = formbuilder.group({
        email : formbuilder.control('',[
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ]),
        Password : formbuilder.control('',[
          Validators.required,
          Validators.minLength(6)
        ]) 
      })
  }

  public onSubmit(){
      /* console.log(this.RegisterForm.value) */
    createUserWithEmailAndPassword(
      this.auth,
      this.RegisterForm.value.email,
      this.RegisterForm.value.Password
    )
      .then((res: any) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

      this.RegisterForm.reset()
  }

  ngOnInit(): void {
  }

}
