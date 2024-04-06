import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <p className="text-white font-bold">Hello</p>
      <Button variant="primary">Default</Button>
      <Button>Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger outline</Button>
      <Button variant="super">Danger</Button>
      <Button variant="superOutline">Danger outline</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">Danger outline</Button>
    </div>
  );
}
