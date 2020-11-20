import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class I18nModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['pt', 'en']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/pt|ru/) ? browserLang : 'pt');
  }
}

export function translateLoaderFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient);
}
