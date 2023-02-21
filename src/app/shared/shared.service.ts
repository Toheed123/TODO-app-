import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  constructor() { }
  mess:any;
  tt:any;
  setmessage(tt: any){
    this.mess = tt
  }
  getmessage(){
    return this.mess
  }
  
}
