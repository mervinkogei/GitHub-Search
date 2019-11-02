import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubNotFoundComponent } from './github-not-found.component';

describe('GithubNotFoundComponent', () => {
  let component: GithubNotFoundComponent;
  let fixture: ComponentFixture<GithubNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
