import { Injectable } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}
  
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.toastr.error('You must be logged in to access that page!', 'Please log in.');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
