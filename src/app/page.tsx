import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "~/components/ui/carousel";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Image from "next/image";
// Import the programs data from the programs page
import { programs as programsData, type Program } from "./programs/page";
import { FaInstagram, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

export default async function HomePage() {
  return (
    <HydrateClient>
      <main className="relative overflow-hidden bg-background text-foreground">
        {/* Background Image with Dim + Fade Out */}
        <div className="pointer-events-none absolute inset-0 -z-10 select-none">
          <Image
            src="/public/background picture.png"
            alt="Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden="true"
            draggable={false}
          />
          {/* Overlay: darker at top, fading to transparent at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Hero Section */}
        <section className="flex h-[80vh] flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Keluarga Mahasiswa Islam
            <br />
            (GAMAIS) ITB
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Tempat berproses dan berkolaborasi bagi kamu, mahasiswa Islam ITB,
            untuk menjadi progresif, kontributif, dan inspiratif.
          </p>
        </section>

        {/* Ongoing Program Section */}
        <section className="px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Program Terkini
          </h2>
          <div className="mx-auto mb-10 max-w-4xl">
            <Carousel className="relative">
              <CarouselContent>
                {programsData.map((program: Program, idx: number) => (
                  <CarouselItem key={idx}>
                    <Card className="overflow-hidden md:flex">
                      <div className="relative h-64 md:h-auto md:w-1/2">
                        <Image
                          src={program.images[0] ?? ""}
                          alt={program.title}
                          fill
                          className="object-cover"
                          style={{ borderRadius: "0.5rem 0 0 0.5rem" }}
                        />
                      </div>
                      <CardContent className="flex flex-col justify-center p-8 md:w-1/2">
                        <h3 className="mb-2 text-2xl font-bold">
                          {program.title}
                        </h3>
                        <p className="mb-4 text-muted-foreground">
                          {program.description}
                        </p>
                        {program.category && (
                          <p className="mb-4">
                            <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                              {Array.isArray(program.category)
                                ? program.category.join(", ")
                                : program.category}
                            </span>
                          </p>
                        )}
                        <Button asChild>
                          <Link href="/programs">Lihat Program Lainnya</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Recruitment Card */}
          <div className="mx-auto max-w-4xl">
            <Card className="border-0 bg-gradient-to-br from-teal-600 via-emerald-700 to-green-900 text-white shadow-2xl transition-all duration-300">
              <CardContent className="flex flex-col gap-4 p-8 md:p-10">
                <h3 className="mb-4 text-center text-3xl font-extrabold drop-shadow-lg md:text-4xl">
                  📢 MEMANGGIL PUTRA PUTRI TERBAIK NEGERI ✨
                </h3>
                <div className="mb-4 text-lg font-medium">
                  <p className="italic">
                    &ldquo;Zaman ini penuh huru-hara. Peradaban tidak lagi
                    berdiri hanya di atas tanah, tetapi di atas keyakinan dan
                    keberanian.&rdquo;
                  </p>
                  <p className="mt-3">
                    Di tengah kekacauan, lahirlah generasi baru. Generasi yang
                    tidak hanya hidup untuk dirinya sendiri, tetapi untuk sebuah
                    amanah besar: menjaga umat, menyalakan cahaya, dan memikul
                    tanggung jawab peradaban.
                  </p>
                  <p className="mt-3">
                    Namun, jalan itu tidak tenang. Ia penuh ujian, rintangan,
                    dan godaan. Pertanyaannya sederhana:
                    <span className="font-bold">
                      {" "}
                      Apakah engkau hanya ingin jadi penonton sejarah, atau siap
                      menjadi bagian dari barisan yang menegakkannya? 🔥
                    </span>
                  </p>
                  <p className="mt-3 font-bold">
                    ⚔ Saatnya ikut serta dalam SIMFONI dan bergabung menjadi
                    kader muda GAMAIS.
                  </p>
                  <p className="mt-1">
                    Bangun barisanmu, teguhkan keyakinanmu, dan buktikan
                    kesetiaanmu pada amanah ini.
                  </p>
                </div>

                {/* Registration details - improved layout for wider card */}
                <div className="mt-2 flex flex-col gap-6 md:flex-row md:justify-between md:gap-4">
                  <div className="md:flex-1">
                    <div className="mb-2">
                      <span className="font-bold">Periode Daftar:</span>
                      <span className="ml-2 rounded bg-emerald-100/20 px-2 py-1 font-semibold">
                        12 – 23 September 2025
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">Info lebih lanjut:</span>
                      <div className="ml-2 mt-1 flex flex-wrap gap-3">
                        <a
                          href="https://wa.me/6283820206067"
                          className="flex items-center gap-1 underline hover:text-emerald-200"
                        >
                          <span>👦 Lyan</span>
                        </a>
                        <a
                          href="https://wa.me/6287722256061"
                          className="flex items-center gap-1 underline hover:text-emerald-200"
                        >
                          <span>🧕 Hasna</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex md:flex-1 md:items-center md:justify-end">
                    <Button
                      asChild
                      className="w-full bg-white text-lg font-bold text-teal-700 shadow-lg transition-all hover:bg-emerald-100 hover:text-green-800 md:w-auto"
                    >
                      <a
                        href="https://s.id/DaftarSimfoni2025"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Daftar Sekarang
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-background">
          <div className="mx-auto max-w-6xl px-4 py-8 md:px-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1.3fr)]">
              <div className="mb-4 md:border-r md:border-muted md:pr-8">
                <h3 className="text-lg font-semibold">GAMAIS ITB</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gedung Kayu Lt. 2 Komplek Masjid Salman ITB Jl. Ganesha No.7,
                  <br />
                  Bandung 40132
                </p>
              </div>
              <div className="mb-4 md:border-r md:border-muted md:px-8">
                <h3 className="text-lg font-semibold">Tautan</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <Link
                      href="/aboutus"
                      className="text-muted-foreground hover:text-primary"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/programs"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gwil-keresidenan"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Gwil & Keresidenan
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-4 md:pl-8">
                <h3 className="text-lg font-semibold">Media Sosial</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <FaEnvelope className="h-4 w-4 text-primary" />
                    <a
                      href="mailto:gamais_itb@km.itb.ac.id"
                      className="text-muted-foreground hover:text-primary"
                    >
                      gamais_itb@km.itb.ac.id
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMedium className="h-4 w-4 text-primary" />
                    <a
                      href="https://medium.com/gamaisitb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      gamaisitb
                    </a>
                  </li>
                </ul>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FaInstagram className="h-5 w-5 text-primary" />
                    <a
                      href="https://instagram.com/gamaisitb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      @gamaisitb
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLinkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://www.linkedin.com/company/gamaisitb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      GAMAIS ITB
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} GAMAIS ITB. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </HydrateClient>
  );
}
