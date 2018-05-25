import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppModule } from './module';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
