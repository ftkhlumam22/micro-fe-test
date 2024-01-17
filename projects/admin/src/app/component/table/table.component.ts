import { HttpClientModule, HttpHandler } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../toast/toast.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Post } from '../../models/posts.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ToastComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  createForm: FormGroup;
  showCreateForm = false;
  posts: Post[] = [];
  isLoading = true;
  isUpdateMode = false;
  updatingPostId: number = 0;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.GetAll();
  }

  ngAfterViewInit(): void {
    if (this.toastComponent) {
      console.log('Toast OK');
    }
  }

  startUpdate(postId: number) {
    this.dataService.getDataById(postId).subscribe(
      (post) => {
        this.createForm.setValue({
          title: post.title,
          body: post.body,
          userId: post.userId,
        });
        this.updatingPostId = postId;
        this.showCreateForm = true;
        this.isUpdateMode = true;
      },
      (error) => {
        // Handle error
      }
    );
  }

  GetAll() {
    this.isLoading = true;
    this.dataService.getAllData().subscribe(
      (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching data: ', error);
        this.isLoading = false;
      }
    );
  }

  resetForm() {
    this.createForm.reset();
    this.showCreateForm = false;
    this.isUpdateMode = false;
    this.updatingPostId = 0;
  }

  onSubmit() {
    if (this.createForm.valid) {
      if (this.isUpdateMode) {
        // Logika untuk update
        this.dataService
          .updateData(this.updatingPostId, this.createForm.value)
          .subscribe(
            (response) => {
              this.toastComponent.showToast('Data updated successfully');
              this.resetForm();
              this.showCreateForm = false;
              this.GetAll();
            },
            (error) => {
              this.toastComponent.showToast('Failed to update data');
            }
          );
      } else {
        this.dataService.createData(this.createForm.value).subscribe(
          (response) => {
            this.toastComponent.showToast('Data created successfully');
            this.resetForm();
            this.showCreateForm = false;
            this.GetAll();
          },
          (error) => {
            console.error('Error creating data:', error);
            this.toastComponent.showToast('Failed to create data');
          }
        );
      }
    } else {
      // Jika form tidak valid, tampilkan pesan validasi untuk setiap field
      Object.keys(this.createForm.controls).forEach((field) => {
        const control = this.createForm.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
      this.toastComponent.showToast('Please fill all required fields');
    }
  }

  updatePost(post: any) {
    this.dataService.updateData(post.id, post).subscribe(
      (response) => {
        console.log('Post updated:', response);
      },
      (error) => console.error('Error updating post:', error)
    );
  }

  deletePost(postId: number) {
    this.dataService.deleteData(postId).subscribe(
      (response) => {
        console.log('Post deleted:', response);
        this.toastComponent?.showToast('Delete Success!!');
      },
      (error) => {
        console.error('Error deleting post:', error);
        this.toastComponent?.showToast('Delete Failed!!');
      }
    );
  }
}
