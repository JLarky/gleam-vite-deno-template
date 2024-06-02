import { setup_counter } from "./counter.gleam";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
    </a>
    <a href="https://gleam.run" target="_blank">
    </a>
    <h1>Vite + Gleam</h1>
    <div class="card">
      <button id="counter" type="button">Count is <span id="count">0</span></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and Gleam logos to learn more
    </p>
  </div>
`;

setup_counter(
  document.querySelector<HTMLButtonElement>("#counter")!,
  document.querySelector<HTMLSpanElement>("#count")!,
);
