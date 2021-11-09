import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  public title='Are you sure';
  public Message='do you really want to remove';
  public Cancel='cancel';
  public Confirm='confirm';

  constructor( public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
  }

}
