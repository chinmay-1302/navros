import Image from "next/image";

export const navItems = [
  {name: "Motor Actual Position", href: "/charts"},
  {name: "Motor Command Position", href: "/charts/mcp"},
  {name: "Obstacle Detection", href: "/charts/od"},
  {name: "Commands Sent to Motor", href: "/charts/csm"},
];

export default function Home() {
  return (
    <div className="w-full">
      Hello
    </div>
  );
}
