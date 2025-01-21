import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { DepartmentService } from '../services/department.service';
import { Router } from '@angular/router';

@Component({ // Add the @Component decorator
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService, private router: Router) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  // Load all departments
  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(
      (data: Department[]) => {
        this.departments = data;
      },
      (error: any) => {
        console.error('Error fetching departments:', error);
      }
    );
  }

  // Add a new department
  addDepartment(): void {
    this.router.navigate(['/departments/add']);
  }

  // Edit a department
  editDepartment(id: number): void {
    this.router.navigate(['/departments/edit', id]);
  }

  // Delete a department
  deleteDepartment(id: number): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartment(id).subscribe(
        () => {
          this.loadDepartments(); // Reload the list after deletion
        },
        (error: any) => {
          console.error('Error deleting department:', error);
        }
      );
    }
  }
}