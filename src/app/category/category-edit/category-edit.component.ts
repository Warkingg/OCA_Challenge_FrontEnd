import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    quizQuestions: new FormControl()
  });
  id: number = -1;

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

  getCategoryById(id: number) {
    this.categoryService.getCategoryById(id).subscribe(category => {
      this.categoryForm = new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name),
        quizQuestions: new FormControl(category.quizQuestions)
      })
    })
  }

  updateCategory(id: number){
    let thisCategory = this.categoryForm.value;
    this.categoryService.updateCategory(thisCategory, id).subscribe(() => {
      alert("ắp đết sắc xét phu ny")
    }, error => {
      alert("phêuu")
    })
  }

}
