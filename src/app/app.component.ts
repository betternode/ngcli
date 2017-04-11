import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "A better web for the children";
  body = "Let us talk about what we can do to make the web better... together! ";
  quote = "cd /path/to/project && git pull origin master && /usr/bin/ng build --aot && git add . && git commit -m \"build automatically\" && git push origin master &&  rsync -av /path/to/project/ /path/to/html/repo/ && cd /path/to/html/repo/ && git add . && git commit -m \"add everything\" && git push -u origin --all";
}
