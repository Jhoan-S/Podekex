import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyAlphaNumeric]'
})
export class OnlyAlphaNumericDirective {

  private _el: HTMLInputElement;

  constructor(private elemetRef: ElementRef) {
    this._el = this.elemetRef.nativeElement;
  }

  @HostListener('keydown', ['$event']) onkeydown(event: KeyboardEvent) {
    if (/[\u00C0-\u024F]/.test(event.key)) return true;

    if(/[^\w\s-]/.test(event.key)) {
      event?.preventDefault();

      return false;
    }

    return true;
  }
}