import { createSignal } from "solid-js";

export default function Contact() {
  const [phone, set_phone] = createSignal("Reveal Phone Number");
  const [email, set_email] = createSignal("Reveal Email");
  const part_1 = "+1 (236)-";
  const part_2 = "512-";
  const num_1 = 9010;
  const num_2 = 709;
  const name = "contact";
  const domain = "mathematics.dev";
  return (
    <>
      <p className="mb-2">
        Phone:
        <button
          onClick={() => {
            set_phone(part_1 + part_2 + (num_1 + num_2));
          }}
          className={
            "ml-2 select-text " +
            (phone() == "Reveal Phone Number"
              ? "p-1 px-5 ml-1 rounded-3xl bg-gray-200 hover:scale-105 hover:shadow-xl transition-all ease-in-out"
              : "cursor-text")
          }
        >
          {phone()}
        </button>
      </p>
      <p>
        Email:
        <button
          onClick={() => {
            set_email(name + "@" + domain);
          }}
          className={
            "ml-2 select-text " +
            (email() == "Reveal Email"
              ? "p-1 px-5 ml-1 rounded-3xl bg-gray-200 hover:scale-105 hover:shadow-xl transition-all ease-in-out"
              : "cursor-text")
          }
        >
          {email()}
        </button>
      </p>
    </>
  );
}
