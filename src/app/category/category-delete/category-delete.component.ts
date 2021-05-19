import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  category: Category = {};
  id = -1;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get("id");
      this.id = id;
      this.getCategoryById(id);
    })
  }

  ngOnInit() {
  }

  private getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe(category => {
      this.category = category;
    })
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      alert("Đi lít sắc xét phu ly ")
    }, error => {
      alert("Phêuu")
    })
  }
}
