import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative">
      <SEO title="Home" description="Unified climate & environmental data portal for UVM Summit to Shore." />

      <section className="relative overflow-hidden">
        <div
          className="bg-hero absolute inset-0 opacity-90"
          aria-hidden
        />
        <div
          className="bg-hero-glow absolute inset-0"
          aria-hidden
          onMouseMove={(e) => {
            const target = e.currentTarget as HTMLDivElement;
            const r = target.getBoundingClientRect();
            target.style.setProperty("--pointer-x", `${e.clientX - r.left}px`);
            target.style.setProperty("--pointer-y", `${e.clientY - r.top}px`);
          }}
        />
        <div className="relative container mx-auto px-4 py-24 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">UVM Summit to Shore Data Portal</h1>
          <p className="mt-4 text-lg md:text-xl/relaxed opacity-90 max-w-3xl mx-auto">
            Explore project information, team, research, download datasets, and visualize analytics across 22 monitored locations.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/data">Download Data</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/analytics">View Analytics</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-12 md:-mt-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>Learn about goals, sites, and instrumentation.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">The Summit to Shore project unifies climatic and environmental observations from the Green Mountains to Lake Champlain.</p>
            </CardContent>
          </Card>
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>22 Locations</CardTitle>
              <CardDescription>KML-ready mapping for quick context.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Upload your KML to visualize stations and drive selections for downloads and analytics.</p>
            </CardContent>
          </Card>
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Trends, anomalies, and comparisons.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Interactive charts help interpret patterns across time and locations.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
