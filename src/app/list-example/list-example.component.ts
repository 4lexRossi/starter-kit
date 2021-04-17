import { Component, OnInit } from '@angular/core';
import { ExampleServiceService } from './example-service.service';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss'],
})
export class ListExampleComponent implements OnInit {
  constructor(private exampleServiceService: ExampleServiceService) {}

  users: any = [];

  ngOnInit(): void {
    this.exampleServiceService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
