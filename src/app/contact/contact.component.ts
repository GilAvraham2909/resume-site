import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!:FormGroup
  // title = 'formvalidation';
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit () {
    this.contactForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      lastName:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]')])
    })
    
  }

  onSubmit() {
    this.submitted = true
    if(this.contactForm.invalid) {
      return
    }
    console.log('sucsess')

  }

}
