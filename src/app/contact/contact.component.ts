import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ContactService]
})
export class ContactComponent {
  contactForm!:FormGroup
  // title = 'formvalidation';
  pushedSubmit = false;
  
  constructor(private formBuilder: FormBuilder, public contactS: ContactService) {}

  ngOnInit () {
    this.contactForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      lastName:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9][0-9][0-9][0-9]')])
    })
    
  }

  onSubmit() {
    this.pushedSubmit = true
    if(this.contactForm.invalid) {
      return
    }
    this.contactS.setSubmitted(true);
  }

}
