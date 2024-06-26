import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features-list.component.html',
  styleUrl: './features-list.component.scss'
})
export class FeaturesComponent {

  sampleApplicationData: any[] = [
    { title: 'Apply', status: 'pass' },
    { title: 'Review', status: 'pending' },
    { title: 'Interview', status: 'pending' },
    { title: 'Hire', status: 'pending' }
  ]

  sampleJobData: any[] = [
    {
      company_id: {
        profile_url:'../../../assets/company-dp-1.jpg', 
        companyName: 'Eside Paris',
      },
      jobTitle: 'Business Development Executive',
      minimumPay: 300000, 
      maximumPay:600000, 
      payType: 'year', 
      city: 'Banglore',
      state: 'Karnataka',
      jobType: 'Full Time', 
      postedAt: Date.now(),
    },
    
  ]

  sampleUsersData: any[] = [
    { profile_url: '../../../assets/profile-3.jpg', fullName: 'Don Thomas', jobTitle: 'Full Stack Development' },
    { profile_url: '../../../assets/profile-5.jpg', fullName: 'Justin George', jobTitle: 'Content Writer' },
    { profile_url: '../../../assets/profile-3.jpg', fullName: 'Edwin Emanual', jobTitle: 'UI UX Designer' }
  ]


}
