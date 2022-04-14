import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[heightControl]',
})
export class HeightControlDirective {
  private _element!: HTMLElement;

  @Input() max: string = '0';
  @Input() min: string = '0';
  @Input() bgColorHex!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this._element = this.elementRef.nativeElement;

    this.max !== '0'
      ? (this._element.style.height = `${Number(this.max) * 2}px`)
      : (this._element.style.height = `${Number(this.min) * 2}px`);

    if (!this.bgColorHex) {
      return;
    }

    this.bgColorHex.indexOf('#') !== -1
      ? (this._element.style.backgroundColor = this.bgColorHex)
      : `#${this.bgColorHex}`;
  }
}
