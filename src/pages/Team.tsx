import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Team = () => {
  const roles = [
    { title: "Project Lead", name: "Your Name", org: "UVM" },
    { title: "Data Manager", name: "—", org: "UVM" },
    { title: "Field Operations", name: "—", org: "UVM" },
    { title: "Analytics", name: "—", org: "UVM" },
  ];
  return (
    <div className="container mx-auto px-4 py-10">
      <SEO title="Team" description="Meet the team behind UVM Summit to Shore." />
      <h1 className="text-3xl font-bold mb-6">Team</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((r) => (
          <Card key={r.title}>
            <CardHeader>
              <CardTitle>{r.title}</CardTitle>
              <CardDescription>{r.org}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{r.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;
