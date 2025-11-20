import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttonlist } from './buttonlist';

describe('Buttonlist', () => {
  let component: Buttonlist;
  let fixture: ComponentFixture<Buttonlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttonlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttonlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
