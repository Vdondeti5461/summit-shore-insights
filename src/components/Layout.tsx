import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/research", label: "Research" },
  { to: "/data", label: "Data" },
  { to: "/analytics", label: "Analytics" },
];

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* UVM global bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <a href="https://www.uvm.edu" target="_blank" rel="noreferrer" className="font-semibold tracking-wide">
            University of Vermont
          </a>
          <nav className="hidden sm:flex items-center gap-4">
            <a href="https://www.uvm.edu" target="_blank" rel="noreferrer" className="hover:underline">UVM Home</a>
            <a href="https://www.uvm.edu/research" target="_blank" rel="noreferrer" className="hover:underline">Research</a>
          </nav>
        </div>
      </div>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-extrabold text-xl tracking-tight">
            UVM Summit to Shore
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive ? "bg-secondary text-secondary-foreground" : "hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="outline" asChild>
              <a href="#nav">Menu</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-semibold">UVM Summit to Shore</p>
            <p className="text-sm text-muted-foreground mt-2">
              A unified climate and environmental data portal at the University of Vermont.
            </p>
          </div>
          <nav className="grid gap-2 text-sm">
            <p className="font-medium text-foreground">Quick Links</p>
            <a className="text-muted-foreground hover:text-foreground" href="/data">Data Download</a>
            <a className="text-muted-foreground hover:text-foreground" href="/analytics">Analytics</a>
            <a className="text-muted-foreground hover:text-foreground" href="/research">Research</a>
          </nav>
          <div className="md:text-right text-sm">
            <p className="font-medium text-foreground">University of Vermont</p>
            <p className="text-muted-foreground">Burlington, VT, USA</p>
            <a href="https://www.uvm.edu" target="_blank" rel="noreferrer" className="text-primary hover:underline">uvm.edu</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
