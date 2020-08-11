import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsGeneratorService {

  private itemList: Array<any> = [
    {
      itemId: 1,
      itemLabel: "Item 1"
    },
    {
      itemId: 2,
      itemLabel: "Item 2"
    },
    {
      itemId: 3,
      itemLabel: "Item 3"
    },
    {
      itemId: 4,
      itemLabel: "Item 4"
    },
    {
      itemId: 5,
      itemLabel: "Item 5"
    },
    {
      itemId: 6,
      itemLabel: "Item 6"
    }
  ];

  constructor() { }

  /**
   * This will returns a List of items which needs to be displayed.
   * @returns List<Items> 
   */
  getItemList() {
    return this.itemList;
  }
}
