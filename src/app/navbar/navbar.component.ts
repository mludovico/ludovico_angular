import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'spa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  ngOnInit(): void {
    
  }

  onClick(path) {
    window.location.href = path;
  }

  changeLang(lang: string){
    this.translate.use(lang);
  }

}
