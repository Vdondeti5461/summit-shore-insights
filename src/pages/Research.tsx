import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Research = () => {
  const items = [
    { title: "Baseline Temperature Trends", desc: "Long-term analysis across alpine to lacustrine gradients." },
    { title: "Hydroclimatic Variability", desc: "Storm response and runoff dynamics across catchments." },
    { title: "Lake Mixing & Stratification", desc: "Seasonal cycles and climate drivers." },
  ];
  return (
    <div className="container mx-auto px-4 py-10">
      <SEO title="Research" description="Research themes and publications for Summit to Shore." />
      <h1 className="text-3xl font-bold mb-6">Research</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <Card key={it.title}>
            <CardHeader>
              <CardTitle>{it.title}</CardTitle>
              <CardDescription>Theme</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{it.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Research;
