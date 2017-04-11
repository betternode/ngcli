import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Do you know where your children are?';
  body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue tellus at ex tempor sodales. Nulla nec eros ante. Fusce bibendum fermentum mauris, vitae congue erat rutrum in. Pellentesque consectetur, erat ac pellentesque facilisis, sem est rutrum purus, vel efficitur felis leo at libero. Nulla vulputate enim quis ultricies vulputate. Sed consequat nulla lorem. Maecenas tincidunt malesuada enim, a rutrum elit ornare sit amet. Etiam odio orci, pharetra quis facilisis eu, pretium et mauris. Maecenas rutrum, dolor mollis ullamcorper varius, nisi tortor luctus tortor, ornare molestie tellus ante eu metus. Proin consequat nisi at lorem varius, sit amet congue arcu gravida. Donec vulputate sagittis venenatis.';
  quote = 'cd /path/to/project && git pull origin master && /usr/bin/ng build --aot && git add . && git commit -m "build automatically" && git push origin master &&  rsync -av /path/to/project/ /path/to/html/repo/ && cd /path/to/html/repo/ && git add . && git commit -m "add everything" && git push -u origin --all';
}
