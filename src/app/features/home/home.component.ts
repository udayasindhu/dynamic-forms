import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsGeneratorService } from '../../services/items-generator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  itemList: number[];
  expiryTime: number;
  selectedItem: any;

  constructor(
    private router: Router,
    private itemsService: ItemsGeneratorService
  ) { }

  ngOnInit(): void {
    this.itemList = this.itemsService.getItemList();
  }
  
  logout() {
    sessionStorage.removeItem('loggedinTime');
    sessionStorage.removeItem('expiryTime');
    sessionStorage.removeItem('isLoggedIn');    
    this.router.navigate(['login']);
  }

  emitSelectedItem(item) {
    this.selectedItem = item;
  }
}
