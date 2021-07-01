import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
  styleUrls: ['./uploadimg.component.css']
})
export class UploadimgComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  file:FileList
  handleUpload(event){
    this.file = event.target.files
    console.log(event.target.files)
  }
  uploadNow(){
    const mySendData = new FormData()
    mySendData.append('img', this.file[0])
this._http.post('http://localhost:3000/upload/image', mySendData).subscribe(res=> console.log(res))
  }

  fileMulti:FileList
  handleUploadmulti(event){
    this.fileMulti = event.target.files
    console.log(event.target.files)
  }
  uploadNowMulti(){
    const mySendData = new FormData()
    for(let i=0; i<this.fileMulti.length; i++){
     
      mySendData.append('img', this.fileMulti[i], this.fileMulti[i].name)

    }
this._http.post('http://localhost:3000/upload/multiimage', mySendData).subscribe(res=> console.log(res))
  }

}
