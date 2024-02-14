import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompletedTaskDirective]'
})
export class CompletedTaskDirective implements OnInit {
  @Input() status: string = 'default';
  @HostBinding("style.backgroundColor") backgroundColor: string = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {   
    console.log(this.status);
    this.getColor();
  }

  // @HostListener("mouseenter") onMouseEnter(eventData: Event) {
  //   this.getColor();
  // }

  @HostListener("click") onMouseClick(eventData: Event) {
    this.getColor();
  }

  // @HostListener("mouseleave") mouseleave(eventData: Event) {
  //   this.getColor();
  // }

  getColor(){
    if(this.status.toUpperCase() == 'DONE')
      this.backgroundColor = 'green';
    else
      this.backgroundColor = 'yellow';    
  }


}
