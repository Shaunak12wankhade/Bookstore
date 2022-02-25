import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbook'
})
export class SearchbookPipe implements PipeTransform {

  transform(value: any = [], filterString?: string) {
    console.log(filterString);
    
    // if (value.length === 0 || filteredString === ''){
    //   return value;
    // }

    if (filterString == '' || filterString == null) {
      return value;
    }

    // const allbooks = [];
    // for (const book of value) {
    //   if (book['bookName'] === filteredString){

    //     allbooks.push(book);
    //   }
    // }

    const allbooks = []
    for (const book of value) {
      if (book.bookName.includes(filterString) || book.description.includes(filterString)
        || book.author.includes(filterString)) {
        allbooks.push(book);
      }
    }
    return allbooks;

    // const booksArray = []
    // for (const Book of value) {
    //   if (Book.bookName.includes(filterString) || Book.description.includes(filterString)
    //     || Book.author.includes(filterString)) {
    //     booksArray.push(Book);
    //   }
    // }  
    // return booksArray;  

  }

}
