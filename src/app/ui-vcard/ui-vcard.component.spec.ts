import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiVcardComponent } from './ui-vcard.component';

describe('UiVcardComponent', () => {
  let component: UiVcardComponent;
  let fixture: ComponentFixture<UiVcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiVcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiVcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
