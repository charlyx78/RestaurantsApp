import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formattedAddress='';

  // options = {
  //   componentRestrictions : {
  //     country: ['MX']
  //   }
  // }

  public handleAddressChange(address: any) {
    this.formattedAddress = address.formattedAddress;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
