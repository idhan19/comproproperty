/** Video dokumentasi (H.264/MP4) dengan poster; dimuat saat diputar. */
export default function VideoCard({ src, poster, keterangan }) {
    return (
        <figure>
            <div className="overflow-hidden rounded-2xl bg-navy-950 shadow-lg shadow-navy/10">
                <video
                    controls
                    playsInline
                    preload="none"
                    poster={poster}
                    className="aspect-[9/16] max-h-[70vh] w-full object-contain"
                >
                    <source src={src} type="video/mp4" />
                    Browser Anda tidak mendukung pemutaran video.
                </video>
            </div>
            {keterangan && <figcaption className="mt-2 text-sm leading-snug text-navy/70">{keterangan}</figcaption>}
        </figure>
    );
}
