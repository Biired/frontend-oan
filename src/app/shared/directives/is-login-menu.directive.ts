import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appIsLoginMenu]'
})
export class IsLoginMenuDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  set appIsLoginMenu(param: boolean) {
    param = false;
    if (JSON.parse(localStorage.getItem("user"))) {
      param = true;
    }
    if (param) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();

    }
    console.warn(param);

  }

}
