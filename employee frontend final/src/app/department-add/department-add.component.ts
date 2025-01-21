import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { DepartmentService } from '../services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  department: Department = new Department();

  constructor(private departmentService: DepartmentService, private router: Router) {}

  ngOnInit(): void {}

  saveDepartment(): void {
    console.log('Saving department:', this.department); // Log the department object
    this.departmentService.createDepartment(this.department).subscribe(
      (data: Department) => {
        console.log('Department saved successfully:', data); // Log success
        this.navigateToDepartmentList();
      },
      (error: any) => {
        console.error('Error saving department:', error); // Log error
      }
    );
  }
  // Public method to handle navigation
  navigateToDepartmentList(): void {
    this.router.navigate(['/departments']);
  }
}