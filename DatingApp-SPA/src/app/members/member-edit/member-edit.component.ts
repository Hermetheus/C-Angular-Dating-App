import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../_models/user';
import { AlertifyService } from './../../_services/alertify.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService
  ) {}
  @ViewChild('editForm', { static: true }) editForm: NgForm;
  user: User;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.user = data.user;
    });
  }

  updateUser() {
    console.log(this.user);
    this.alertify.success('Profile Updated Successfully');
    this.editForm.reset(this.user);
  }
}
