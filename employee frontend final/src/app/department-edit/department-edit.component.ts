import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { DepartmentService } from '../services/department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {
  id!: number;
  department: Department = new Department();

  constructor(
    private departmentService: DepartmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadDepartment();
  }

  loadDepartment(): void {
    this.departmentService.getDepartmentById(this.id).subscribe(
      (data: Department) => {
        this.department = data;
      },
      (error: any) => {
        console.error('Error fetching department:', error);
      }
    );
  }

  updateDepartment(): void {
    this.departmentService.updateDepartment(this.id, this.department).subscribe(
      () => {
        this.navigateToDepartmentList();
      },
      (error: any) => {
        console.error('Error updating department:', error);
      }
    );
  }

  // Public method to handle navigation
  navigateToDepartmentList(): void {
    this.router.navigate(['/departments']);
  }
}