"use client";

import { useState } from "react";
import { Calendar, MapPin, ArrowDown, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TemplateProps {
  groomName: string;
  brideName: string;
  date: Date;
  location: string;
  coverImageUrl?: string;
}

export default function ModernTemplate({
  groomName,
  brideName,
  date,
  location,
  coverImageUrl,
}: TemplateProps) {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const dateString = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);

  const timeString = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);

  const imageSrc =
    coverImageUrl ||
    "https://images.unsplash.com/photo-1583934555972-94e449b5ba31?q=80&w=987&auto=format&fit=crop";

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Konfirmasi kehadiran Anda telah tersimpan.");
    setIsRsvpOpen(false);
  };

  return (
    <div className="mx-auto min-h-screen w-full max-w-md bg-[#F8F5F2] text-[#2A2A2A] shadow-2xl relative overflow-hidden font-sans">
      <section className="relative min-h-screen bg-[#2A2A2A] text-[#F8F5F2] flex flex-col">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-80 aspect-3/4 overflow-hidden rounded-b-[12rem] bg-stone-800"
        >
          <Image
            src={imageSrc}
            alt="Couple Photo"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#2A2A2A]/60 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center items-center text-center p-8 -mt-16 z-10 relative"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-6 opacity-80 font-medium">
            The Wedding Celebration
          </p>
          <h1 className="font-serif text-6xl leading-none tracking-tight mb-6">
            <span className="block">{groomName}</span>
            <span className="block text-4xl italic font-light text-stone-400 my-2">
              &
            </span>
            <span className="block">{brideName}</span>
          </h1>
          <div className="inline-block border-y border-stone-600 py-2 px-6 mt-4">
            <p className="text-lg tracking-widest font-medium">{dateString}</p>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 opacity-50"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      <section className="px-8 py-20 bg-[#F8F5F2] rounded-t-[3rem] -mt-10 relative z-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif italic text-xl text-stone-500 mb-10"
        >
          "We invite you to share in our joy."
        </motion.p>
        <div className="space-y-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#F8F5F2] mb-4">
              <Calendar size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-2">
              Waktu Acara
            </h3>
            <p className="text-xl font-serif">
              {new Intl.DateTimeFormat("id-ID", { dateStyle: "full" }).format(
                date,
              )}
            </p>
            <p className="text-stone-500 mt-1">{timeString}</p>
          </div>
          <div className="w-full h-px bg-stone-200"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#F8F5F2] mb-4">
              <MapPin size={20} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-2">
              Lokasi
            </h3>
            <p className="text-lg font-serif leading-relaxed max-w-xs mx-auto">
              {location}
            </p>
            <button className="mt-6 text-sm border-b-2 border-[#2A2A2A] pb-1 font-medium hover:text-stone-600 transition-all">
              LIHAT DI GOOGLE MAPS
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#2A2A2A] text-[#F8F5F2] py-16 px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl mb-6">Are You Coming?</h2>
          <button
            onClick={() => setIsRsvpOpen(true)} // Buka modal saat diklik
            className="w-full bg-[#F8F5F2] text-[#2A2A2A] py-4 rounded-full text-lg font-bold tracking-wide hover:bg-stone-200 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
          >
            KONFIRMASI KEHADIRAN
          </button>
        </motion.div>
      </section>

      <AnimatePresence>
        {isRsvpOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center">
            {/* Background Overlay yang bisa diklik buat nutup */}
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
              className="relative w-full max-w-md bg-[#F8F5F2] rounded-t-4xl sm:rounded-4xl p-8 shadow-2xl"
            >
              <button
                onClick={() => setIsRsvpOpen(false)}
                className="absolute right-6 top-6 text-stone-400 hover:text-[#2A2A2A] transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="font-serif text-3xl text-[#2A2A2A] mb-2">RSVP</h3>
              <p className="text-stone-500 mb-6 text-sm">
                Mohon konfirmasi kehadiran Anda di bawah ini.
              </p>

              <form onSubmit={handleRsvpSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#2A2A2A] mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A2A2A] transition-all"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#2A2A2A] mb-2">
                    Kehadiran
                  </label>
                  <select
                    name="status"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A2A2A] transition-all"
                  >
                    <option value="ATTENDING">Ya, Saya Akan Hadir</option>
                    <option value="DECLINED">Maaf, Tidak Bisa Hadir</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#2A2A2A] mb-2">
                    Jumlah Kehadiran
                  </label>
                  <select
                    name="pax"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2A2A2A] transition-all"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2A2A2A] text-[#F8F5F2] mt-6 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-black active:scale-95 transition-all shadow-lg"
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
