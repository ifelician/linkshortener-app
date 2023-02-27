import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'linkshortener-app';
  isFormSubmitted = false;
  inputUrl='';

  model = {
    inputUrl: ''
  }

  constructor(){}

  onSubmitUrlForm(){
    console.log('Form submitted.');
  }
   
}
