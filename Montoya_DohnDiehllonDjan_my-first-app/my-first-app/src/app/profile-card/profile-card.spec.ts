import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileCard } from './profile-card';

describe('ProfileCard', () => {
  let fixture: ComponentFixture<ProfileCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProfileCard] }).compileComponents();
    fixture = TestBed.createComponent(ProfileCard);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render tags passed in', async () => {
    fixture.componentRef.setInput('tags', ['Angular', 'CSS']);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.tag').length).toBe(2);
  });
});
