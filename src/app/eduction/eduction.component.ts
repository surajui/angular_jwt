import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-eduction',
  templateUrl: './eduction.component.html',
  styleUrls: ['./eduction.component.css']
})
export class EductionComponent implements OnInit {

  constructor(private fb:FormBuilder,private s:MainService) { }
  educat:FormGroup;
  show: boolean = false;
  ngOnInit() {
    this.educat=this.fb.group({
      highestEdu: [0],
      institute:[''],
      yearOfPassing:[''],
      skills:[''],
      percentage:[''],
      medium:[''],
      board:[''],
      specialization:[''],
      eduType:[''],
    })
  }
  onSubmit(){
 this.tenth_data();
 this. higher();
  }
  tenth_data(){
    this.s.ten_data(this.educat.value).subscribe(resp=>{
      console.log(resp);
    });
  }
  higher(){
    this.s.high_Data(this.educat.value).subscribe(resp=>{
      console.log(resp);
    })
  }
 
}
