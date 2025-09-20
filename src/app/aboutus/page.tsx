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
import Image from "next/image";

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
          Tentang GAMAIS ITB
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Tempat berproses dan berkolaborasi bagi kamu, mahasiswa Islam ITB,
          untuk menjadi progresif, kontributif, dan inspiratif.
        </p>
      </section>

      {/* What is GAMAIS ITB */}
  <section className="px-4 pt-8 pb-16 md:px-20">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">
                    Apa itu GAMAIS ITB?
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  Keluarga Mahasiswa Islam Institut Teknologi Bandung (GAMAIS
                  ITB) berdiri pada 30 Agustus 1987 sebagai wadah yang
                  menyatukan berbagai aktivitas mahasiswa di kampus ITB. Sejak
                  awal kehadirannya, GAMAIS ITB berperan sebagai ruang
                  kebersamaan, pengembangan diri, serta kontribusi mahasiswa
                  islam dalam lingkup sosial, akademik, maupun kepemimpinan.
                </p>
                <p className="text-base leading-relaxed">
                  Berangkat dari semangat kebersamaan, GAMAIS ITB hadir untuk
                  mewadahi potensi mahasiswa agar dapat berkembang secara utuh.
                  Tidak hanya dalam aspek keilmuan, tetapi juga karakter,
                  kepemimpinan, dan sensitivitas sosial. Aktivitas GAMAIS ITB
                  menjangkau berbagai tingkat, mulai dari lingkup program studi,
                  fakultas, hingga skala kampus secara menyeluruh, menjadikannya
                  salah satu organisasi yang memiliki jaringan dan peran besar
                  dalam dinamika kehidupan mahasiswa ITB.
                </p>
                <p className="text-base leading-relaxed">
                  Selama hampir empat dekade, GAMAIS ITB telah menjadi rumah
                  bagi ribuan mahasiswa yang ingin bertumbuh dan berkontribusi.
                  Di dalamnya, mahasiswa difasilitasi untuk berkolaborasi,
                  menginisiasi karya, serta mengembangkan kepedulian terhadap
                  masyarakat. Tidak sedikit alumni GAMAIS ITB yang kemudian
                  mengambil peran penting di berbagai sektor, baik di ranah
                  akademik, industri, maupun sosial, membawa nilai-nilai
                  kebaikan dan kontribusi yang ditanamkan selama berproses di
                  organisasi ini.
                </p>
                <p className="text-base leading-relaxed">
                  Kini, GAMAIS ITB terus berkembang seiring zaman, merespons
                  kebutuhan mahasiswa, serta menjaga relevansinya sebagai
                  organisasi yang solid, kontributif, dan inspiratif. Dengan
                  semangat tersebut, GAMAIS ITB senantiasa berkomitmen untuk
                  menjadi ruang aman, kolaboratif, dan penuh makna bagi
                  mahasiswa ITB yang ingin belajar, bertumbuh, serta memberikan
                  dampak positif bagi kampus dan masyarakat luas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visi & Misi GAMAIS ITB 2025 */}
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
                    Visi & Misi GAMAIS ITB 2025
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-bold">Visi</h3>
                <p className="rounded-lg border-l-4 border-primary bg-muted/30 p-4 text-lg italic leading-relaxed">
                  "Membangkitkan semangat keislaman untuk menginspirasi kebaikan
                  di seluruh penjuru kampus ITB."
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold">Misi</h3>
                <p className="rounded-lg border-l-4 border-primary bg-muted/30 p-4 text-lg italic leading-relaxed">
                  "Menjadi inisiator perubahan yang menyebarkan nilai-nilai
                  keislaman untuk menciptakan lingkungan madani di ITB."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Organogram */}
      <section className="px-4 py-16 md:px-20">
        <div className="mx-auto max-w-4xl">
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
              <div className="flex w-full justify-center py-8">
                <div className="max-w-full rounded-xl border bg-white p-4 shadow-lg">
                  <Image
                    src="/Organogram GAMAIS ITB.png"
                    alt="Struktur Organisasi GAMAIS ITB"
                    width={800}
                    height={600}
                    className="rounded-lg"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
