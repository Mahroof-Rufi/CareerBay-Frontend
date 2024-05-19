import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AddPostModalService } from '../../services/add-post-modal.service';
import { Store } from '@ngrx/store';
import { Employer, EmployerPosts, Post } from '../../../../store/employer-store/employer.model';
import { getPosts } from '../../../../store/employer-store/employer.selector';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-company-posts-component',
  templateUrl: './company-posts-component.component.html',
  styleUrl: './company-posts-component.component.scss'
})
export class CompanyPostsComponentComponent implements OnInit{

  posts!:any;

  constructor(
    private addPostService:AddPostModalService,
    private employerStore:Store<{ employer:Employer }>
  ) {}

  ngOnInit(): void {
    this.employerStore.select(getPosts).subscribe( res => {
      this.posts = res;
      console.log(this.posts);
      
    })
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  trackByFn(id: string): string {
    return id; 
  }  

  generateDropdownToggle(): string {
    return 'dropdownDots_' + Math.random().toString(36).substr(2, 9);
  }

  addPost() {
    this.addPostService.openAddPostDialogue()
  }
}