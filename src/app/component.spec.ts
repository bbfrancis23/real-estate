import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './component';

import { MatButtonModule, MatDialogModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { AeoModule } from './aeo/module';
import { AppService } from './service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsDialog } from './settings-dialog/settings-dialog';
import { AppModule } from './module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
