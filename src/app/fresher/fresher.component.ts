import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fresher',
  templateUrl: './fresher.component.html',
  styleUrls: ['./fresher.component.css']
})
export class FresherComponent implements OnInit {

    

// text:String="Save"
//   change() {
//     this.text=(this.text==="Save")?"Update":"Save"


//     }

files: File
  // url:any;
  file:any;
  base64textString = [];
  fileData:File=null;
  constructor(private fb:FormBuilder,private sanitizer:DomSanitizer,private s:MainService,private route:Router) { }
  registerForm:FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      mobileno: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:['',Validators.required],
      file:['']
  });
  }
  onSelectFile(event) {
    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();
 
    //   reader.readAsDataURL(event.target.files[0]); // read file as data url
 
    //   reader.onload = (event:Event) => { // called once readAsDataURL is completed
    //     this.url = reader.result;      
    //      localStorage.setItem('imageurl',this.url)
    //   }
     
    //  }
    this.files = event.target.files[0]; 
    const reader = new  FileReader();
    reader.onload = (event:Event) =>{
      this.file = reader.result;
      localStorage.setItem('imageurl',this.file)
    };
    reader.readAsDataURL(this.files);
    console.log("this is file", this.files);
   }

   get f() { return this.registerForm.controls; }

  base64Image:string;
transform()
 {
return this.sanitizer.bypassSecurityTrustResourceUrl(this.base64Image=this.file);
 }


 onSubmit(){
this.form_data();
this.img_post();
this.route.navigate(['/eduction'])
 }
img_post(){
  
var obj={}
obj['file']=this.file
console.log('image',this.file)
  this.s.image_post(obj).subscribe(resp=>{
    console.log(resp)
  });
}
form_data(){
  this.s.personal_detail(this.registerForm.value).subscribe(resp=>{
    console.log(resp);
  })
}

}
