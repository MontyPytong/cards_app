import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl:'assets/tree.jpeg',
      username:'@nature',
      content:'Saw this awsome tree today'
    },
    {
      title: 'Snowy mountain',
      imageUrl:'assets/mountain.jpeg',
      username:'@mountainlover',
      content:'Here is a picture of a snowy mountain'
    },
    {
      title: 'Mountain Biking',
      imageUrl:'assets/biking.jpeg',
      username:'@enjoybiking',
      content:'Look at my cool byke'
    },
    
  ];
}
