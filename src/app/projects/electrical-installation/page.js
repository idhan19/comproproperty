import { permanentRedirect } from 'next/navigation';

// Proyek lama "Jaringan Listrik Jalur Udara Perumahan Puri Griasadi Cikande"
// diganti proyek baru; link lama dialihkan permanen agar tidak rusak.
export default function LegacyCikandeProject() {
    permanentRedirect('/projects/pemasangan-listrik-jalur-udara-puri-griasadi-cikande');
}
