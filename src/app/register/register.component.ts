import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public results = [];
  dataImg:any;
  nameImg: string ='';

  registerRestaurantForm: FormGroup;

  constructor(private api:ApiService, public formBuilder: FormBuilder) {
    this.registerRestaurantForm = new FormGroup({
      name:new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      type: new FormControl(),
      lat: new FormControl(),
      lng: new FormControl(),
      shortDescription: new FormControl(),
      longDescription: new FormControl(),
      openLocal: new FormControl(),
      closeLocal: new FormControl(),

    })
   }

  ngOnInit(): void {
  }

  onFile(event: any):void {
    console.log(event);
    const[file] = event.target.files;
    this.dataImg = {
      fileRaw:file,
      fileName:file.name
    }
    
  }

  upload(){
    const data = new FormData();
    data.append('usrimage',this.dataImg.fileRaw)

    this.api.postImages(data).subscribe((resposeFromTheServer)=>{
      let resposeLocal;
      resposeFromTheServer = resposeLocal
    
    })
  }

}
