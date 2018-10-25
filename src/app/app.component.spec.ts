import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let fixture: any;
  let app: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    //set your inputs of component to avoid error while testing
    app.data = 'something';
    fixture.detectChanges();
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'testingApp'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testingApp');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testingApp!');
  }));
  it('should say hello',()=>{
    app.sayHello();
    expect(app.title).toBe('Hello');
  })
  it('should set input of comp',()=>{
    expect(app.data).toBe('something'); 
  })
});
