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
        <div className="container mx-auto px-4 py-10 grid gap-4 md:grid-cols-2">
          <div>
            <p className="font-semibold">UVM Summit to Shore</p>
            <p className="text-sm text-muted-foreground mt-1">
              A unified climate and environmental data portal.
            </p>
          </div>
          <div className="flex md:justify-end items-center gap-2">
            <Button variant="ghost" asChild>
              <a href="/data">Download Data</a>
            </Button>
            <Button variant="default" asChild>
              <a href="/analytics">View Analytics</a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
