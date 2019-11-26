import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private ht:HttpClient) { }
  // register(user){
  //   return this.ht.post('http://192.168.3.112:7793/users/save',user);
  // }
  login_user(log){
    return this.ht.post('http://192.168.3.112:8877/token/generate-token',log);
  }
  personal_detail(user){
    return this.ht.post('http://192.168.3.112:8877/users/save',user)
  }
  image_post(a){
    return this.ht.post('http://192.168.3.112:8877/uploadFile',a, {
      headers: {
        "consumes" :" MediaType.MULTIPART_FORM_DATA_VALUE",
        "produces" :  "MediaType.MULTIPART_FORM_DATA_VALUE"
     
      }
      })
      
  }
  ten_data(a){
    return this.ht.post('http://192.168.3.112:8877/Education/save',a)
  }
  high_Data(a){
    return this.ht.post('http://192.168.3.112:8877/Education1/save',a)
  }
}
