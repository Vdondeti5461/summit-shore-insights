import SEO from "@/components/SEO";
import MapLeaflet from "@/components/MapLeaflet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const DataPage = () => {
  const [kmlText, setKmlText] = useState<string | undefined>();
  const [location, setLocation] = useState<string>("");
  const [variable, setVariable] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  const onUpload = async (file?: File | null) => {
    if (!file) return;
    const text = await file.text();
    setKmlText(text);
  };

  const downloadCSV = () => {
    const header = ["location", "variable", "start", "end", "value"];
    const rows = [
      [location || "all", variable || "all", start || "", end || "", "sample"]
    ];
    const csv = [header.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `uvm-data-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <SEO title="Data Download" description="Select locations, variables, and dates to download datasets." />
      <h1 className="text-3xl font-bold mb-6">Data Download</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Map (KML)</CardTitle>
            <CardDescription>Upload the project KML to visualize and target locations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept=".kml"
                onChange={(e) => onUpload(e.target.files?.[0])}
                className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:bg-secondary file:text-secondary-foreground hover:file:bg-secondary/80"
              />
              <Button variant="ghost" onClick={() => setKmlText(undefined)}>Clear</Button>
            </div>
            <MapLeaflet kmlText={kmlText} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Refine your dataset before download.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1">
              <label className="text-sm">Location ID</label>
              <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., L01"
                className="w-full rounded-md border bg-background px-3 py-2" />
            </div>
            <div className="space-y-1">
              <label className="text-sm">Variable</label>
              <input value={variable} onChange={(e) => setVariable(e.target.value)} placeholder="e.g., temperature"
                className="w-full rounded-md border bg-background px-3 py-2" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-sm">Start date</label>
                <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2" />
              </div>
              <div className="space-y-1">
                <label className="text-sm">End date</label>
                <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="w-full rounded-md border bg-background px-3 py-2" />
              </div>
            </div>
            <Button variant="default" className="w-full" onClick={downloadCSV}>Download CSV</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataPage;
