import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunCardV2Component } from './gun-card-v2.component';

describe('GunCardV2Component', () => {
  let component: GunCardV2Component;
  let fixture: ComponentFixture<GunCardV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GunCardV2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunCardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
