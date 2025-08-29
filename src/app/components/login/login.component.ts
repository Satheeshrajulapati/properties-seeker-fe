import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // stop page reload
    if (this.loginForm.valid) {
      console.log('Form Submitted ✅', this.loginForm.value);
    } else {
      console.log('Form Invalid ❌', this.loginForm.value);
      this.loginForm.markAllAsTouched();
    }
  }

}
