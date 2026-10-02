const PLACEHOLDER = /(\[KONFIRMASI KLIEN:[^\]]*\])/;

/**
 * Menampilkan teks dan menyorot setiap "[KONFIRMASI KLIEN: ...]" agar mudah
 * ditemukan saat meninjau Preview Deployment. Hapus placeholder di
 * src/data/site.js setelah klien mengonfirmasi.
 */
export default function WithPlaceholders({ text }) {
    if (!text) return null;
    return text.split(PLACEHOLDER).map((part, index) =>
        PLACEHOLDER.test(part) ? (
            <mark key={index} className="rounded bg-accent px-1 text-sm font-medium text-navy">
                {part}
            </mark>
        ) : (
            part
        ),
    );
}
