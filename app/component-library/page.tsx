import { Button } from "@/components/ui/button";

export default function Components() {
  return (
    <div className="flex flex-col max-w-48 m-10">
      <h1 className="text-xl mb-5 text-white font-bold">Components</h1>
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
