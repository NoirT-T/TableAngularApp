import {Component, Input} from '@angular/core';
import Materialize from 'materialize-css';
import $ from 'jquery';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  propUsers = []
  @Input() users = this.propUsers

  isSearched: boolean = false
  isClickedid: boolean = false;
  isClickedfirstName: boolean = false;
  isClickedlastName: boolean = false;
  isClickedemail: boolean = false;
  isClickedphone: boolean = false;

  compareValues(key: string, order: string = 'asc') {
    return function (a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // свойства нет ни в одном из объектов
        return 0;
      }

      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

      let comparison:number = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  onClickTr(data){
    // noinspection TypeScriptUnresolvedVariable
    Materialize.toast('Bыбран пользователь: '+data.firstName+' '+data.lastName +'<br>'+
    'Описание: '+data.description+'<br>'+
   ' Адрес проживания: '+data.address.streetAddress+'<br>'+
   ' Город: '+data.address.city +'<br>' +
   ' Провинция/штат: ' +data.address.state +'<br>' +
   'Индекс: ' +data.address.zip, 4000);
  }

  onClick(index) {
    switch (index) {
      case 1:
        if (this.isClickedid === false) {
          this.users.sort(this.compareValues('id'))
          this.isClickedid = true
          return
        }
        else {
          this.users.sort(this.compareValues('id', 'desc'))
          this.isClickedid = false
          return
        }
      case 2:
        if (this.isClickedfirstName === false) {
          this.users.sort(this.compareValues('firstName'))
          this.isClickedfirstName = true
          return
        }
        else {
          this.users.sort(this.compareValues('firstName', 'desc'))
          this.isClickedfirstName = false
          return
        }
      case 3:
        if (this.isClickedlastName === false) {
          this.users.sort(this.compareValues('lastName'))
          this.isClickedlastName = true
          return
        }
        else {
          this.users.sort(this.compareValues('lastName', 'desc'))
          this.isClickedlastName = false
          return
        }
      case 4:
        if (this.isClickedemail === false) {
          this.users.sort(this.compareValues('email'))
          this.isClickedemail = true
          return
        }
        else {
          this.users.sort(this.compareValues('email', 'desc'))
          this.isClickedemail = false
          return
        }
      case 5:
        if (this.isClickedphone === false) {
          this.users.sort(this.compareValues('phone'))
          this.isClickedphone = true
          return
        }
        else {
          this.users.sort(this.compareValues('phone', 'desc'))
          this.isClickedphone = false
          return
        }
      default:
        break;
    }
  }

  onChange() {
    if (this.isSearched === false) {
      this.propUsers = this.users;
      this.isSearched = true
    }
    // noinspection TypeScriptUnresolvedVariable
    // noinspection TypeScriptUnresolvedVariable
    let value: HTMLElement = $("#first_name2").attr("value")
    this.users = this.propUsers.filter(user => {
      return (
           user.firstName.toLowerCase().includes(value)
        || user.lastName.toLowerCase().includes(value)
        || user.email.toLowerCase().includes(value)
        || user.phone.toLowerCase().includes(value))
    })
  }
}
