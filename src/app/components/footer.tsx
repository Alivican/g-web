import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2310b981' fillOpacity='0.15'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 shadow-lg"></div>

      <div className="container relative px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Brand & Social Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src="/LOGO GAMAIS.png"
                    alt="GAMAIS Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    priority
                  />
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 opacity-30 blur"></div>
                </div>
                <div>
                  <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-2xl font-bold text-transparent text-white">
                    GAMAIS ITB
                  </span>
                </div>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-300">
                Keluarga Mahasiswa Islam Institut Teknologi Bandung.
                <br />
                Membangun generasi muslim yang unggul dan berakhlak mulia.
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-6">
              <h3 className="relative text-lg font-semibold text-white">
                Ikuti Kami
                <div className="absolute -bottom-3 left-0 h-0.5 w-16 rounded-full bg-gradient-to-r from-emerald-400 to-green-400"></div>
                <div className="absolute -bottom-3 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-emerald-300 to-green-300 blur-sm"></div>
              </h3>
              <div className="flex space-x-3">
                <Link
                  href="https://www.instagram.com/gamaisitb/?hl=en"
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 hover:shadow-xl hover:shadow-pink-500/25"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-slate-400 transition-colors group-hover:text-white" />
                </Link>
                <Link
                  href="https://x.com/gamaisitb"
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-500/25"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-slate-400 transition-colors group-hover:text-white" />
                </Link>
                <Link
                  href="https://medium.com/gamaisitb"
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-slate-600 hover:to-slate-500 hover:shadow-xl hover:shadow-slate-500/25"
                  aria-label="Medium"
                >
                  <BookOpen className="h-5 w-5 text-slate-400 transition-colors group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="relative text-lg font-semibold text-white">
              Kontak
              <div className="absolute -bottom-3 left-0 h-0.5 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-green-400"></div>
              <div className="absolute -bottom-3 left-0 h-0.5 w-6 rounded-full bg-gradient-to-r from-emerald-300 to-green-300 blur-sm"></div>
            </h3>
            <div className="space-y-5">
              <div className="group flex items-center space-x-4">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/20">
                    <Mail className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-emerald-400/20 opacity-0 blur transition-opacity group-hover:opacity-100"></div>
                </div>
                <span className="text-sm text-slate-300 transition-colors group-hover:text-white">
                  ceritanyaemailgamais@itb.ac.id
                </span>
              </div>
              <div className="group flex items-center space-x-4">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm transition-all duration-300 group-hover:border-green-500/30 group-hover:bg-green-500/20">
                    <Phone className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-green-400/20 opacity-0 blur transition-opacity group-hover:opacity-100"></div>
                </div>
                <span className="text-sm text-slate-300 transition-colors group-hover:text-white">
                  +62 taro nomor di sini
                </span>
              </div>
              <div className="group flex items-center space-x-4">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm transition-all duration-300 group-hover:border-teal-500/30 group-hover:bg-teal-500/20">
                    <MapPin className="h-4 w-4 text-teal-400" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-teal-400/20 opacity-0 blur transition-opacity group-hover:opacity-100"></div>
                </div>
                <span className="text-sm leading-relaxed text-slate-300 transition-colors group-hover:text-white">
                  Jl. Ganesha No.10, Lb. Siliwangi, Coblong, Kota Bandung, Jawa
                  Barat 40132
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-slate-700/50 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} GAMAIS ITB. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>

      {/* Corner Accents */}
      <div className="absolute left-0 top-0 h-32 w-32 rounded-br-full bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-tl-full bg-gradient-to-tl from-green-500/10 to-transparent"></div>
    </footer>
  );
}
