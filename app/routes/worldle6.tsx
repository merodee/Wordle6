import type { Route } from "./+types/worldle6";
import { Worldle6 } from "../welcome/worldle6";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wordle6" },
    { name: "description", content: "Welcome to Worldle 6!" },
  ];
}

export default function Worldle() {
  return <Worldle6 />;
}