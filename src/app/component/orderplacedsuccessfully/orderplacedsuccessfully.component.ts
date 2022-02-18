import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderplacedsuccessfully',
  templateUrl: './orderplacedsuccessfully.component.html',
  styleUrls: ['./orderplacedsuccessfully.component.scss']
})
export class OrderplacedsuccessfullyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 
  continue(){
    this.route.navigateByUrl("/dashboard/getallbooks")
  }
}
