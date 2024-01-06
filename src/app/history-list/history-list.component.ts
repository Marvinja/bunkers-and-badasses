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
    this.loadGun.emit(this.data[parseInt(item)]);
  }

  convertElement(element: string) {
    switch(element) {
      case "Incendiary (+1d6)": 
        return "Incendiary";
      case "Incendiary (+2d6)": 
        return "Incendiary";
      case "Shock (+1d6)": 
        return "Shock";
      case "Shock (+2d6)": 
        return "Shock";
      case "Corrosive (+1d6)": 
        return "Corrosive";
      case "Corrosive (+2d6)": 
        return "Corrosive";
      case "Cryo (+1d6)": 
        return "Cryo";
      case "Cryo (+2d6)": 
        return "Cryo";
      case "Radiation (+1d6)": 
        return "Radiation";
      case "Radiation (+2d6)": 
        return "Radiation";
      case "Explosive (+1d6)": 
        return "Explosive";
      case "Explosive (+2d6)": 
        return "Explosive";
      case "Shock + Corrosive":
        return "Voltcidic";
      case "Radiation + Incendiary":
        return "Schoradiation";
      case "Explosive + Cryo":
        return "Icesplosion";
      case "N/A":
        return '';
      default:
        return element;
    }
  }
}
