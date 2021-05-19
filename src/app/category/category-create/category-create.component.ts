import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category: Category = {};

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  addCategory(form: NgForm) {
    let newCategory = form.value;
    this.categoryService.createCategory(newCategory).subscribe(() => {
      alert("Create Successfully !!!");
      this.category = {}
    }, error => {
      alert("Failed")
    })
  }

}
