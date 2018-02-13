import {
  AfterContentInit, Component, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <template #tmpl>
      Justin Noel: USA
    </template>

  `
})
export class AppComponent implements  AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit() {

    this.entry.createEmbeddedView(this.tmpl);
  }

}
