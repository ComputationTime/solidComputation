export default function typeWrite(final_word, set_word, speed) {
  const delta_t = 1000 / speed;
  let idx = 1;
  const interval = setInterval(() => {
    set_word(final_word.slice(0, idx));
    idx += 1;
    if (idx == final_word.length + 1) {
      clearInterval(interval);
    }
  }, delta_t);
}
