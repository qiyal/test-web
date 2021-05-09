import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchForm = new FormGroup({
    inputText: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {}

  clickSearchBtn(): void {

  }
}
