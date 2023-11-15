import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private submitted: boolean = false;

  getifSubmitted(): boolean{
    return this.submitted;
  }

  setSubmitted(val : boolean){
    this.submitted = val;
  }

  constructor() { }
}
