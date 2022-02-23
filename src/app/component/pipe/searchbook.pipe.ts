import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbook'
})
export class SearchbookPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === ''){
      return value;
    }

    const allbooks = [];
    for (const book of value) {
      if (book['bookName'] === filteredString){
        allbooks.push(book);
      }

    }
    return allbooks;
  }

}
