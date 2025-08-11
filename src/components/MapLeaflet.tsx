import React, { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON as GeoJSONLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as toGeoJSON from 'togeojson';
import type { FeatureCollection as GeoJSONFeatureCollection } from 'geojson';

// Fix default marker icons in Leaflet when used with Vite
import L from 'leaflet';
// @ts-ignore
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export type FeatureCollection = GeoJSONFeatureCollection;

interface MapProps {
  kmlText?: string; // raw KML text to render
}

const FitBounds: React.FC<{ fc?: FeatureCollection }> = ({ fc }) => {
  const map = useMap();
  useEffect(() => {
    if (!fc) return;
    const coords: [number, number][] = [];
    fc.features.forEach((f) => {
      const geom: any = f.geometry;
      const collect = (g: any) => {
        if (!g) return;
        if (g.type === 'Point') coords.push([g.coordinates[1], g.coordinates[0]]);
        if (g.type === 'MultiPoint') g.coordinates.forEach((c: any) => coords.push([c[1], c[0]]));
        if (g.type === 'LineString') g.coordinates.forEach((c: any) => coords.push([c[1], c[0]]));
        if (g.type === 'MultiLineString' || g.type === 'Polygon') g.coordinates.flat(1).forEach((c: any) => coords.push([c[1], c[0]]));
        if (g.type === 'MultiPolygon') g.coordinates.flat(2).forEach((c: any) => coords.push([c[1], c[0]]));
        if (g.type === 'GeometryCollection') g.geometries.forEach(collect);
      };
      collect(geom);
    });
    if (coords.length) {
      const bounds = L.latLngBounds(coords);
      map.fitBounds(bounds.pad(0.2));
    }
  }, [fc, map]);
  return null;
};

const MapLeaflet: React.FC<MapProps> = ({ kmlText }) => {
  const [fc, setFc] = useState<FeatureCollection | undefined>();

  useEffect(() => {
    if (!kmlText) return setFc(undefined);
    const parser = new DOMParser();
    const xml = parser.parseFromString(kmlText, 'text/xml');
    const gj = toGeoJSON.kml(xml) as any as FeatureCollection;
    setFc(gj);
  }, [kmlText]);

  const markers = useMemo(() => {
    if (!fc) return [] as { lat: number; lng: number; name?: string }[];
    const arr: { lat: number; lng: number; name?: string }[] = [];
    fc.features.forEach((f) => {
      const g: any = f.geometry;
      const props: any = f.properties || {};
      if (g?.type === 'Point') {
        arr.push({ lat: g.coordinates[1], lng: g.coordinates[0], name: props.name || props.Name });
      }
    });
    return arr;
  }, [fc]);

  return (
    <div className="w-full h-[420px] rounded-lg overflow-hidden border">
      <MapContainer className="w-full h-full" {...({ center: [44.4759, -73.2121], zoom: 6, scrollWheelZoom: false } as any)}>
        <TileLayer {...({
          attribution: '&copy; OpenStreetMap contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        } as any)}
        />
        {fc && <GeoJSONLayer data={fc as any} />}
        <FitBounds fc={fc} />
        {markers.map((m, i) => (
          <Marker position={[m.lat, m.lng]} key={`${m.lat}-${m.lng}-${i}`}>
            <Popup>{m.name || `Location ${i + 1}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
