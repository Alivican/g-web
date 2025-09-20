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
      <main className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="flex h-[80vh] flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-transparent text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Keluarga Mahasiswa Islam
            <br />
            (GAMAIS) ITB
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Tempat berproses dan berkolaborasi bagi kamu, mahasiswa Islam ITB,
            untuk menjadi progresif, kontributif, dan inspiratif.
          </p>
          {/* <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/about">Selengkapnya</Link>
            </Button>
            <Button variant="outline">Hubungi Kami</Button>
          </div> */}
        </section>

        {/* Ongoing Program Section */}
        <section className="px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Program Terkini
          </h2>
          <div className="mx-auto max-w-4xl">
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
                      medium.com/gamaisitb
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
