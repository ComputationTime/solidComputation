import { createSignal } from "solid-js";
import typeWrite from "../scripts/typeWrite";

export default function Title({ title }) {
  const [writing, setWriting] = createSignal("");
  typeWrite(title, setWriting, 8);
  return (
    <div className="table-row justify-center h-full">
      <div className="table-cell align-middle">
        <h1 className="align-middle mb-28 leading-10 text-5xl sm:text-7xl text-center font-mono font-thin after:content-[''] after:inline-block after:translate-y-[4px] after:w-[30px] after:h-[60px] after:bg-black after:opacity-1 after:animate-fade_in_out">
          {writing()}
        </h1>
      </div>
    </div>
  );
}
