import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { LoginRequest } from './login-request';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{

    form!: FormGroup;
    constructor(private authService:AuthService, private router: Router){
      
    }
  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
  onSubmit() {
    let LoginRequest = <LoginRequest>{
      userName: this.form.controls["userName"].value,
      password: this.form.controls["password"].value
    };
    
    this.authService.login(LoginRequest).subscribe({
      next: (result) => {
        console.log(result);
        if(result.success){
          this.router.navigate(['/']);
        }
      },
      error: error => console.error(error)
    })
  } 
}
