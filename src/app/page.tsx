import Image from "next/image";
import { redirect } from "next/navigation";

export const navItems = [
  {name: "Motor Actual Position", href: "/charts"},
  {name: "Motor Command Position", href: "/charts/mcp"},
  {name: "Obstacle Detection", href: "/charts/od"},
  {name: "Commands Sent to Motor", href: "/charts/csm"},
];

export default function Home() {
  redirect("/charts")
  return (
    <div className="w-full">
      Something went wrong
    </div>
  );
}
