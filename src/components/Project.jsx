import { createSignal } from "solid-js";
import typeWrite from "../scripts/typeWrite";

export default function Project({ url, title, tags, speed, delay }) {
  const [curr_title, set_title] = createSignal("");
  const [curr_tags, set_tags] = createSignal("");
  setTimeout(() => {
    typeWrite(title, set_title, speed);
  }, delay);

  setTimeout(() => {
    typeWrite(tags, set_tags, speed);
  }, delay + 500);

  return (
    <li class="flex justify-center my-4 font-mono h-[200px]">
      <div class="w-[280px] sm:w-[580px] md:w-[700px] lg:w-[800px] border-b-2 border-gray">
        <a class="h-[100%]" href={url}>
          <div class="h-[100%] sm:p-6">
            <h2 class="">{curr_title()}</h2>
            <p class="font-thin mt-4">{curr_tags()}</p>
          </div>
        </a>
      </div>
    </li>
  );
}
