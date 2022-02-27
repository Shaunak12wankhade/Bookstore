import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookservice/book.service';

@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrls: ['./adminupdate.component.scss']
})
export class AdminupdateComponent implements OnInit {
  updateForm!: FormGroup;
  // submitted = false;
  bookId:any;

  bookName:any;
  author:any;
  description:any;
  quantity:any;
  price:any;
  discountPrice:any;



  constructor(private formbuilder: FormBuilder,private books:BookService, private route:Router,
    public dialogRef: MatDialogRef<AdminupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,   // this data is coming from display notes.ts as we are injecting here from display.ts
    ) {

      
     }

  ngOnInit(): void {
    console.log( "data is",this.data);

    this.updateForm = this.formbuilder.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      discountprice: ['', Validators.required],   
    })

    if (this.data?.bookobject != null) { // this data? is coming from admin.ts from open dialog of updatebook and bookobject is coming from admin.ts data:bookobject
      this.updateForm.patchValue({  //patch value works on key-value format and patch value will only update the matching objects and ignores the rest
        bookname: this.data?.bookobject['bookName'], // leftside is formcontrol name and right side['bookName'] is coming from *ngFor admin.component.html
        author: this.data?.bookobject['author'],
        description: this.data?.bookobject['description'],
        discountprice: this.data?.bookobject['discountPrice'],
        price: this.data?.bookobject['price'],
        quantity: this.data?.bookobject['quantity']
      })
    }

    // this right side bookName,author,discountPrice  is coming from admin.component.html file and left side is coming from (ngModel) from adminupdate.html declared above below exports
    // this.bookId=this.data._id
   
    
  }

  update(){
    // this.submitted = true;
    if(this.updateForm.valid){
      console.log(this.updateForm.value);
      let reqdata={

        // bookId:this.data._id,
        bookName: this.updateForm.value.bookname, // leftside bookName is exactly same as that of backend API and rightside bookname i.e.,bookname should be exact same as that of formcontrolname in admin-addandupdate.html file or same as written above in ngonit 
        author: this.updateForm.value.author,
        description: this.updateForm.value.description,
        quantity: this.updateForm.value.quantity,
        price: this.updateForm.value.price,
        discountPrice: this.updateForm.value.discountprice,

        // bookName:this.bookName,
        // author:this.author,
        // description:this.description,

        

      }
     
      this.books.adminupdatebook(this.data.bookobject._id,reqdata).subscribe((response:any) => {  //._id is used because we are updating the particular product by its id & .data.bookobject is coming from admin.ts from update() method from data: {bookobject}
        console.log(response);

        //  localStorage.setItem('token', response.result.accessToken)
          // this.route.navigateByUrl('dashboard/admin')
       
          window.location.reload();
      });
       

    // } else{

    // }
    }
  }

}
