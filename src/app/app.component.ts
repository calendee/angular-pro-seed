import { Component, TemplateRef, ComponentRef, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </template>
    </div>
  `
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Justin Noel',
      location: 'Tx, USA'
    });
  }

}
