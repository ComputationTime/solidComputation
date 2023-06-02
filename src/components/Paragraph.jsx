import { createSignal } from "solid-js";
import typeWrite from "../scripts/typeWrite";
export default function Paragraph({ paragraph, delay = 0, speed = 1000 }) {
  const [curr_paragraph, set_paragraph] = createSignal("");
  setTimeout(() => {
    typeWrite(paragraph, set_paragraph, speed);
  }, delay);

  return (
    <div client:load>
      <p class="ml-10 inline">{curr_paragraph()}</p>
      <br />
    </div>
  );
}
