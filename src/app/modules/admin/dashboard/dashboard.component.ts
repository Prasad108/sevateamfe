import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {}
  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']); // Navigate to the login page after logout
    }).catch(error => {
      console.error('Logout error:', error);
      // Optional: Show an alert or notification to the user
    });
  }



}
