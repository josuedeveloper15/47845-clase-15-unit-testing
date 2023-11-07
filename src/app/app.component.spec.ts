import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AppMockService } from './app-mock.service';
import { MockProvider } from 'ng-mocks';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        // {
        //   provide: AppService,
        //   useClass: AppMockService,
        // },
        MockProvider(AppService, {
          saludar: () => console.log('SALUDANDO MOCK'),
        }),
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // no sea ni null, ni undefined
    expect(app).toBeTruthy();
  });
});
