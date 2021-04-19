import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor() { }

  ngOnInit() {
  }

  // doReorder( event: any ) {
  //   console.log(event);

  //   const itemMover = this.personajes.splice( event.detail.from, 1 )[0];
    
  //   this.personajes.splice( event.detail.to, 0, itemMover );

  //   event.detail.complete();

  //   console.log(this.personajes);
  // }

  // doReorder(event: CustomEvent<ItemReorderEventDetail>) {
  doReorder(event: any) {

    console.log('Arreglo original',this.personajes);

    this.personajes = event.detail.complete( this.personajes );

    console.log('Arreglo modificado', this.personajes )

  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}
