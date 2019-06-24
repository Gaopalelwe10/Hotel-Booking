import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
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
  number=Math.floor(Math.random() * (1000000000 - 40000000 + 1)) + 4000000;
  
  today :any = new Date() ;
  date = this.today.getDate()+'-'+(this.today.getMonth()+1)+'-'+this.today.getFullYear();
  time = this.today.getHours() + ":" + this.today.getMinutes();
  dateTime = this.date+' '+this.time;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.queryParams
      .subscribe(params => {
        this.fname =params.fname; 
        this.lname =params.lname;
        this.email= params.email;
        this.address= params.address;
        this.country= params.country;
        this.state= params.state;
        this.zip= params.zip;
        this.paymentM= params.paymentM;
        this.cname= params.cname;
        this.cnumber= params.cnumber;
        this.cexpiration= params.cexpiration;
        this.cvv= params.cvv;
      });
  }

}
