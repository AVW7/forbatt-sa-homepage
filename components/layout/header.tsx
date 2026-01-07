import { TopBar } from "./header/top-bar";
import { MainNav } from "./header/main-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/98 backdrop-blur-md supports-backdrop-filter:bg-background/95 shadow-lg">
      <TopBar />
      <MainNav />
    </header>
  );
}
