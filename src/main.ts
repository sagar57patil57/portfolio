import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/markdown/markdown';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/addon/fold/foldgutter';
// import 'codemirror/addon/fold/brace-fold';
// import 'codemirror/lib/codemirror';
// import 'codemirror/addon/edit/closebrackets';
// import 'codemirror/addon/edit/matchbrackets';
// import 'codemirror/addon/lint/lint';
// import 'codemirror/addon/lint/json-lint';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
