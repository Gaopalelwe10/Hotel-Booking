import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss']
})
export class BookingformComponent implements OnInit {
  fname: string ="";
  lname: string ="";
  email: string ="";
  address: string ="";
  country: string ="";
  state: string ="";
  zip: string ="";
  paymentM: string ="";
  cname: string ="";
  cnumber: string ="";
  cexpiration: string ="";
  cvv: string ="";
  
  constructor(private route: Router) { }

  ngOnInit() {
    
  }
  onCheck(){
    this.route.navigateByUrl("book")
  }
  onConfirm(){
    this.route.navigate(['/confirm'], { queryParams: { 
      fname:this.fname , 
      lname:this.lname ,
      email:this.email,
      address:this.address,
      country:this.country,
      state:this.state,
      zip:this.zip,
      paymentM:this.paymentM,
      cname:this.cname,
      cnumber:this.cnumber,
      cexpiration:this.cexpiration,
      cvv:this.cvv
    } 
  });
  }
}
