import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";

const gwil = [
  {
    name: "MILIS",
    subtitle: "FMIPA",
    logo: "/logo gamais wilayah/Logo MILIS.PNG",
    social: "https://instagram.com/milisfmipaitb",
  },
  {
    name: "AL-AMIN",
    subtitle: "FTSL",
    logo: "/logo gamais wilayah/Logo AL-AMIN.PNG",
    social: "https://instagram.com/alamin.ftsl",
  },
  {
    name: "AL-HAYAAT",
    subtitle: "SITH-S",
    logo: "/logo gamais wilayah/Logo AL-HAYAAT.PNG",
    social: "https://instagram.com/alhayaatitb",
  },
  {
    name: "AN-NAHL",
    subtitle: "SITH-R",
    logo: "/logo gamais wilayah/Logo AN-NAHL.PNG",
    social: "https://instagram.com/annahlsithritb",
  },
  {
    name: "AL-USWAH",
    subtitle: "FITB",
    logo: "/logo gamais wilayah/Logo AL-USWAH.PNG",
    social: "https://instagram.com/aluswahitb",
  },
  {
    name: "GAMIFTI",
    subtitle: "FTI",
    logo: "/logo gamais wilayah/Logo GAMIFTI.PNG",
    social: "https://instagram.com/gamifti.itb",
  },
  {
    name: "GEMURUH",
    subtitle: "FTTM",
    logo: "/logo gamais wilayah/Logo GEMURUH.PNG",
    social: "https://instagram.com/gemuruhfttm_",
  },
  {
    name: "IMAM",
    subtitle: "FTMD",
    logo: "/logo gamais wilayah/Logo IMAM.PNG",
    social: "https://instagram.com/imamftmd",
  },
  {
    name: "KAMIFA",
    subtitle: "SF",
    logo: "/logo gamais wilayah/Logo KAMIFA.PNG",
    social: "https://instagram.com/kamifa_",
  },
  {
    name: "KISR",
    subtitle: "FSRD",
    logo: "/logo gamais wilayah/Logo KISR.PNG",
    social: "https://instagram.com/kisr_itb",
  },
  {
    name: "MSTEI",
    subtitle: "STEI",
    logo: "/logo gamais wilayah/Logo MSTEI.PNG",
    social: "https://instagram.com/muslimstei",
  },
  {
    name: "MUSA",
    subtitle: "SAPPK",
    logo: "/logo gamais wilayah/Logo MUSA.PNG",
    social: "https://instagram.com/musa.itb",
  },
  {
    name: "SMUTY",
    subtitle: "SBM",
    logo: "/logo gamais wilayah/Logo SMUTY.PNG",
    social: "https://instagram.com/smutyy_itb",
  },
];

const keresidenan = [
  {
    name: "MIJ",
    subtitle: "Jatinangor",
    logo: "/Logo Keresidenan/logo MIJ_Clear.png",
    social: "https://instagram.com/keresidenan.mij",
  },
  {
    name: "KAWAI",
    subtitle: "Cirebon",
    logo: "/Logo Keresidenan/Logo KAWAI Transparan.png",
    social: "https://instagram.com/keresidenan.kawai",
  },
];

export default function GWilKeresidenanPage() {
  return (
    <main className="bg-background px-4 py-16 text-foreground md:px-20">
      <section className="mb-16">
        <h1 className="mb-2 text-center text-3xl font-bold">GAMAIS Wilayah</h1>
        <p className="mb-8 text-center text-lg text-muted-foreground">
          GAMAIS terdiri atas beberapa G-wil yang mewakili tiap fakultas.
        </p>
        <div className="xs:grid-cols-2 mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gwil.map((g, i) => (
            <Card
              key={i}
              className="mx-auto flex w-full max-w-xs flex-col items-center px-2 py-3"
            >
              <div className="relative mb-2 h-32 w-40 rounded-lg bg-white p-2 shadow-sm">
                <Image
                  src={g.logo}
                  alt={g.name}
                  fill
                  className="object-contain"
                />
              </div>
              <CardContent className="flex flex-col items-center">
                <h3 className="mb-1 text-center text-lg font-bold">
                  <Link
                    href={g.social}
                    target="_blank"
                    className="text-primary"
                  >
                    {g.name}
                  </Link>
                </h3>
                <p className="mb-1 text-center text-sm text-muted-foreground">
                  {g.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-8 text-center text-2xl font-bold">Keresidenan</h2>
        <div className="xs:grid-cols-2 mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {keresidenan.map((k, i) => (
            <Card
              key={i}
              className="mx-auto flex w-full max-w-xs flex-col items-center px-2 py-3"
            >
              <div className="relative mb-4 h-32 w-40 rounded-lg bg-white p-2 shadow-sm">
                <Image
                  src={k.logo}
                  alt={k.name}
                  fill
                  className="object-contain"
                />
              </div>
              <CardContent className="flex flex-col items-center">
                <h3 className="mb-1 text-center text-lg font-bold">
                  <Link
                    href={k.social}
                    target="_blank"
                    className="text-primary"
                  >
                    {k.name}
                  </Link>
                </h3>
                <p className="mb-2 text-center text-sm text-muted-foreground">
                  {k.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
