import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";

const wilayah = [
  {
    name: "G-Wil Bandung Raya",
    logo: "/gwil/bandung.png",
    social: "https://instagram.com/gwil.bandung",
  },
  {
    name: "G-Wil Banten",
    logo: "/gwil/banten.png",
    social: "https://instagram.com/gwil.banten",
  },
  {
    name: "G-Wil Jakarta",
    logo: "/gwil/jakarta.png",
    social: "https://instagram.com/gwil.jakarta",
  },
  {
    name: "G-Wil Jabar Selatan",
    logo: "/gwil/jabarselatan.png",
    social: "https://instagram.com/gwil.jabarselatan",
  },
  {
    name: "G-Wil Jabar Timur",
    logo: "/gwil/jabartimur.png",
    social: "https://instagram.com/gwil.jabartimur",
  },
  {
    name: "G-Wil Jabar Utara",
    logo: "/gwil/jabarutara.png",
    social: "https://instagram.com/gwil.jabarutara",
  },
  {
    name: "G-Wil Jateng",
    logo: "/gwil/jateng.png",
    social: "https://instagram.com/gwil.jateng",
  },
  {
    name: "G-Wil Jatim",
    logo: "/gwil/jatim.png",
    social: "https://instagram.com/gwil.jatim",
  },
  {
    name: "G-Wil Sumatera",
    logo: "/gwil/sumatera.png",
    social: "https://instagram.com/gwil.sumatera",
  },
  {
    name: "G-Wil Kalimantan",
    logo: "/gwil/kalimantan.png",
    social: "https://instagram.com/gwil.kalimantan",
  },
  {
    name: "G-Wil Sulawesi",
    logo: "/gwil/sulawesi.png",
    social: "https://instagram.com/gwil.sulawesi",
  },
  {
    name: "G-Wil Luar Negeri",
    logo: "/gwil/ln.png",
    social: "https://instagram.com/gwil.ln",
  },
];

const keresidenan = [
  {
    name: "Keresidenan Sumedang",
    logo: "/keresidenan/sumedang.png",
    social: "https://instagram.com/keresidenan.sumedang",
  },
  {
    name: "Keresidenan Cirebon",
    logo: "/keresidenan/cirebon.png",
    social: "https://instagram.com/keresidenan.cirebon",
  },
];

export default function GWilKeresidenanPage() {
  return (
    <main className="bg-background px-4 py-16 text-foreground md:px-20">
      <section className="mb-16">
        <h1 className="mb-8 text-center text-3xl font-bold">GAMAIS Wilayah</h1>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wilayah.map((g, i) => (
            <Card key={i} className="flex flex-col items-center p-6">
              <div className="relative mb-4 h-24 w-24">
                <Image
                  src={g.logo}
                  alt={g.name}
                  fill
                  className="object-contain"
                />
              </div>
              <CardContent className="flex flex-col items-center">
                <h3 className="mb-2 text-center text-lg font-bold">{g.name}</h3>
                <Link
                  href={g.social}
                  target="_blank"
                  className="text-primary underline"
                >
                  Instagram
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-8 text-center text-2xl font-bold">Keresidenan</h2>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          {keresidenan.map((k, i) => (
            <Card key={i} className="flex flex-col items-center p-6">
              <div className="relative mb-4 h-24 w-24">
                <Image
                  src={k.logo}
                  alt={k.name}
                  fill
                  className="object-contain"
                />
              </div>
              <CardContent className="flex flex-col items-center">
                <h3 className="mb-2 text-center text-lg font-bold">{k.name}</h3>
                <Link
                  href={k.social}
                  target="_blank"
                  className="text-primary underline"
                >
                  Instagram
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
