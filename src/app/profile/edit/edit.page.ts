import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  onUpdateProfile(form: NgForm){
    if(!form.valid){
      console.log(form.valid);
      return;
    }
    this.profileService.updateProfile(
      form.value.name,
      form.value.startWeight,
      form.value.currentWeight,
      form.value.targetWeight,
      form.value.height,
      form.value.startDate,
      form.value.targetDate
    )
  }

}
