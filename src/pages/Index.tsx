import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import MapLeaflet from "@/components/MapLeaflet";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative">
      <SEO title="UVM Summit to Shore Data Portal" description="Explore UVM Summit to Shore—unified climate and environmental data, downloads, and analytics across 22 locations." />

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

      <section className="container mx-auto px-4 mt-16">
        <article className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Summit to Shore</h2>
            <p className="mt-3 text-muted-foreground">
              Summit to Shore connects mountain headwaters to Lake Champlain, integrating climate, hydrology, and lake observations into a unified, open data portal.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>• 22 field locations spanning mountain, river, and lake environments</li>
              <li>• Datasets include weather, streamflow, water quality, and lake dynamics</li>
              <li>• Designed for research, education, and environmental decision-making</li>
            </ul>

            <div className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="monitor">
                  <AccordionTrigger>What we monitor</AccordionTrigger>
                  <AccordionContent>
                    Atmospheric conditions, precipitation, snow, streamflow, lake temperature and stratification, water quality, and watershed indicators.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="integrate">
                  <AccordionTrigger>How we integrate data</AccordionTrigger>
                  <AccordionContent>
                    We harmonize data across sites and formats, enabling consistent downloads, mapping, and cross-location analytics.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="inform">
                  <AccordionTrigger>Who we serve</AccordionTrigger>
                  <AccordionContent>
                    Researchers, educators, resource managers, and communities across Vermont and the Lake Champlain Basin.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/about">Learn more</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/research">Explore research</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-lg border bg-card">
              <div className="p-4 border-b">
                <p className="font-medium">Live coverage preview</p>
                <p className="text-sm text-muted-foreground">Map of stations and study areas</p>
              </div>
              <div className="p-4">
                <MapLeaflet />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">22 locations</Badge>
              <Badge variant="secondary">Multiple domains</Badge>
              <Badge variant="secondary">Open data</Badge>
            </div>
          </div>
        </article>
      </section>

      <section className="container mx-auto px-4 mt-16 mb-8">
        <h2 className="text-xl md:text-2xl font-semibold">Focus areas</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Atmosphere</CardTitle>
              <CardDescription>Weather and climate</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Precipitation, temperature, wind, humidity, snowpack.</p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Hydrology</CardTitle>
              <CardDescription>Rivers and streams</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Streamflow, levels, water quality, nutrients.</p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Lake & Watershed</CardTitle>
              <CardDescription>Lake Champlain</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Temperature profiles, stratification, clarity, chemistry.</p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Ecosystems</CardTitle>
              <CardDescription>Land and habitats</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Vegetation, land cover, soil and watershed indicators.</p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default Index;
