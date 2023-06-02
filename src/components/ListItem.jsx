import { createSignal } from "solid-js";
import typeWrite from "../scripts/typeWrite";

export default function ListItem({
  url,
  img_src = "/lambda.png",
  img_alt = "lambda",
  title,
  tags,
  speed = 50,
  delay = 0,
}) {
  const [curr_title, set_title] = createSignal("");
  const [curr_tags, set_tags] = createSignal("");
  setTimeout(() => {
    typeWrite(title, set_title, speed);
  }, delay);

  setTimeout(() => {
    typeWrite(tags, set_tags, speed);
  }, delay * 2 + 800);

  return (
    <li class="flex justify-center mb-6 font-mono min-h-[200px] hover:scale-105 transition-transform">
      <a class="" href={url}>
        <div class="flex flex-col sm:flex-row w-[280px] sm:w-[580px] md:w-[700px] lg:w-[800px] border-b-2 border-gray">
          <img
            src={img_src}
            alt={img_alt}
            class=" border-black border-2 sm:mx-6 mb-5 mx-auto"
            height="180px"
            width="180px"
          />
          <div class="h-[100%] px-6 min-h-[120px] min-w-[160px] text-center sm:text-left">
            <h2 class="">{curr_title()}</h2>
            <p class="font-thin mt-4">{curr_tags()}</p>
          </div>
        </div>
      </a>
    </li>
  );
}
