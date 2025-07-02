"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
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

export default function AboutPage() {
  const visionMission = {
    vision:
      "Menjadi wadah pengembangan mahasiswa Fisika ITB yang unggul, inovatif, dan berkontribusi nyata bagi kemajuan ilmu pengetahuan dan masyarakat.",
    missions: [
      "Memfasilitasi pengembangan akademik dan non-akademik mahasiswa Fisika ITB",
      "Menciptakan lingkungan yang kondusif untuk kolaborasi dan inovasi",
      "Membangun jaringan yang kuat antar mahasiswa, alumni, dan industri",
      "Mengadakan kegiatan yang bermanfaat bagi mahasiswa dan masyarakat luas",
    ],
  };

  const values = [
    {
      icon: Heart,
      title: "Kekeluargaan",
      description:
        "Membangun ikatan yang kuat dan saling mendukung antar anggota",
      color: "from-red-400 to-pink-400",
    },
    {
      icon: Lightbulb,
      title: "Inovasi",
      description:
        "Mendorong kreativitas dan pemikiran out-of-the-box dalam setiap kegiatan",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: Trophy,
      title: "Prestasi",
      description:
        "Berusaha mencapai excellence dalam bidang akademik dan non-akademik",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Globe,
      title: "Kontribusi",
      description:
        "Memberikan dampak positif bagi lingkungan dan masyarakat sekitar",
      color: "from-green-400 to-emerald-400",
    },
  ];

  const programs = [
    {
      icon: BookOpen,
      title: "TUBAY (Tutorial Bayar)",
      description:
        "Program tutorial akademik untuk membantu mahasiswa dalam mata kuliah yang challenging",
      category: "Akademik",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Rocket,
      title: "EUREKA",
      description:
        "Event tahunan terbesar HIMAFI dengan berbagai kompetisi dan seminar nasional",
      category: "Event Besar",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Coffee,
      title: "Ngopi Bareng",
      description:
        "Kegiatan informal untuk mempererat hubungan antar mahasiswa dan sharing pengalaman",
      category: "Sosial",
      color: "from-amber-400 to-orange-400",
    },
    {
      icon: Award,
      title: "Kompetisi Fisika",
      description:
        "Mengadakan dan mengikuti berbagai kompetisi fisika tingkat regional dan nasional",
      category: "Kompetisi",
      color: "from-emerald-400 to-teal-400",
    },
    {
      icon: Calendar,
      title: "Workshop & Seminar",
      description:
        "Kegiatan pengembangan skill dan wawasan melalui workshop dan seminar berkualitas",
      category: "Pengembangan",
      color: "from-indigo-400 to-purple-400",
    },
    {
      icon: Users,
      title: "Mentoring Program",
      description:
        "Program pendampingan mahasiswa baru oleh senior untuk adaptasi kampus",
      category: "Mentoring",
      color: "from-rose-400 to-red-400",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
        <div className="absolute left-1/4 top-0 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 opacity-30 mix-blend-multiply blur-xl filter"></div>
        <div className="absolute right-1/4 top-0 h-72 w-72 animate-pulse rounded-full bg-cyan-500/20 opacity-30 mix-blend-multiply blur-xl filter delay-1000"></div>

        <div className="container relative mx-auto px-4 py-16">
          <div className="space-y-6 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              Tentang HIMAFI ITB
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
              Wadah Berkembang dan Bergerak bagi Mahasiswa Fisika ITB
            </p>
          </div>
        </div>
      </div>

      {/* What is HIMAFI ITB */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="mb-16 overflow-hidden border-0 border-gray-700 bg-gray-800/80 shadow-xl backdrop-blur-sm">
            <CardHeader className="border-b border-gray-700 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
              <div className="flex items-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">
                    Apa itu HIMAFI ITB?
                  </CardTitle>
                  <CardDescription className="mt-1 text-gray-400">
                    Mengenal lebih dekat keluarga besar fisika ITB
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6 leading-relaxed text-gray-300">
                <p className="text-lg">
                  <strong className="text-white">HIMAFI ITB</strong> adalah
                  organisasi kemahasiswaan yang mewadahi seluruh mahasiswa
                  Program Studi Fisika Institut Teknologi Bandung. Kami bukan
                  hanya sekadar organisasi formal, tapi lebih dari itu - kami
                  adalah{" "}
                  <span className="font-semibold text-blue-400">keluarga</span>.
                </p>
                <p>
                  Sejak didirikan, HIMAFI ITB telah menjadi rumah bagi ribuan
                  mahasiswa fisika untuk berkembang, berkarya, dan
                  berkontribusi. Dari yang awalnya cuma &quot;jiwa malang di
                  jurusan fisigma&quot;, kami tumbuh menjadi komunitas yang
                  solid dan berprestasi.
                </p>
                <p>
                  Di sini, Anda akan menemukan teman-teman seperjuangan yang
                  siap saling support, senior-senior chad yang siap berbagi
                  ilmu, dan berbagai kesempatan untuk mengembangkan diri baik di
                  bidang akademik maupun non-akademik.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vision & Mission */}
          <Card className="mb-16 overflow-hidden border-0 border-gray-700 bg-gray-800/80 shadow-xl backdrop-blur-sm">
            <CardHeader className="border-b border-gray-700 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
              <div className="flex items-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">
                    Visi & Misi
                  </CardTitle>
                  <CardDescription className="mt-1 text-gray-400">
                    Arah dan tujuan HIMAFI ITB
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Vision */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                    <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                    Visi
                  </h3>
                  <p className="rounded-lg border-l-4 border-emerald-400 bg-emerald-900/10 p-4 text-lg italic leading-relaxed text-gray-300">
                    &quot;{visionMission.vision}&quot;
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                    <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                    Misi
                  </h3>
                  <div className="space-y-3">
                    {visionMission.missions.map((mission, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <p className="leading-relaxed">{mission}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Nilai-Nilai Kami
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                Prinsip-prinsip yang menjadi fondasi dalam setiap kegiatan dan
                interaksi di HIMAFI ITB
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="overflow-hidden border-0 border-gray-700 bg-gray-800/80 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`inline-flex h-12 w-12 items-center justify-center bg-gradient-to-r ${value.color} flex-shrink-0 rounded-xl shadow-lg`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 text-xl font-bold text-white">
                            {value.title}
                          </h3>
                          <p className="leading-relaxed text-gray-300">
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

          {/* Programs */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Program Kami
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                Berbagai kegiatan dan program yang kami selenggarakan untuk
                pengembangan mahasiswa fisika ITB
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <Card
                    key={index}
                    className="overflow-hidden border-0 border-gray-700 bg-gray-800/80 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div
                            className={`inline-flex h-10 w-10 items-center justify-center bg-gradient-to-r ${program.color} rounded-lg shadow-lg`}
                          >
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <Badge
                            variant="secondary"
                            className="border-gray-600 bg-gray-700 text-gray-300"
                          >
                            {program.category}
                          </Badge>
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-bold text-white">
                            {program.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-300">
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

          {/* Organogram */}
          <Card className="overflow-hidden border-0 border-gray-700 bg-gray-800/80 shadow-xl backdrop-blur-sm">
            <CardHeader className="border-b border-gray-700 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
              <div className="flex items-center space-x-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">
                    Struktur Organisasi
                  </CardTitle>
                  <CardDescription className="mt-1 text-gray-400">
                    Susunan kepengurusan HIMAFI ITB
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Top Leadership */}
                <div className="space-y-4 text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg">
                    <Crown className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {organogram.president.name}
                    </h3>
                    <p className="text-gray-400">
                      {organogram.president.person}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg">
                    <Shield className="w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {organogram.vicePresident.name}
                    </h3>
                    <p className="text-gray-400">
                      {organogram.vicePresident.person}
                    </p>
                  </div>
                </div>

                {/* Departments */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {organogram.departments.map((dept, index) => (
                    <Card
                      key={index}
                      className="border-gray-600 bg-gray-700/50"
                    >
                      <CardContent className="p-4">
                        <div className="space-y-3 text-center">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">
                              {dept.name}
                            </h4>
                            <p className="text-xs text-gray-400">{dept.head}</p>
                          </div>
                          <div className="space-y-1">
                            {dept.divisions.map((division, divIndex) => (
                              <div
                                key={divIndex}
                                className="rounded bg-gray-600/30 px-2 py-1 text-xs text-gray-300"
                              >
                                {division}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
