import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamic-forms';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('assets/config.json').subscribe((data: any) => {
      sessionStorage.setItem('config', JSON.stringify(data));
    });
  }
}
