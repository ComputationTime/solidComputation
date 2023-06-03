import { createSignal } from "solid-js";
import typeWrite from "../scripts/typeWrite";

export default function ListItem({
  url,
  new_tab = null,
  img_src = null,
  img_alt = null,
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
  }, delay + 600);

  return (
    <li class="flex justify-center mt-6 font-mono min-h-[200px] hover:scale-105 transition-transform">
      <a class="" href={url} target={new_tab ? "_blank" : "_self"}>
        <div class="flex flex-col sm:flex-row w-[280px] sm:w-[580px] md:w-[700px] lg:w-[800px] border-b-2 border-gray">
          {img_src && (
            <img
              src={img_src}
              alt={img_alt}
              class="sm:mx-6 mb-5 mx-auto object-contain w-[180px] h-[180px]"
            />
          )}
          <div class="h-[100%] px-6 min-h-[180px] min-w-[160px] text-center sm:text-left">
            <h2 class="">{curr_title()}</h2>
            <p class="font-thin mt-4">{curr_tags()}</p>
          </div>
        </div>
      </a>
    </li>
  );
}
