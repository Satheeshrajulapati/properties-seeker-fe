import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault(); // stop page reload
    if (this.registerForm.valid) {
      console.log('Form Submitted ✅', this.registerForm.value);
    } else {
      console.log('Form Invalid ❌', this.registerForm.value);
      this.registerForm.markAllAsTouched();
    }
  }
}
