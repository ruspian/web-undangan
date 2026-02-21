"use client";

import { useState } from "react";
import { Calendar, MapPin, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TemplateProps {
  groomName: string;
  brideName: string;
  date: Date;
  location: string;
  coverImageUrl?: string;
}

export default function RusticTemplate({
  groomName,
  brideName,
  date,
  location,
  coverImageUrl,
}: TemplateProps) {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  // Format tanggal: Sabtu, 25 Desember 2026
  const dateFull = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
  }).format(date);
  const timeString = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);

  const imageSrc =
    coverImageUrl ||
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop"; // Foto bernuansa alam/hangat

  // Background texture kertas samar-samar
  const paperTexture =
    "url('https://www.transparenttextures.com/patterns/cream-paper.png')";

  return (
    // Wrapper utama dengan warna krem dan tekstur kertas
    <div
      className="mx-auto min-h-screen w-full max-w-md bg-[#FAF7F0] text-[#5C4B3F] shadow-2xl relative overflow-hidden font-sans"
      style={{ backgroundImage: paperTexture }}
    >
      {/* --- Dekorasi Daun Melayang (Floating Elements) --- */}
      {/* Ceritanya ini daun-daun, nanti bisa diganti gambar PNG daun beneran */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-10 -left-10 w-32 h-32 bg-[#8A9A5B]/30 rounded-full blur-2xl pointer-events-none"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 -right-10 w-40 h-40 bg-[#C4B08F]/30 rounded-full blur-2xl pointer-events-none"
      ></motion.div>

      {/* --- SECTION 1: HERO --- */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center p-8 text-center overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm tracking-[0.3em] uppercase text-[#8A9A5B] font-semibold mb-6 relative z-10"
        >
          The Wedding Of
        </motion.p>

        {/* Foto dengan Masking bentuk Blob Organik */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-64 h-72 mb-8 z-10"
        >
          {/* CSS clip-path untuk bentuk blob */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath:
                "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
              borderRadius: "40% 60% 50% 50% / 50% 50% 60% 40%",
            }}
          >
            <Image
              src={imageSrc}
              alt="Couple"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay warna hangat */}
            <div className="absolute inset-0 bg-[#5C4B3F]/10 mix-blend-overlay"></div>
          </div>
          {/* Border tipis di sekeliling foto */}
          <div
            className="absolute inset-0 border-2 border-[#C4B08F]/50 -m-2 rounded-[40%_60%_50%_50%/50%_50%_60%_40%]"
            style={{
              clipPath:
                "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
            }}
          ></div>
        </motion.div>

        {/* Nama dengan Font Script */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-[--font-pinyon] text-6xl text-[#5C4B3F] relative z-10"
        >
          <span className="block">{groomName}</span>
          <span className="block text-3xl text-[#C4B08F] my-2">&</span>
          <span className="block">{brideName}</span>
        </motion.h1>

        {/* Gelombang pemisah di bawah */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 text-[#FFFFFF]">
          <svg
            className="relative block w-[calc(136%+1.3px)] h-15"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-[#FAF7F0]"
            ></path>
          </svg>
        </div>
      </section>

      {/* --- SECTION 2: DETAILS (Card Style) --- */}
      <section className="px-8 py-16 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm border border-[#C4B08F]/30 rounded-3xl p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.05)]"
        >
          <h2 className="font-[--font-pinyon] text-4xl mb-8 text-[#5C4B3F]">
            Save The Date
          </h2>

          <div className="space-y-8 font-serif">
            <div className="flex flex-col items-center">
              <Calendar className="text-[#8A9A5B] mb-3 h-6 w-6" />
              <p className="text-xl font-semibold">{dateFull}</p>
              <p className="text-[#8A9A5B]">{timeString}</p>
            </div>

            <div className="w-24 h-px bg-[#C4B08F]/50 mx-auto"></div>

            <div className="flex flex-col items-center">
              <MapPin className="text-[#8A9A5B] mb-3 h-6 w-6" />
              <p className="text-lg leading-relaxed">{location}</p>
              <button className="mt-4 text-sm text-[#8A9A5B] font-bold tracking-widest border-b-2 border-[#8A9A5B] pb-1 hover:text-[#5C4B3F] hover:border-[#5C4B3F] transition-all">
                PANDUAN LOKASI
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 3: RSVP --- */}
      <section className="py-16 px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[--font-pinyon] text-4xl mb-6 text-[#5C4B3F]">
            Kehadiran Anda
          </h2>
          <p className="mb-8 text-serif text-[#5C4B3F]/80">
            Merupakan suatu kehormatan bagi kami apabila Anda berkenan hadir dan
            memberikan doa restu.
          </p>
          <button
            onClick={() => setIsRsvpOpen(true)}
            className="bg-[#8A9A5B] text-white py-4 px-10 rounded-full text-lg font-bold tracking-wide hover:bg-[#73824A] hover:shadow-lg transition-all active:scale-95"
          >
            KONFIRMASI KEHADIRAN
          </button>
        </motion.div>
      </section>

      {/* --- MODAL RSVP (Copy-paste dari Modern Template, cuma ganti warna) --- */}
      <AnimatePresence>
        {isRsvpOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#5C4B3F]/60 backdrop-blur-sm sm:items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsRsvpOpen(false)}
              className="absolute inset-0"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-[#FAF7F0] rounded-t-4xl sm:rounded-4xl p-8 shadow-2xl border-t border-[#C4B08F]/30"
            >
              <button
                onClick={() => setIsRsvpOpen(false)}
                className="absolute right-6 top-6 text-[#C4B08F] hover:text-[#5C4B3F] transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="font-serif text-3xl text-[#5C4B3F] mb-2">RSVP</h3>
              <p className="text-[#5C4B3F]/70 mb-6 text-sm font-serif">
                Mohon isi data diri Anda di bawah ini.
              </p>

              <form className="space-y-4 font-serif">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#5C4B3F] mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-[#C4B08F]/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8A9A5B] transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#5C4B3F] mb-2">
                    Kehadiran
                  </label>
                  <select className="w-full bg-white border border-[#C4B08F]/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8A9A5B] transition-all">
                    <option value="ATTENDING">Ya, Tentu Hadir</option>
                    <option value="DECLINED">Maaf, Berhalangan</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5C4B3F] text-[#FAF7F0] mt-6 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-[#4A3B32] active:scale-95 transition-all shadow-lg"
                >
                  KIRIM KONFIRMASI
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
