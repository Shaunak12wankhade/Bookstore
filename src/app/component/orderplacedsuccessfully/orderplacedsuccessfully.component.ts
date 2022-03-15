import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderplacedsuccessfully',
  templateUrl: './orderplacedsuccessfully.component.html',
  styleUrls: ['./orderplacedsuccessfully.component.scss']
})
export class OrderplacedsuccessfullyComponent implements OnInit {
  // email:any;
  // mobileNo:any;
  constructor(private route:Router) {
    // this.email=localStorage.getItem('email');
    // this.mobileNo=localStorage.getItem('phone');
   }

  ngOnInit(): void {
  }
 
  continue(){
    this.route.navigateByUrl("/dashboard/getallbooks")
  }
}
