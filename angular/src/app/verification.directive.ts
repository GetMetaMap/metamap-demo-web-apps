import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVerification]'
})
export class VerificationDirective {

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.elRef.nativeElement.addEventListener('metamap:loaded', this.onLoaded);
    this.elRef.nativeElement.addEventListener('metamap:userStartedSdk', this.onStarted);
    this.elRef.nativeElement.addEventListener('metamap:userFinishedSdk', this.onFinished);
    this.elRef.nativeElement.addEventListener('metamap:exitedSdk', this.onExited);
  }

  ngOnDestroy() {
    this.elRef.nativeElement.removeEventListener('metamap:loaded', this.onLoaded);
    this.elRef.nativeElement.removeEventListener('metamap:userStartedSdk', this.onStarted);
    this.elRef.nativeElement.removeEventListener('metamap:userFinishedSdk', this.onFinished);
    this.elRef.nativeElement.removeEventListener('metamap:exitedSdk', this.onExited);
  }

  onLoaded({ detail }: any) {
    console.log('[METAMAP] Loaded', detail);
  }

  onStarted({ detail }: any) {
    console.log('[METAMAP] User started verification', detail);
  }

  onFinished({ detail }: any) {
    console.log('[METAMAP] User finished verification', detail);
  }

  onExited({ detail }: any) {
    console.log('[METAMAP] User exited verification', detail);
  }

}
