import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {
  cartcount:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
