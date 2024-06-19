import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiArrowModule,
  TuiAvatarModule,
  TuiBadgedContentModule,
  TuiCheckboxLabeledModule,
  TuiDataListDropdownManagerModule,
  TuiDataListWrapperModule, 
  TuiInputDateModule, 
  TuiInputDateTimeModule, 
  TuiInputFilesModule, 
  TuiInputModule, 
  TuiInputPasswordModule, 
  TuiInputPhoneInternationalModule, 
  TuiInputPhoneModule, 
  TuiSelectModule, 
  TuiTextareaModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAlertModule, TuiDataListModule, TuiHintModule, TuiHostedDropdownModule, TuiTextfieldControllerModule, TuiTooltipModule } from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarOptionsComponent } from './components/nav-bar-options/nav-bar-options.component';
import { JobPostComponent } from './components/job-post/job.component';
import { SearchComponent } from './components/search/search.component';
import { UserProfileCommonViewComponent } from './components/user-profile-common-view/user-profile-common-view.component';
import { UserProfileAboutViewComponent } from './components/user-profile-about-view/user-profile-about-view.component';
import { UserExperienceColViewComponent } from './components/user-experience-col-view/user-experience-col-view.component';
import { UserExperienceSectionViewComponent } from './components/user-experience-section-view/user-experience-section-view.component';
import { UserEducationColViewComponent } from './components/user-education-col-view/user-education-col-view.component';
import { UserEducationSectionViewComponent } from './components/user-education-section-view/user-education-section-view.component';
import { UserSkillsSectionViewComponent } from './components/user-skills-section-view/user-skills-section-view.component';
import { CompanyProfileCommonViewComponent } from './components/company-profile-common-view/company-profile-common-view.component';
import { JobsApiServiceService } from './services/jobs-api-service.service';
import { PostsApiServiceService } from './services/posts-api-service.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FilterComponent } from './components/filter/filter.component';
import { PeopleComponent } from './components/people/people.component';
import { CompanyComponent } from './components/company/company.component';
import { RouterModule } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';

@NgModule({
  declarations: [
    LogoComponent,
    FooterComponent,
    NavBarOptionsComponent,
    JobPostComponent,
    SearchComponent,
    UserProfileCommonViewComponent,
    UserProfileAboutViewComponent,
    UserExperienceColViewComponent,
    UserExperienceSectionViewComponent,
    UserEducationColViewComponent,
    UserEducationSectionViewComponent,
    UserSkillsSectionViewComponent,
    CompanyProfileCommonViewComponent,
    PaginationComponent,
    FilterComponent,
    PeopleComponent,
    CompanyComponent,
    InboxComponent,
  ],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiInputDateModule,
    HttpClientModule,
    TuiAlertModule,
    TuiInputFilesModule,
    TuiTooltipModule,
    TuiHintModule,
    TuiInputPhoneModule,
    TuiInputPhoneInternationalModule,
    TuiTextareaModule,
    TuiCheckboxLabeledModule,
    TuiTextfieldControllerModule,
    TuiArrowModule,
    TuiBadgedContentModule,
    TuiAvatarModule,
    TuiDataListDropdownManagerModule,
    TuiDataListWrapperModule,
    TuiHostedDropdownModule,
    RouterModule,
    TuiInputDateTimeModule
  ],
  exports: [
    TuiInputModule,
    TuiTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiInputDateModule,
    HttpClientModule,
    TuiAlertModule,
    TuiInputFilesModule,
    TuiTooltipModule,
    TuiHintModule,
    LogoComponent,
    FooterComponent,
    NavBarOptionsComponent,
    TuiInputPhoneModule,
    TuiInputPhoneInternationalModule,
    TuiTextareaModule,
    TuiCheckboxLabeledModule,
    TuiTextfieldControllerModule,
    TuiArrowModule,
    NavBarOptionsComponent,
    JobPostComponent,
    SearchComponent,
    TuiDataListDropdownManagerModule,
    TuiDataListWrapperModule ,
    TuiHostedDropdownModule,
    PaginationComponent,
    FilterComponent,
    PeopleComponent,
    CompanyComponent,
    InboxComponent,
    TuiInputDateTimeModule
  ],
  providers: [
    JobsApiServiceService,
    PostsApiServiceService
  ]
})
export class SharedModule { }
