import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'spa-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: string[];

  constructor(translate: TranslateService) {
    
    translate.get('education').subscribe(
      value=>this.education = value,
      error=>console.log(error),
      ()=>console.log('Observable closed')
    );
  }

  ngOnInit(): void {
    
  }

}
