import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import Image from "next/image";

export type Program = {
  images: string[];
  title: string;
  description: string;
  category?: string | string[];
};

export const programs: Program[] = [
  {
    images: [
      "/Dokumentasi Kegiatan/Mentoring Agama.jpg",
      "/Dokumentasi Kegiatan/Pelayanan Salat OSKM.JPG",
    ],
    title: "Penyambutan Mahasiswa Baru (PMB) GAMAIS ITB",
    description:
      "Ragam aktivitas yang dilakukan dengan mengedepankan pelayanan kepada Mahasiswa Baru ITB (khususnya pelayanan salat dan persiapan perkuliahan) serta langkah awal membina Mahasiswa Baru dalam menghadapi awal baru kehidupan mereka.",
    category: "Pelayanan",
  },
  {
    images: ["/Dokumentasi Kegiatan/Kemuslimahan.jpg"],
    title: "Komunitas Muslimah (Annisaa) ITB",
    description:
      "Melalui Kementerian Annisaa, GAMAIS ITB hadir memberikan wadah bagi para muslimah ITB untuk berinteraksi satu sama lain dalam nuansa yang interaktif dan menyenangkan.",
    category: "Annisaa",
  },
  {
    images: ["/Dokumentasi Kegiatan/GAMAIS Peduli.jpg"],
    title: "Kemasyakatan GAMAIS ITB",
    description:
      "Sebagai wujud pemenuhan Tri Dharma Perguruan Tinggi, GAMAIS ITB menjadi wadah bagi anggotanya untuk turut aktif memberikan kontribusi nyata bagi masyarakat melalui program GAMAIS Mengabdi dan Kelas Kemasyarakatan.",
    category: "Kemasyarakatan",
  },
  {
    images: ["/Dokumentasi Kegiatan/Lebaran di Kampus.jpg"],
    title: "Ramadan di Kampus",
    description:
      "Mengadakan kegiatan syiar islami di dalam kampus berupa Inspirasi Ramadan (IRAMA) on Campus, berbagi takjil bersama GAMAIS Wilayah, dan kegiatan Ramadan lainnya.",
    category: ["Intrakampus", "Kewilayahan"],
  },
  {
    images: ["/Dokumentasi Kegiatan/Berbagi Puasa Arafah.jpg"],
    title: "Berbagi Puasa Arafah",
    description:
      "Kegiatan berbagi makanan saat Puasa Arafah bersama GAMAIS ITB untuk menumbuhkan semangat kepedulian dan kebersamaan di lingkungan kampus.",
    category: "Pusat",
  },
  {
    images: ["/Dokumentasi Kegiatan/Kunjungan Alumni.jpg"],
    title: "Kunjungan Alumni",
    description:
      "Silaturahmi dan sharing pengalaman bersama alumni GAMAIS ITB untuk memperluas wawasan dan jaringan mahasiswa.",
    category: "Alumni Relation",
  },
  {
    images: ["/Dokumentasi Kegiatan/Kunjungan LDK.jpg"],
    title: "Kunjungan LDK",
    description:
      "Kunjungan dan kolaborasi dengan LDK kampus lain untuk bertukar pengalaman dan memperkuat jaringan dakwah kampus.",
    category: "Relasi Strategis",
  },
  {
    images: ["/Dokumentasi Kegiatan/Pelatihan dan Bonding.jpeg"],
    title: "Pelatihan dan Bonding",
    description:
      "Pelatihan dan penguatan bonding antar anggota GAMAIS ITB melalui berbagai aktivitas pengembangan diri dan kebersamaan.",
    category: "PSDM",
  },
  {
    images: ["/Dokumentasi Kegiatan/Training Kepemimpinan.JPG"],
    title: "Training Kepemimpinan",
    description:
      "Pelatihan kepemimpinan untuk staff GAMAIS ITB agar siap menjadi pemimpin yang berintegritas dan inspiratif.",
    category: "Kesekjenan",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-transparent px-4 py-16 md:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">
              Program Unggulan GAMAIS ITB
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Berbagai kegiatan dan program yang telah diselenggarakan oleh
              mahasiswa GAMAIS ITB untuk pengembangan diri, akademik, dan
              kebersamaan.
            </p>
          </div>
          <div className="flex flex-col gap-16">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="w-full max-w-full overflow-hidden border-2 border-primary/30 shadow-xl"
              >
                <div className="flex flex-col">
                  {/* Images: show both if available, else one */}
                  {program.images.length > 1 ? (
                    <div className="relative flex h-72 w-full">
                      {program.images.map((img, i) => (
                        <div key={i} className="relative h-72 w-1/2">
                          <Image
                            src={img ?? "/placeholder.jpg"}
                            alt={program.title + " image " + (i + 1)}
                            fill
                            className="object-cover"
                            sizes="50vw"
                            priority={index < 2 && i === 0}
                          />
                        </div>
                      ))}
                      <div className="absolute left-4 top-4 z-30 flex gap-2">
                        {(Array.isArray(program.category)
                          ? program.category
                          : [program.category]
                        ).map((cat, i) => (
                          <Badge key={i} variant="secondary">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-72 w-full">
                      <Image
                        src={program.images[0] ?? "/placeholder.jpg"}
                        alt={program.title + " image"}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority={index < 2}
                      />
                      <div className="absolute left-4 top-4 z-30 flex gap-2">
                        {(Array.isArray(program.category)
                          ? program.category
                          : [program.category]
                        ).map((cat, i) => (
                          <Badge key={i} variant="secondary">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Content */}
                  <CardContent className="flex flex-col justify-center p-8">
                    <h3 className="mb-3 text-3xl font-bold text-primary">
                      {program.title}
                    </h3>
                    <p className="mb-2 text-base text-muted-foreground">
                      {program.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
            <div className="text-center text-lg font-normal text-muted-foreground">
              and many more...
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
