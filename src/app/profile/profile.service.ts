import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile = new Profile('Maharshi', 94, 92.6, 86, 1.8, new Date(), new Date());
  profileChanged = new Subject<Profile>();
  constructor() {}

  getProfile() {
    return this.profile;
  }

  updateProfile(
    name: string,
    startWeight: number,
    currentWeight: number,
    targetWeight: number,
    height: number,
    startDate: Date,
    targetDate: Date
  ) {
    this.profile.name = name;
    this.profile.startWeight = startWeight;
    this.profile.currentWeight = currentWeight;
    this.profile.targetWeight = targetWeight;
    this.profile.height = height;
    this.profile.startDate = startDate;
    this.profile.targetDate = targetDate;
    this.profileChanged.next(this.profile);
  }
}
