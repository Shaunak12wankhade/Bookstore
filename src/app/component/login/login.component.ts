import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private user: UserService, private route:Router) { }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
     
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      let payload = {    //this payload is a json object

        email: this.loginForm.value.email,   // leftside email is exactly same as that of backend API and rightside email i.e., email should be exact same as that of formcontrolname in .html file or same as written above in ngonit 
        password: this.loginForm.value.password
       
      }
      this.user.userlogin(payload).subscribe((response: any) => {    //subscribe is a method from observable
        console.log(response)
        localStorage.setItem('token', response.result.accessToken);  // this accessToken is coming from swagger
        this.route.navigateByUrl("/dashboard")
      })
    } else {
      console.log("enter data");
    }
  }


}
