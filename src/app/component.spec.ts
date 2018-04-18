import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './component';

import { MatButtonModule, MatDialogModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { AeoModule } from './aeo/module';
import { AppService } from './service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AeoModule, MatButtonModule, MatDialogModule, MatTooltipModule, MatIconModule],
      providers: [AppService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
