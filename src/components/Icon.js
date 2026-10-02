import {
    Award, BadgeCheck, Boxes, Building2, ClipboardList, Clock, Droplets, FileCheck, Gem, Handshake, Layers,
    MapPinned, Mountain, PackageCheck, RadioTower, Route, Scale, ShieldCheck, Shovel, Truck, Zap,
} from 'lucide-react';

// Nama ikon di src/data/site.js dipetakan ke komponen lucide-react di sini.
const icons = {
    Award, BadgeCheck, Boxes, Building2, ClipboardList, Clock, Droplets, FileCheck, Gem, Handshake, Layers,
    MapPinned, Mountain, PackageCheck, RadioTower, Route, Scale, ShieldCheck, Shovel, Truck, Zap,
};

export default function Icon({ name, ...props }) {
    const Component = icons[name] ?? Layers;
    return <Component aria-hidden="true" {...props} />;
}
