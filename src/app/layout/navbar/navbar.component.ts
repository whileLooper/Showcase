import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'navbar-cmp',
  templateUrl: './navbar.component.html',
  // providers: [ AngularFire, FirebaseListObservable ]
})

export class NavbarComponent {
  public items: FirebaseListObservable<any>;
  public data: any;

  constructor(public af: AngularFire) {
    this.items = af.database.list('/');
    this.items.subscribe(
      (res: any) => {
        console.log(res);
        this.data = res;
        console.log(this.data[0].$value);
      }
    );
    // console.log(af);
    // this.items.push({ name: 'newName' });
    // let queryList = af.database.list('/items', {
    //   query: {
    //     limitToLast: 10,
    //     orderByKey: true
    //   }
    // });
  }

  public setValue(input: string): void {
    this.items.update('item', {item: input});
  }
}
