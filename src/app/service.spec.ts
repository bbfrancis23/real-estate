import { AppService } from './service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('AppService', () => {
  let service: AppService;
  beforeEach(() => { service = new AppService() });

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

    let sub = service.currentTheme.subscribe(value => {
      expect(value).toBe('cobra-kai-theme');
    })
    sub.unsubscribe();
  });
});
