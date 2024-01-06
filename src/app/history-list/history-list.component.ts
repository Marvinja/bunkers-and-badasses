import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GunCard } from '../types';
import { HistoryListItemComponent } from '../history-list-item/history-list-item.component';

@Component({
  selector: 'bnb-history-list',
  standalone: true,
  imports: [CommonModule, HistoryListItemComponent],
  templateUrl: './history-list.component.html',
  styleUrl: './history-list.component.scss'
})
export class HistoryListComponent {
  @Input() data!: GunCard[];

  @Output() loadGun: EventEmitter<GunCard> = new EventEmitter<GunCard>();

  removeItemFromHistory(item: string) {
    this.data.splice(parseInt(item), 1);
  }

  handleLoadGun(item: string) {
    console.log(item);
    this.loadGun.emit(this.data[parseInt(item)]);
  }

  convertElement(element: string) {
    switch(element) {
      case "Shock + Corrosive":
        return "Voltcidic";
      case "Radiation + Incendiary":
        return "Inferadiation";
      case "Explosive + Cryo":
        return "Icesplosion";
      case "N/A":
        return '';
      default:
        return element;
    }
  }
}
