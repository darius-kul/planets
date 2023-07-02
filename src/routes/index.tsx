import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Planets!</div>;
});

export const head: DocumentHead = {
  title: "Planets",
  meta: [
    {
      name: "description",
      content: "Solar system planets",
    },
  ],
};
