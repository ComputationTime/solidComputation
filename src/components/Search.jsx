import { createSignal } from "solid-js";
import ListItem from "./ListItem";
export default function Search({ items }) {
  const uniqueTags = [
    ...new Set(items.map((item) => item.frontmatter.tags).flat()),
  ];
  const [curr_items, set_items] = createSignal(items);
  const num_items = items.length;

  return (
    <>
      {num_items >= 2 && (
        <div className="flex flex-row flex-wrap w-[280px] sm:w-[580px] md:w-[700px] lg:w-[800px] mx-auto justify-around px-6 py-10 font-mono">
          {uniqueTags.map((tag) => (
            <button
              className="inline-block p-2 m-1 rounded-3xl bg-gray-200 hover:scale-110 hover:shadow-xl transition-all ease-in-out"
              onClick={() => {
                set_items(
                  items.filter((item) => item.frontmatter.tags.includes(tag))
                );
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      {curr_items().map((item, index) => (
        <ListItem
          title={item.frontmatter.title}
          url={item.url}
          tags={item.frontmatter.tags.join(", ")}
          delay={index * 300}
        />
      ))}
    </>
  );
}
