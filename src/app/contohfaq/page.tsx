"use client";

import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Search,
  MessageCircle,
  Mail,
  HelpCircle,
  CreditCard,
  Settings,
  Zap,
  Instagram,
  Twitter,
  X,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

export default function Component() {
  const faqCategories = [
    {
      title: "HIMAFI ITB",
      icon: HelpCircle,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-900/20",
      faqs: [
        {
          question: "Apa itu HIMAFI ITB?",
          answer: "keluargahuu",
        },
        {
          question: "Siapa saja yang dapat menjadi anggota HIMAFI ITB?",
          answer:
            "siapa saja jiwa malang yang berada di jurusan fisigma UI (universitas itb)",
        },
        {
          question: "Apa saja kegiatan rutin HIMAFI ITB?",
          answer: "mewing pekanan",
        },
      ],
    },
    {
      title: "Keanggotaan & Partisipasi",
      icon: CreditCard,
      color: "from-emerald-400 to-teal-400",
      bgColor: "bg-emerald-900/20",
      faqs: [
        {
          question: "Bagaimana cara bergabung dengan kepengurusan HIMAFI IT?",
          answer: "intellektuele schule dulu lur",
        },
        {
          question: "Apa keuntungan menjadi bagian dari HIMAFI ITB?",
          answer: "bisa bertemu tokoh tokoh chad fisika itb",
        },
        {
          question: "Bagaimana cara mengetahui agenda HIMAFI ITB terbaru?",
          answer: "tepukin mahasiswa jakob terdekat atau pantau medsos himafi",
        },
      ],
    },
    {
      title: "Kegiatan Akademik & Non-Akademik",
      icon: Settings,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-900/20",
      faqs: [
        {
          question:
            "Apakah HIMAFI ITB menyelenggarakan kegiatan akademik seperti tutoring atau diskusi ilmiah?",
          answer: "tubay on the rescue",
        },
        {
          question: "Apa saja acara yang diadakan HIMAFI ITB?",
          answer: "ayo ikut eureka",
        },
        {
          question:
            "Apakah HIMAFI ITB bekerja sama dengan himpunan atau institusi lain?",
          answer: "p koleb",
        },
        {
          question:
            "Bagaimana saya bisa ikut serta dalam lomba atau seminar yang diadakan HIMAFI ITB?",
          answer: "p daftar",
        },
      ],
    },
    {
      title: "Administratif & Layanan",
      icon: Zap,
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-900/20",
      faqs: [
        {
          question:
            "Bagaimana cara meminjam barang atau ruangan melalui HIMAFI?",
          answer: "ijin dulu yg penting",
        },
        {
          question:
            "Apakah HIMAFI menyediakan dokumen atau arsip kegiatan terdahulu?",
          answer: "idk maybe",
        },
        {
          question:
            "Apakah HIMAFI menyediakan bantuan akademik atau advokasi mahasiswa?",
          answer: "uhh yea iirc",
        },
      ],
    },
  ];

  // Extract all questions for dynamic placeholder
  const allQuestions = faqCategories.flatMap((category) =>
    category.faqs.map((faq) => faq.question),
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (allQuestions.length === 0) return;

    const interval = setInterval(() => {
      setCurrentQuestionIndex(
        (prevIndex) => (prevIndex + 1) % allQuestions.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [allQuestions.length]);

  // Search functionality
  const filteredCategories = useMemo(() => {
    if (!inputValue.trim()) return faqCategories;

    const searchTerm = inputValue.toLowerCase().trim();

    return faqCategories
      .map((category) => ({
        ...category,
        faqs: category.faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchTerm) ||
            faq.answer.toLowerCase().includes(searchTerm),
        ),
      }))
      .filter((category) => category.faqs.length > 0);
  }, [inputValue]);

  // Highlight matching text
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;

    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedTerm})`, "gi");

    // Use dangerouslySetInnerHTML to avoid React splitting issues
    const highlightedText = text.replace(
      regex,
      '<mark class="bg-yellow-400/30 text-yellow-200 rounded">$1</mark>',
    );

    return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const clearSearch = () => {
    setInputValue("");
  };

  const isSearching = inputValue.trim().length > 0;
  const hasResults = filteredCategories.length > 0;

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
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-300">
              Masih bingung soal HIMAFI? Tenang, kami bantu jawab di sini!
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <div className="relative">
                <Input
                  value={inputValue}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder={
                    isFocused || inputValue ? "Ajukan pertanyaan..." : ""
                  }
                  className="h-12 border-gray-700 bg-gray-800/80 pl-12 pr-12 text-white shadow-lg backdrop-blur-sm transition-all duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:shadow-xl"
                />
                {inputValue && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400 transition-colors hover:text-gray-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                {!isFocused && !inputValue && allQuestions.length > 0 && (
                  <div className="pointer-events-none absolute left-12 right-4 top-1/2 h-6 -translate-y-1/2 transform overflow-hidden">
                    <div
                      className="transition-transform duration-500 ease-in-out"
                      style={{
                        transform: `translateY(-${currentQuestionIndex * 24}px)`,
                      }}
                    >
                      {allQuestions.map((question, index) => (
                        <div
                          key={index}
                          className="flex h-6 items-center overflow-hidden text-sm text-gray-500"
                          style={{
                            width: "calc(100% - 24px)",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {`Cari: "${question}"`}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Search Results Summary */}
          {isSearching && (
            <div className="mx-auto mt-4 max-w-2xl text-center">
              <p className="text-sm text-gray-400">
                {hasResults ? (
                  <>
                    Ditemukan{" "}
                    {filteredCategories.reduce(
                      (total, category) => total + category.faqs.length,
                      0,
                    )}{" "}
                    hasil untuk{" "}
                    <span className="font-semibold text-white">
                      &quot;{inputValue}&quot;
                    </span>
                  </>
                ) : (
                  <>
                    Tidak ada hasil untuk{" "}
                    <span className="font-semibold text-white">
                      &quot;{inputValue}&quot;
                    </span>
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-8">
          {!hasResults && isSearching ? (
            <Card className="overflow-hidden border-0 border-gray-700 bg-gray-800/80 shadow-xl backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-700">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Tidak ada hasil
                </h3>
                <p className="mb-4 text-gray-400">
                  Kami tidak dapat menemukan FAQ yang cocok dengan pencarian
                  Anda. Coba kata kunci yang berbeda atau jelajahi semua
                  kategori di bawah.
                </p>
                <Button
                  onClick={clearSearch}
                  variant="outline"
                  className="border-gray-600 bg-transparent text-gray-300 hover:bg-gray-700"
                >
                  Hapus pencarian
                </Button>
              </CardContent>
            </Card>
          ) : (
            filteredCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={categoryIndex}
                  className="overflow-hidden border-0 border-gray-700 bg-gray-800/80 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
                >
                  <CardHeader
                    className={`${category.bgColor} relative border-b border-gray-700`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="mt-1 text-gray-400">
                          {isSearching ? (
                            <>{category.faqs.length} pertanyaan yang cocok</>
                          ) : (
                            <>
                              Pertanyaan umum tentang{" "}
                              {category.title.toLowerCase()}
                            </>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                    {/* Decorative gradient */}
                    <div
                      className={`absolute right-0 top-0 h-32 w-32 bg-gradient-to-br ${category.color} -translate-y-8 translate-x-8 rounded-full opacity-10`}
                    ></div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full space-y-2"
                    >
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem
                          key={faqIndex}
                          value={`item-${categoryIndex}-${faqIndex}`}
                          className="rounded-lg border border-gray-700 px-4 transition-colors duration-200 hover:border-gray-600"
                        >
                          <AccordionTrigger className="py-4 text-left font-semibold text-white hover:text-gray-200">
                            {isSearching
                              ? highlightText(faq.question, inputValue)
                              : faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 leading-relaxed text-gray-300">
                            {isSearching
                              ? highlightText(faq.answer, inputValue)
                              : faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Contact Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <Card className="overflow-hidden border-0 border-gray-700 bg-gradient-to-r from-gray-800/80 via-gray-800/90 to-gray-800/80 shadow-2xl">
            <CardHeader className="relative pb-6 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-3xl font-bold text-transparent">
                  Masih ada pertanyaan?
                </CardTitle>
                <CardDescription className="mt-2 text-lg text-gray-400">
                  Tidak menemukan yang Anda cari? Kami siap membantu Anda!
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="flex h-12 items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 px-8 shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-rose-600 hover:shadow-xl">
                  <Instagram className="h-5 w-5" />
                  Follow Instagram
                </Button>
                <Button className="flex h-12 items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-500 px-8 shadow-lg transition-all duration-300 hover:from-sky-600 hover:to-blue-600 hover:shadow-xl">
                  <Twitter className="h-5 w-5" />
                  Follow Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex h-12 items-center gap-3 border-2 border-gray-600 bg-gray-800 px-8 text-gray-200 shadow-lg transition-all duration-300 hover:border-gray-500 hover:bg-gray-700 hover:shadow-xl"
                >
                  <Mail className="h-5 w-5" />
                  Email Support
                </Button>
              </div>
              <div className="mt-6 rounded-lg border border-gray-600 bg-gray-700/60 p-4 text-center">
                <p className="text-sm font-medium text-gray-300">
                  📱 Hubungi kami melalui media sosial atau email
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
