import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  posts:Post[];

  constructor(private dataService:DataService) {
    console.log('constructor loaded...')

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  ngOnInit() {
    console.log('ngOnInit loaded...');
    this.name = 'Dylan';
  }
}

interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}
