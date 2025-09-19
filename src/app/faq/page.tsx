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

export default function FAQPage() {
  const faqCategories = useMemo(
    () => [
      {
        title: "HIMAFI ITB",
        icon: HelpCircle,
        faqs: [
          {
            question: "Apa itu HIMAFI ITB?",
            answer:
              "HIMAFI ITB adalah Himpunan Mahasiswa Fisika Institut Teknologi Bandung, organisasi kemahasiswaan yang mewadahi seluruh mahasiswa Program Studi Fisika ITB sebagai keluarga besar.",
          },
          {
            question: "Siapa saja yang dapat menjadi anggota HIMAFI ITB?",
            answer:
              "Semua mahasiswa aktif Program Studi Fisika ITB secara otomatis menjadi anggota HIMAFI ITB.",
          },
          {
            question: "Apa saja kegiatan rutin HIMAFI ITB?",
            answer:
              "HIMAFI ITB mengadakan berbagai kegiatan rutin seperti tutorial akademik (TUBAY), workshop, seminar, dan kegiatan sosial untuk mempererat hubungan antar mahasiswa.",
          },
        ],
      },
      {
        title: "Keanggotaan & Partisipasi",
        icon: CreditCard,
        faqs: [
          {
            question:
              "Bagaimana cara bergabung dengan kepengurusan HIMAFI ITB?",
            answer:
              "Anda dapat bergabung melalui proses rekrutmen yang biasanya diadakan setiap tahun. Pantau pengumuman resmi di media sosial HIMAFI ITB.",
          },
          {
            question: "Apa keuntungan menjadi bagian dari HIMAFI ITB?",
            answer:
              "Anda dapat bertemu dan belajar dari senior-senior berprestasi, mengembangkan soft skill melalui berbagai kegiatan, dan memperluas jaringan di bidang fisika.",
          },
          {
            question: "Bagaimana cara mengetahui agenda HIMAFI ITB terbaru?",
            answer:
              "Ikuti media sosial resmi HIMAFI ITB atau hubungi mahasiswa senior terdekat untuk informasi terkini mengenai agenda dan kegiatan.",
          },
        ],
      },
      {
        title: "Kegiatan Akademik & Non-Akademik",
        icon: Settings,
        faqs: [
          {
            question:
              "Apakah HIMAFI ITB menyelenggarakan kegiatan akademik seperti tutoring atau diskusi ilmiah?",
            answer:
              "Ya, HIMAFI ITB menyelenggarakan program TUBAY (Tutorial Bayar) dan berbagai diskusi ilmiah untuk membantu mahasiswa dalam bidang akademik.",
          },
          {
            question: "Apa saja acara yang diadakan HIMAFI ITB?",
            answer:
              "HIMAFI ITB mengadakan berbagai acara seperti EUREKA (event tahunan terbesar), workshop, seminar, kompetisi fisika, dan kegiatan sosial lainnya.",
          },
          {
            question:
              "Apakah HIMAFI ITB bekerja sama dengan himpunan atau institusi lain?",
            answer:
              "Ya, HIMAFI ITB aktif berkolaborasi dengan himpunan mahasiswa lain di ITB maupun institusi eksternal untuk berbagai kegiatan dan program.",
          },
          {
            question:
              "Bagaimana saya bisa ikut serta dalam lomba atau seminar yang diadakan HIMAFI ITB?",
            answer:
              "Informasi pendaftaran biasanya diumumkan melalui media sosial resmi HIMAFI ITB. Pantau terus untuk mendapatkan informasi terbaru.",
          },
        ],
      },
      {
        title: "Administratif & Layanan",
        icon: Zap,
        faqs: [
          {
            question:
              "Bagaimana cara meminjam barang atau ruangan melalui HIMAFI?",
            answer:
              "Hubungi pengurus HIMAFI ITB terkait dan ajukan permohonan peminjaman sesuai dengan prosedur yang berlaku.",
          },
          {
            question:
              "Apakah HIMAFI menyediakan dokumen atau arsip kegiatan terdahulu?",
            answer:
              "HIMAFI ITB menyimpan arsip kegiatan. Untuk mengakses dokumen tertentu, silakan hubungi bagian kesekretariatan.",
          },
          {
            question:
              "Apakah HIMAFI menyediakan bantuan akademik atau advokasi mahasiswa?",
            answer:
              "Ya, HIMAFI ITB menyediakan berbagai bentuk bantuan akademik dan dapat membantu dalam hal advokasi mahasiswa jika diperlukan.",
          },
        ],
      },
    ],
    [],
  );

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
  }, [inputValue, faqCategories]);

  // Highlight matching text
  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;

    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedTerm})`, "gi");

    // Use dangerouslySetInnerHTML to avoid React splitting issues
    const highlightedText = text.replace(
      regex,
      '<mark class="bg-primary/20 text-primary rounded">$1</mark>',
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
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex h-[60vh] flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-transparent text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary">
          <HelpCircle className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Masih bingung soal HIMAFI? Tenang, kami bantu jawab di sini!
        </p>

        {/* Search Bar */}
        <div className="mx-auto mt-8 w-full max-w-2xl px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 transform text-muted-foreground" />
            <div className="relative">
              <Input
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={
                  isFocused || inputValue ? "Ajukan pertanyaan..." : ""
                }
                className="h-12 pl-12 pr-12"
              />
              {inputValue && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transform text-muted-foreground transition-colors hover:text-foreground"
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
                        className="flex h-6 items-center overflow-hidden text-sm text-muted-foreground"
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

          {/* Search Results Summary */}
          {isSearching && (
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                {hasResults ? (
                  <>
                    Ditemukan{" "}
                    {filteredCategories.reduce(
                      (total, category) => total + category.faqs.length,
                      0,
                    )}{" "}
                    hasil untuk{" "}
                    <span className="font-semibold text-foreground">
                      &quot;{inputValue}&quot;
                    </span>
                  </>
                ) : (
                  <>
                    Tidak ada hasil untuk{" "}
                    <span className="font-semibold text-foreground">
                      &quot;{inputValue}&quot;
                    </span>
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-4 py-16 md:px-20">
        <div className="mx-auto max-w-5xl space-y-8">
          {!hasResults && isSearching ? (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Tidak ada hasil</h3>
                <p className="mb-4 text-muted-foreground">
                  Kami tidak dapat menemukan FAQ yang cocok dengan pencarian
                  Anda. Coba kata kunci yang berbeda atau jelajahi semua
                  kategori di bawah.
                </p>
                <Button onClick={clearSearch} variant="outline">
                  Hapus pencarian
                </Button>
              </CardContent>
            </Card>
          ) : (
            filteredCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">
                          {category.title}
                        </CardTitle>
                        <CardDescription>
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
                          className="rounded-lg border px-4"
                        >
                          <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                            {isSearching
                              ? highlightText(faq.question, inputValue)
                              : faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 text-muted-foreground">
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
      </section>

      {/* Contact Section */}
      <section className="bg-muted/40 px-4 py-16 md:px-20">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl font-bold">
                Masih ada pertanyaan?
              </CardTitle>
              <CardDescription className="mt-2 text-lg">
                Tidak menemukan yang Anda cari? Kami siap membantu Anda!
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="flex h-12 items-center gap-3 px-8">
                  <Instagram className="h-5 w-5" />
                  Follow Instagram
                </Button>
                <Button className="flex h-12 items-center gap-3 px-8">
                  <Twitter className="h-5 w-5" />
                  Follow Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex h-12 items-center gap-3 px-8"
                >
                  <Mail className="h-5 w-5" />
                  Email Support
                </Button>
              </div>
              <div className="mt-6 rounded-lg border bg-muted/50 p-4 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  📱 Hubungi kami melalui media sosial atau email
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
