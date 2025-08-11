import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <SEO title="About" description="About the UVM Summit to Shore project and objectives." />
      <h1 className="text-3xl font-bold mb-6">About the Project</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Mission</CardTitle>
            <CardDescription>From the Green Mountains to Lake Champlain</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">The Summit to Shore project integrates climatic and environmental observations to support research, education, and decision-making across Vermont’s mountain-to-lake continuum.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Scope</CardTitle>
            <CardDescription>22 sites, multi-parameter sensing</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">We collect meteorological, hydrological, and limnological measurements with standardized protocols to enable cross-site comparisons and long-term trend analyses.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
