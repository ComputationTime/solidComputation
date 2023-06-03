import { createSignal } from "solid-js";
import ListItem from "./ListItem";
export default function Search({ items }) {
  items = items.sort();
  const uniqueTags = [
    "All",
    ...new Set(items.map((item) => item.frontmatter.tags).flat()),
  ];
  const [curr_items, set_items] = createSignal(items.sort());
  const num_items = items.length;

  return (
    <>
      {num_items >= 5 && (
        <div className="flex flex-row flex-wrap w-[280px] sm:w-[580px] md:w-[700px] lg:w-[800px] mx-auto px-6 pb-10 font-mono">
          {uniqueTags.sort().map((tag) => (
            <button
              className={
                "inline-block p-2 m-1 rounded-3xl bg-gray-200 hover:scale-110 hover:shadow-xl transition-all ease-in-out"
              }
              onClick={() => {
                if (tag != "All") {
                  set_items(
                    items.filter((item) => item.frontmatter.tags.includes(tag))
                  );
                } else {
                  set_items(items);
                }
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
          url={item.frontmatter.url ?? item.url}
          img_src={item.frontmatter.image.url}
          tags={item.frontmatter.tags.sort().join(", ")}
          new_tab={item.frontmatter.new_tab}
          delay={index * 200}
        />
      ))}
    </>
  );
}
