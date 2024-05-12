import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiArrowModule,
  TuiAvatarModule,
  TuiBadgedContentModule,
  TuiCheckboxLabeledModule,
  TuiDataListWrapperModule, 
  TuiInputDateModule, 
  TuiInputFilesModule, 
  TuiInputModule, 
  TuiInputPasswordModule, 
  TuiInputPhoneInternationalModule, 
  TuiInputPhoneModule, 
  TuiSelectModule, 
  TuiTextareaModule,
} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiAlertModule, TuiDataListModule, TuiHintModule, TuiTextfieldControllerModule, TuiTooltipModule } from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarOptionsComponent } from './components/nav-bar-options/nav-bar-options.component';
import { JobPostComponent } from './components/job-post/job.component';

@NgModule({
  declarations: [
    LogoComponent,
    FooterComponent,
    NavBarOptionsComponent,
    JobPostComponent
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
    JobPostComponent
  ]
})
export class SharedModule { }