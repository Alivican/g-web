import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Users,
  Target,
  Heart,
  Lightbulb,
  BookOpen,
  Trophy,
  Rocket,
  Star,
  User,
  Crown,
  Shield,
  Globe,
  Award,
  Calendar,
  Coffee,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const visionMission = {
    visions: [
      "Civil society; tatanan masyarakat yang memiliki nilai aspiratif, partisipatif, mandiri, non-hegemoni dan beretika",
      "Demokrasi dan hukum diatas kekuasaan politik",
      "Kemampuan berkompetisi dan berkeadilan sosial",
    ],
    missions: [
      "Menciptakan sarjana Fisika ITB yang jujur, profesional, berdedikasi dan berintegritas terhadap bangsa dan negara.",
      "Turut membangun civitas akademika ITB sebagai institusi pendidikan dan sosial budaya.",
      "Berkontribusi dalam pemberdayaan masyarakat menuju masyarakat madani yang berkesejahteraan sosial.",
    ],
  };
  const visionMissionBP = {
    vision:
      "HIMAFI ITB yang terus belajar dan berdampak dengan pergerakan kolektif-integratif",
    missions: [
      "Meningkatkan efisiensi dan efektivitas pemenuhan kebutuhan akademik massa dan menginisiasi pengintegrasian sistem dengan pemenuhan kebutuhan dasar lainnya,",
      "Menciptakan lingkungan sosial yang positif dan suportif untuk mendorong peningkatan kesehatan mental massa,",
      "Mewadahi pemenuhan dan penyaluran kebutuhan finansial secara tepat,",
      "Menyediakan wadah pengembangan massa, baik keprofesian, maupun kepribadian, dengan menciptakan lingkungan yang memiliki budaya belajar,",
      "Mengefektifkan dan merelevansikan keorganisasian HIMAFI ITB dengan menginisiasi perubahan hukum dasar dan mewujudkan birokrasi kepengurusan yang lebih optimal, partisipatif-inklusif, akuntabel, dan transparan,",
      "Meningkatkan keberdampakan HIMAFI ITB dengan koordinasi antar badan dalam HIMAFI ITB serta kolaborasi dengan lembaga eksternal",
      "Memulihkan citra HIMAFI ITB dengan optimalisasi strategi branding digital dan branding non-digital",
      "Mewadahi pegimplementasian kemampuan dan ilmu massa HIMAFI ITB melalui penelitian, pengabdian masyarakat, dan kewirausahaan.",
    ],
  };

  const values = [
    {
      icon: Heart,
      title: "Kekeluargaan",
      description:
        "Membangun ikatan yang kuat dan saling mendukung antar anggota",
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description:
        "Mendorong kreativitas dan pemikiran out-of-the-box dalam setiap kegiatan",
    },
    {
      icon: Trophy,
      title: "Prestasi",
      description:
        "Berusaha mencapai excellence dalam bidang akademik dan non-akademik",
    },
    {
      icon: Globe,
      title: "Kontribusi",
      description:
        "Memberikan dampak positif bagi lingkungan dan masyarakat sekitar",
    },
  ];

  const programs = [
    {
      icon: BookOpen,
      title: "TUBAY (Tutorial Bayar)",
      description:
        "Program tutorial akademik untuk membantu mahasiswa dalam mata kuliah yang challenging",
      category: "Akademik",
    },
    {
      icon: Rocket,
      title: "EUREKA",
      description:
        "Event tahunan terbesar HIMAFI dengan berbagai kompetisi dan seminar nasional",
      category: "Event Besar",
    },
    {
      icon: Coffee,
      title: "Ngopi Bareng",
      description:
        "Kegiatan informal untuk mempererat hubungan antar mahasiswa dan sharing pengalaman",
      category: "Sosial",
    },
    {
      icon: Award,
      title: "Kompetisi Fisika",
      description:
        "Mengadakan dan mengikuti berbagai kompetisi fisika tingkat regional dan nasional",
      category: "Kompetisi",
    },
    {
      icon: Calendar,
      title: "Workshop & Seminar",
      description:
        "Kegiatan pengembangan skill dan wawasan melalui workshop dan seminar berkualitas",
      category: "Pengembangan",
    },
    {
      icon: Users,
      title: "Mentoring Program",
      description:
        "Program pendampingan mahasiswa baru oleh senior untuk adaptasi kampus",
      category: "Mentoring",
    },
  ];

  const organogram = {
    president: { name: "Ketua Umum", person: "Chad Physics Leader" },
    vicePresident: { name: "Wakil Ketua", person: "Vice Chad" },
    departments: [
      {
        name: "Departemen Akademik",
        head: "Kepala Dept. Akademik",
        divisions: ["Divisi Tutorial", "Divisi Riset", "Divisi Kompetisi"],
      },
      {
        name: "Departemen Sosial",
        head: "Kepala Dept. Sosial",
        divisions: [
          "Divisi Event",
          "Divisi Hubungan Masyarakat",
          "Divisi Dokumentasi",
        ],
      },
      {
        name: "Departemen Internal",
        head: "Kepala Dept. Internal",
        divisions: [
          "Divisi Keuangan",
          "Divisi Kesekretariatan",
          "Divisi Perlengkapan",
        ],
      },
    ],
  };

  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex h-[60vh] flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-transparent text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary">
          <Users className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Tentang HIMAFI ITB
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Wadah belajar dan berdampak bagi mahasiswa Fisika ITB.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
          <Button variant="outline">Hubungi Kami</Button>
        </div>
      </section>

      {/* What is HIMAFI ITB */}
      <section className="px-4 py-16 md:px-20">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">
                    Apa itu HIMAFI ITB?
                  </CardTitle>
                  <CardDescription>
                    Mengenal lebih dekat keluarga besar fisika ITB
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  <strong className="font-semibold text-foreground">
                    HIMAFI ITB
                  </strong>{" "}
                  dibentuk untuk ikut membantu dan membina terbentuknya sarjana
                  fisika yang{" "}
                  <span className="font-medium text-primary">
                    jujur, pandai, berharga diri
                  </span>
                  , dan mempunyai
                  <span className="font-medium text-primary">
                    {" "}
                    integritas
                  </span>{" "}
                  terhadap bangsa dan negara Indonesia{" "}
                  <em className="text-sm text-muted-foreground/80">
                    (AD/ART HIMAFI ITB, 1981)
                  </em>
                  .
                </p>

                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-4">
                  <p className="text-base leading-relaxed">
                    Asas dari{" "}
                    <strong className="text-foreground">HIMAFI ITB</strong>{" "}
                    adalah{" "}
                    <span className="font-semibold text-primary">
                      Tri Dharma Perguruan Tinggi
                    </span>{" "}
                    yang bersendikan{" "}
                    <span className="font-semibold text-primary">
                      Pancasila
                    </span>
                    .
                  </p>
                </div>

                <p className="text-base leading-relaxed">
                  <strong className="font-semibold text-foreground">
                    HIMAFI ITB
                  </strong>{" "}
                  merupakan organisasi kemahasiswaan berupa himpunan mahasiswa
                  jurusan di lingkup Institut Teknologi Bandung yang, secara
                  lebih khusus, dilatarbelakangi oleh{" "}
                  <span className="font-semibold text-primary">
                    bidang keilmuan fisika
                  </span>
                  , yang bertujuan ikut membantu dan membina terbentuknya
                  sarjana fisika yang{" "}
                  <span className="font-medium text-primary">
                    jujur, pandai, berharga diri
                  </span>
                  , dan mempunyai
                  <span className="font-medium text-primary">
                    {" "}
                    integritas
                  </span>{" "}
                  terhadap bangsa dan negara Indonesia.{" "}
                  <strong className="text-foreground">HIMAFI ITB</strong>{" "}
                  sebagai sebuah organisasi berperan dalam memenuhi
                  <span className="font-medium text-foreground">
                    {" "}
                    kebutuhan-kebutuhan mendasar
                  </span>{" "}
                  tersebut bagi beberapa mahasiswa secara sektoral, bukan
                  individu{" "}
                  <em className="text-sm text-muted-foreground/80">
                    (Konsepsi KM ITB, 2020)
                  </em>
                  .
                </p>
              </div>

              <div className="rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-4">
                <h4 className="mb-3 text-lg font-semibold text-foreground">
                  Kebutuhan mendasar yang perlu dipenuhi oleh HIMAFI ITB:
                </h4>
                <ul className="ml-6 list-disc space-y-3">
                  <li className="leading-relaxed text-muted-foreground">
                    <span className="font-medium text-primary">
                      pendidikan akademis
                    </span>{" "}
                    di bidang keilmuan fisika yang tidak tumpang tindih dengan
                    pendidikan yang diakomodasi melalui program studi,
                  </li>
                  <li className="leading-relaxed text-muted-foreground">
                    <span className="font-medium text-primary">finansial</span>{" "}
                    yang tidak tumpang tindih dengan finansial yang diakomodasi
                    oleh individu, sehingga lebih berorientasi pada penyaluran
                    dana bantuan dan informasinya,
                  </li>
                  <li className="leading-relaxed text-muted-foreground">
                    <span className="font-medium text-primary">
                      wadah pengembangan diri
                    </span>{" "}
                    yang sesuai dengan karakteristik mahasiswa fisika ideal,
                  </li>
                  <li className="leading-relaxed text-muted-foreground">
                    <span className="font-medium text-primary">
                      lingkungan sosial
                    </span>{" "}
                    yang sesuai dengan karakteristik mahasiswa fisika ideal,
                  </li>
                  <li className="leading-relaxed text-muted-foreground">
                    <span className="font-medium text-primary">
                      wadah aktualisasi diri
                    </span>{" "}
                    di bidang keilmuan fisika
                  </li>
                </ul>
              </div>

              <div className="space-y-4 border-t border-muted pt-4">
                <p className="text-base leading-relaxed">
                  <strong className="text-lg font-semibold text-foreground">
                    HIMAFI ITB
                  </strong>{" "}
                  adalah organisasi kemahasiswaan yang mewadahi seluruh
                  mahasiswa Program Studi Fisika Institut Teknologi Bandung .
                  Kami bukan hanya sekadar organisasi formal, tapi lebih dari
                  itu - kami adalah{" "}
                  <span className="text-lg font-bold text-primary">
                    keluarga
                  </span>{" "}
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-muted/40 px-4 py-16 md:px-20">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">
                    Visi & Misi
                  </CardTitle>
                  <CardDescription>Arah dan tujuan HIMAFI ITB</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-bold">Visi</h3>
                <div className="space-y-3">
                  {/* Vision */}
                  {visionMission.visions.map((vision, index) => (
                    <div key={index} className="flex items-center gap-6">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <p className="rounded-lg border-2 border-dashed border-muted p-3 text-muted-foreground">
                        {vision}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission */}
              <div>
                <h3 className="mb-4 text-xl font-bold">Misi</h3>
                <div className="space-y-3">
                  {visionMission.missions.map((mission, index) => (
                    <div key={index} className="flex items-center gap-6">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <p className="rounded-lg border-2 border-dashed border-muted p-3 text-muted-foreground">
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-muted-foreground">
                Source:{" "}
                <a
                  className="underline"
                  href="https://medium.com/@himafiitb/die-s-himafi-itb-ke-49-6c876ceebacd"
                >
                  https://medium.com/@himafiitb/die-s-himafi-itb-ke-49-6c876ceebacd
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* vision & mission BP */}
      <section className="bg-muted/40 px-4 py-16 md:px-20">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">
                    Visi BP NAKAMA HIMAFI ITB 2025/2026
                  </CardTitle>
                  {/* <CardDescription className="mt-1 text-gray-400"></CardDescription> */}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Vision */}
              <div>
                <h3 className="mb-4 text-xl font-bold">
                  Misi BP NAKAMA HIMAFI ITB 2025/2026
                </h3>
                <p className="rounded-lg border-l-4 border-primary bg-muted/30 p-4 text-lg italic leading-relaxed">
                  &quot;{visionMissionBP.vision}&quot;
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3 className="mb-4 text-xl font-bold">Misi</h3>
                <div className="space-y-3">
                  {visionMissionBP.missions.map((mission, index) => (
                    <div key={index} className="flex items-center gap-6">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <p className="rounded-lg border-2 border-dashed border-muted p-3 text-muted-foreground">
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 md:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Nilai-Nilai Kami</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Prinsip-prinsip yang menjadi fondasi dalam setiap kegiatan dan
              interaksi di HIMAFI ITB
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-muted/40 px-4 py-16 md:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">Program Kami</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Berbagai kegiatan dan program yang kami selenggarakan untuk
              pengembangan mahasiswa fisika ITB
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                          <IconComponent className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <Badge variant="secondary">{program.category}</Badge>
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold">
                          {program.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organogram */}
      <section className="px-4 py-16 md:px-20">
        <div className="mx-auto max-w-6xl">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">
                    Struktur Organisasi
                  </CardTitle>
                  <CardDescription>
                    Susunan kepengurusan HIMAFI ITB
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <img src="organogram-dark.png" alt="Organogram" />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
