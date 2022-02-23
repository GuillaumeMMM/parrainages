import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveJsonComponent } from './save-json.component';

describe('SaveJsonComponent', () => {
  let component: SaveJsonComponent;
  let fixture: ComponentFixture<SaveJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
