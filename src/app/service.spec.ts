import { AppService } from './service';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { AppModule } from './module';
import { State } from './state';


describe('AppService', () => {
  let service: AppService;
  //let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();

    const httpClient = TestBed.get(HttpClient);
    //httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = new AppService(httpClient);
  });


  it('themes should be array with at least 2 values', () => {
    expect(service.themes.length).toBeGreaterThanOrEqual(2);
  });


  it('current theme should be defined', () => {
    let sub = service.currentTheme.subscribe(value => {
      expect(value).toBeDefined()
    })
    sub.unsubscribe();
  });


  it('current theme should change', () => {

    service.changeTheme('cobra-kai-theme');

    console.log(service.getStates());

    let sub = service.currentTheme.subscribe(value => {
      expect(value).toBe('cobra-kai-theme');
    })
    sub.unsubscribe();
  });


});
