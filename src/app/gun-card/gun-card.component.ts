import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GUN_TYPE_STATS } from '../tables';

@Component({
  selector: 'app-gun-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gun-card.component.html',
  styleUrl: './gun-card.component.scss',
})
export class GunCardComponent {
  @Input() level!: number;
  @Input() type!: "Pistol" | "Submachine Gun" | "Shotgun" | "Combat Rifle" | "Sniper Rifle" | "Rocket Launcher";
  @Input() guild!: string;
  @Input() rarity!: string;

  accuracyRanges = ['2-7', '8-15', '16+'];

  get tier() {
    return this.level < 7 ? 0
    : this.level >= 7 && this.level < 13 ? 1 
    : this.level >= 13 && this.level < 19 ? 2
    : this.level >= 19 && this.level < 25 ? 3
    : 4
  }

  get accuracy() {
    return GUN_TYPE_STATS[this.type]["tier"][this.tier].accuracy;
  }
  
  get damage() {
    return GUN_TYPE_STATS[this.type]["tier"][this.tier].damage;
  }

  get range() {
    return GUN_TYPE_STATS[this.type]["tier"][this.tier].range;
  }
}
