import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/about">Selengkapnya</Link>
            </Button>
            <Button variant="outline">Hubungi Kami</Button>
          </div>
        </section>

        {/* Ongoing Program Section */}
        <section className="px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Program Terkini
          </h2>
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden md:flex">
              <div className="relative h-64 md:h-auto md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Program Image"
                  layout="fill"
                  className="h-full w-full"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold">Physics-Go! 2025</h3>
                <p className="mt-2 text-muted-foreground">
                  Physics-Go! adalah olimpiade fisika tingkat nasional untuk
                  siswa SMA/sederajat yang diselenggarakan oleh HIMAFI ITB.
                </p>
                <p className="mt-4">
                  Pendaftaran dibuka hingga 30 Agustus 2025.
                </p>
                <Button className="mt-6" asChild>
                  <Link href="/programs/physics-go-2025">Lihat Detail</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Posts & Blogs Section */}
        <section className="bg-muted/40 px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Tulisan & Kabar
          </h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for posts */}
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&text=Post+${post}`}
                      alt={`Post ${post}`}
                      object-fit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="pt-4">
                    Judul Tulisan Menarik {post}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ringkasan singkat dari tulisan atau kabar yang ada di sini.
                    Ini akan menarik pembaca untuk mengklik dan membaca lebih
                    lanjut.
                  </p>
                  <Button variant="link" className="mt-4 p-0" asChild>
                    <Link href={`/posts/${post}`}>Baca Selengkapnya</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section className="px-4 py-16 md:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Tentang Kami</h2>
            <p className="text-muted-foreground">
              Keluarga Mahasiswa Islam Institut Teknologi Bandung (GAMAIS ITB)
              merupakan organisasi mahasiswa di lingkup kampus Institut
              Teknologi Bandung yang sekaligus berperan sebagai Lembaga Dakwah
              Kampus (LDK) di ITB. Sejak 30 Agustus 1987, organisasi ini
              menaungi seluruh aktivitas dakwah Islam mahasiswa di ITB, termasuk
              aktivitas dakwah di program studi dan fakultas. Dengan semangat
              menyebarkan kebaikan, GAMAIS ITB hadir untuk membangkitkan potensi
              calon pemimpin masa depan yang memiliki dasar keislaman yang kuat.
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <Link href="/about">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="bg-muted/40 px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mx-auto max-w-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>Apa itu HIMAFI ITB?</AccordionTrigger>
              <AccordionContent>
                HIMAFI ITB adalah Himpunan Mahasiswa Fisika di Institut
                Teknologi Bandung, yang berfungsi sebagai wadah belajar,
                penyaluran aspirasi, dan kegiatan berdampak mahasiswa Fisika.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Bagaimana cara menjadi anggota?
              </AccordionTrigger>
              <AccordionContent>
                Setiap mahasiswa aktif Program Studi Fisika ITB secara otomatis
                menjadi anggota HIMAFI ITB.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Apa saja kegiatan yang diadakan?
              </AccordionTrigger>
              <AccordionContent>
                Kami mengadakan berbagai kegiatan mulai dari seminar, workshop,
                kompetisi, pengabdian masyarakat, hingga kegiatan olahraga dan
                seni.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section> */}

        {/* Footer */}
        <footer className="border-t bg-background">
          <div className="mx-auto max-w-6xl px-4 py-8 md:px-20">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold">GAMAIS ITB</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gedung Kayu Lt. 2 Komplek Masjid Salman ITB Jl. Ganesha No.7,
                  Bandung 40132
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Tautan</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Tentang
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/posts"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Media Sosial</h3>
                <div className="mt-2 flex space-x-4">
                  <Link
                    href="https://www.instagram.com/himafi.itb"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://x.com/HIMAFI_ITB"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/himafiitb/"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </Link>
                </div>
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
