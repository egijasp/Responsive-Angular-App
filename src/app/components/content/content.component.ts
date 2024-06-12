import { Component, signal } from '@angular/core';
import { ParagraphComponent } from '../paragraph/paragraph.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ParagraphComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  readonly paragraphs = signal([
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus adipisci quibusdam ipsam perferendis eaque placeat sit, et expedita asperiores architecto esse rerum doloribus deserunt odit accusantium est reprehenderit saepe consectetur ullam inventore facilis. Repudiandae blanditiis, asperiores molestias ab nihil est accusantium eaque quibusdam perspiciatis architecto unde debitis quae.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, quibusdam doloribus. Esse aliquam iste praesentium aliquid accusantium nobis, dolore dolorem hic rerum dicta labore id eaque natus veritatis et excepturi laudantium nisi earum sequi architecto, a velit. Consectetur omnis quae sed! Esse architecto repudiandae rem assumenda consequatur? Possimus, maiores corporis.',
  ]);

  readonly sentences = signal([]);

  buttonClick(index: number): void {
    this.paragraphs.update((paragraphs) => {
      paragraphs[index] +=
        ' ' + 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
      return paragraphs;
    });
  }
}
