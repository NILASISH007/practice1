import { Component } from '@angular/core';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.css'],
})
export class PaginationListComponent {
  fruitList: any[] = [];
  pageItem: any = [];

  pageSize: any = 5;
  currentPage: any = 0;
  totalPages: any;
  pageNumbers: number[]=[];
  constructor(private ListService: ListService) {}
  ngOnInit() {
    this.getlist();
     this.calculatePages();
  }

  getlist() {
    this.fruitList = this.ListService.myFruitList();

  }

  updatePages() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pageItem = this.fruitList.slice(startIndex, endIndex);
  }

  calculatePages() {
    this.totalPages = Math.ceil(this.fruitList.length / this.pageSize);
      this.pageNumbers = Array.from(
        { length: this.totalPages },
        (_, i) => i + 1
      );
    this.updatePages();
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;
    this.updatePages();
  }
  nextPage() {
    if (this.currentPage < this.totalPages) return;

    this.currentPage++;
    this.updatePages();
  }
  prevPage() {
    if (this.currentPage >1) return;

    this.currentPage --;
    this.updatePages();
  }
}
