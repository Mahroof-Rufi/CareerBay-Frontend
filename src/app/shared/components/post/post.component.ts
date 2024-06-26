import { Component, Input, OnInit } from '@angular/core';
import { Post, User, userStateModel } from '../../../features/user/user-store/user.model';
import { Store } from '@ngrx/store';
import { triggerPostLike, triggerPostSave } from '../../../features/user/user-store/user.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsApiServiceService } from '../../services/posts-api-service.service';
import { TuiAlertService } from '@taiga-ui/core';
import { getUserData, getUserId } from '../../../features/user/user-store/user.selector';
import { Observable } from 'rxjs';
import { tuiIconMoreVertical } from '@taiga-ui/icons';
import { AddPostModalService } from '../../../features/company/services/add-post-modal.service';
import { EmployerState } from '../../../features/company/store/employer.model';
import { deletePostSuccess } from '../../../features/company/store/employer.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  @Input() post!:Post;
  @Input() isEmployer:boolean = false;

  readonly tuiIconMoreVertical = tuiIconMoreVertical;
  
  commentsModal:boolean = false
  deleteConfirmModal:boolean = false
  isLoading:boolean = false
  commentForm!: FormGroup;
  comments!:any[]

  post_Id!:string;
  deletePost_Id!:string;
  employer_Id!:string;
  user_Id!:string;
  userData$:Observable<User> = this._userStore.select(getUserData) 

  index = 2;

  constructor(
    private readonly _userStore:Store<{ user:userStateModel }>,
    private readonly _employerState:Store<{ employer:EmployerState }>,
    private readonly _formBuilder:FormBuilder,
    private readonly _alert:TuiAlertService,
    private readonly _postsAPIs:PostsApiServiceService,
    private readonly _addPostModal:AddPostModalService,
  ) {}

  ngOnInit(): void {
    this._userStore.select(getUserId).subscribe((data) => this.user_Id = data)
    this.commentForm = this._formBuilder.group({
      newComment: ['', Validators.required]
    });
  }

  likeTrigger(employerId:string,post_id:any) {  
    if (!this.isEmployer) {
      this._userStore.dispatch(triggerPostLike({ employer_id:employerId, post_id:post_id }))
    }
  }

  triggerSavePost(post:Post) {
    if (!this.isEmployer) {
      this._userStore.dispatch(triggerPostSave({ employer_id:post.employer_id, post_id:post._id }))
    }
  }

  editPost(post_id:string) {
    this._addPostModal.openEditPostDialogue(post_id)
  }

  deletePost(post_id:string) {
    this.deletePost_Id = post_id
    this.deleteConfirmModal = true
  }

  closeDialog() {
    this.deleteConfirmModal = false
  }

  confirmDeletePost() {
    this._postsAPIs.deletePost(this.deletePost_Id).subscribe({
      next: (response:any) => {
        this.deleteConfirmModal = false
        this._employerState.dispatch(deletePostSuccess({ post_id:response.post_id }))
      },
      error: err => {
        this._alert.open('', {
          label: err.error.message,
          status: 'error',
          autoClose: true,
          hasCloseButton: true
        }).subscribe()
      },
    })
  }

  showComments(comments:any, employer_id:string, post_Id:string) {    
    this.commentsModal = !this.commentsModal
    if (this.commentsModal) {
      this.comments = comments
      this.post_Id = post_Id
      this.employer_Id = employer_id
    }
  }

  addComment() {
    if (this.commentForm.valid) {
      this.isLoading = true
      const comment = this.commentForm.get('newComment')?.value;
      this._postsAPIs.addComment(comment,this.employer_Id,this.post_Id).subscribe({
        next: (res:any) => {
          this.isLoading = false
          this.commentForm.get('newComment')?.patchValue('')
          this.comments = [...this.comments,res.newComment]
        },
        error: err => {
          this.isLoading = false
          this._alert.open('', {
            label: err.error.message,
            status: 'error',
            autoClose: true,
            hasCloseButton: true
          }).subscribe() 
        }
      })
    }
  }

}
