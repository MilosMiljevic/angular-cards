import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      userName: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      userName: 'mountain-lover',
      content: 'That was a big mountain',
    },
    {
      title: 'Biking',
      imageUrl: 'assets/biking.jpeg',
      userName: 'biker123',
      content: 'I some biking today',
    },
  ];
}
