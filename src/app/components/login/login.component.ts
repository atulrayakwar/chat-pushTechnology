import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Implement authentication logic here (e.g., send credentials to backend)
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Reset form fields
    this.username = '';
    this.password = '';
  }

}
