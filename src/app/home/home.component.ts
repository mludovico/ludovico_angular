import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  age: number;
  hoje: number;
  nascimento: number;

  ngOnInit(): void {
    this.age = new Date(new Date().valueOf() - new Date(1981, 3, 10).valueOf()).getUTCFullYear() - 1970;
  }

}
