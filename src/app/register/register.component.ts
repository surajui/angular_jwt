import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
    Username: any;
    MobileNo: any;
    Email: any;
    Role: any;

  constructor(
      private formBuilder: FormBuilder,private s:MainService,private router:Router
      ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          mobileno: ['', Validators.required],
          email: ['', [Validators.required,Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          role:['',Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // this.Username=this.registerForm.get('username').value;
      // this.Email=this.registerForm.get('email').value;
      // this.MobileNo=this.registerForm.get('mobileno').value;
      // this.Role=this.registerForm.get('role').value;
//  this.s.register(this.registerForm.value).subscribe(resp=>{
 
//      console.log(resp);
//  })
//       // stop here if form is invalid
//       if (this.registerForm.invalid) {
//           return;
//       }
     
//   }
}
}

