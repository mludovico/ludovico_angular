import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'spa-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  infos: any

  constructor(translate: TranslateService) {
    translate.get('contacts').subscribe(
      value => this.infos = value,
      error => console.log(error),
      () => console.log("Observable closed")
    )
  }

  ngOnInit(): void {
  }

}
