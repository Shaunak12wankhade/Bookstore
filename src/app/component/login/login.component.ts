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

  constructor(private formbuilder: FormBuilder, private user: UserService, private route: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      selectoption: ['', Validators.required],

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

      if (this.loginForm.value.selectoption == '1') {  // this selectoption is coming from login.html from formControlName and is used to select whether user wants to login or admin wants to login
        this.user.userlogin(payload).subscribe((response: any) => {    //subscribe is a method from observable
          console.log(response)

          localStorage.setItem('token', response.result.accessToken);  // this accessToken is coming from swagger and we can see inside console also

          localStorage.setItem('fullName', response.result.fullName);
          localStorage.setItem('mobileNo', response.result.phone);

          //  localStorage.setItem('email', response.email);

          this.route.navigateByUrl("/dashboard")  //by doing this after clicking on login button we will get redirected to dashboard

          // this.route.navigateByUrl("/dashboard/admin")
        })
      } else if (this.loginForm.value.selectoption == '2') { // this selectoption is coming from login.html from formControlName and is used to select whether user wants to login or admin wants to login 
        this.user.adminlogin(payload).subscribe((response: any) => {    //subscribe is a method from observable
          console.log(response)
          localStorage.setItem('token', response.result.accessToken);  // this accessToken is coming from swagger

          // localStorage.setItem('email', response.result.email);
          // localStorage.setItem('mobileNo', response.result.phone);
          this.route.navigateByUrl("/dashboard/admin") //by doing this after clicking on login button we will get redirected to admin dashboard
        })
      }
    } else {
      console.log("enter data");
    }


  }

  // userlogin(){
  //   this.route.navigateByUrl("/dashboard")
  // }

  // adminlogin(){
  //   this.route.navigateByUrl("/dashboard/admin")
  // }


}
