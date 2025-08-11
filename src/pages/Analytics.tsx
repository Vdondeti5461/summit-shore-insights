import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const sample = Array.from({ length: 24 }).map((_, i) => ({
  time: `${i}:00`,
  temp: 5 + Math.sin(i / 3) * 2 + i * 0.05,
  ph: 7 + Math.cos(i / 4) * 0.1,
}));

const Analytics = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <SEO title="Analytics" description="Interactive charts and comparisons across locations and variables." />
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Sample Time Series</CardTitle>
        </CardHeader>
        <CardContent style={{ height: 360 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sample}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="temp" stroke="hsl(var(--primary))" dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="ph" stroke="hsl(var(--muted-foreground))" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
