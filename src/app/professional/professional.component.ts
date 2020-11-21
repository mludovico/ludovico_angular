import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'spa-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  work: string[];

  constructor(translate: TranslateService) {
    
    translate.get('work').subscribe(
      value => this.work = value,
      error => console.log(error),
      () => console.log("Observable closed")
    )
  }

  ngOnInit(): void {
  }

}
