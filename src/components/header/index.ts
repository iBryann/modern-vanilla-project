import { html, render } from 'lit';

const headTag = document.head;
const template = html`
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Modern Vanilla Project</title>
`;

render(template, headTag);