import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/bookservice/book.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-addandupdate',
  templateUrl: './admin-addandupdate.component.html',
  styleUrls: ['./admin-addandupdate.component.scss']
})
export class AdminAddandupdateComponent implements OnInit {
  addandupdateForm!: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder,private books:BookService, private route:Router,
      public dialogRef: MatDialogRef<AdminAddandupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,   // this data is coming from display notes.ts as we are injecting here from display.ts
    ) { }

  ngOnInit(): void {
    this.addandupdateForm = this.formbuilder.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      discountprice: ['', Validators.required],
      
     
    })

  }
  addandupdate(){
    this.submitted = true;
    if(this.addandupdateForm.valid){
      console.log(this.addandupdateForm.value);
      let reqdata={
        bookName: this.addandupdateForm.value.bookname, // leftside bookName is exactly same as that of backend API and rightside bookname i.e.,bookname should be exact same as that of formcontrolname in admin-addandupdate.html file or same as written above in ngonit 
        author: this.addandupdateForm.value.author,
        description: this.addandupdateForm.value.description,
        quantity: this.addandupdateForm.value.quantity,
        price: this.addandupdateForm.value.price,
        discountPrice: this.addandupdateForm.value.discountprice,

      }
      // if(this.data.isAddBook){ 

      this.books.adminaddbook(reqdata).subscribe((response:any) => {
        console.log(response);

        //  localStorage.setItem('token', response.result.accessToken)
          // this.route.navigateByUrl('dashboard/admin')
       
        
      });
       //window.location.reload();

    // } else{

    // }
    }
  }
  
}
