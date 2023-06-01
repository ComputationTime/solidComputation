import { createSignal } from "solid-js";
import typeWrite from "../scripts/typeWrite";

export default function Title({ title }) {
  const [writing, setWriting] = createSignal("");
  typeWrite(title, setWriting, 10);
  return (
    <>
      <h1 className="text-5xl sm:text-7xl text-center font-mono font-thin mt-[240px] after:content-[''] after:inline-block after:translate-y-[4px] after:w-[30px] after:h-[60px] after:bg-black after:opacity-1 after:animate-fade_in_out">
        {writing()}
      </h1>
    </>
  );
}
