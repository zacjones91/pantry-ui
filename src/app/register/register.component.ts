import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // input properties can send data from a parent to a child
  // @Input() valuesFromHome: any;
  // output properties emit events, and are used to send data from a child to a parent
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log("registration successful")
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    // we can emit anything - can be an object or something as simple as a boolean value
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
