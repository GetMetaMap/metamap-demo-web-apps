import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular-app';
  clientid = 'YOUR_CLIENT_ID';
  flowid = 'YOUR_FLOW_ID';

  ngOnInit() {
  }
}
