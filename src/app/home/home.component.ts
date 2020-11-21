import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  translate: TranslateService;
  skills: string[];

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  age: number;
  hoje: number;
  nascimento: number;

  ngOnInit(): void {
    this.age = new Date(new Date().valueOf() - new Date(1981, 3, 10).valueOf()).getUTCFullYear() - 1970;
    this.translate.get('aboutSkillsValue').forEach(item => this.skills.push(item));
  }

}
