import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import Image from "next/image";

const programs = [
  {
    images: ["/programs/tubay.jpg", "/programs/tubay2.jpg"],
    title: "TUBAY (Tutorial Bayar)",
    description:
      "Program tutorial akademik untuk membantu mahasiswa dalam mata kuliah yang challenging.",
    category: "Akademik",
  },
  {
    images: ["/programs/eureka.jpg", "/programs/eureka2.jpg"],
    title: "EUREKA",
    description:
      "Event tahunan terbesar GAMAIS ITB dengan berbagai kompetisi dan seminar nasional.",
    category: "Event Besar",
  },
  {
    images: ["/programs/ngopi.jpg", "/programs/ngopi2.jpg"],
    title: "Ngopi Bareng",
    description:
      "Kegiatan informal untuk mempererat hubungan antar mahasiswa dan sharing pengalaman.",
    category: "Sosial",
  },
  {
    images: ["/programs/kompetisi.jpg", "/programs/kompetisi2.jpg"],
    title: "Kompetisi Fisika",
    description:
      "Mengadakan dan mengikuti berbagai kompetisi fisika tingkat regional dan nasional.",
    category: "Kompetisi",
  },
  {
    images: ["/programs/workshop.jpg", "/programs/workshop2.jpg"],
    title: "Workshop & Seminar",
    description:
      "Kegiatan pengembangan skill dan wawasan melalui workshop dan seminar berkualitas.",
    category: "Pengembangan",
  },
  {
    images: ["/programs/mentoring.jpg", "/programs/mentoring2.jpg"],
    title: "Mentoring Program",
    description:
      "Program pendampingan mahasiswa baru oleh senior untuk adaptasi kampus.",
    category: "Mentoring",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="bg-muted/40 px-4 py-16 md:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold">Program GAMAIS ITB</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Berbagai kegiatan dan program yang telah diselenggarakan oleh
              komunitas mahasiswa GAMAIS ITB untuk pengembangan diri, akademik,
              dan kebersamaan.
            </p>
          </div>
          <div className="flex flex-col gap-16">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="w-full max-w-full overflow-hidden border-2 border-primary/30 shadow-xl"
              >
                <div className="flex w-full flex-col lg:flex-row">
                  <div className="relative flex min-h-[350px] w-full gap-2 bg-gray-200 lg:w-2/3">
                    {program.images.map((img, i) => (
                      <div key={i} className="relative h-72 min-w-0 flex-1">
                        <Image
                          src={img}
                          alt={program.title + " image " + (i + 1)}
                          fill
                          className="rounded-none object-cover"
                          sizes="100vw"
                          priority={index < 2 && i === 0}
                        />
                      </div>
                    ))}
                    <Badge
                      className="absolute left-4 top-4 z-10"
                      variant="secondary"
                    >
                      {program.category}
                    </Badge>
                  </div>
                  <CardContent className="flex min-w-0 flex-1 flex-col justify-center p-10">
                    <h3 className="mb-3 text-3xl font-bold text-primary">
                      {program.title}
                    </h3>
                    <p className="mb-2 text-lg text-muted-foreground">
                      {program.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
