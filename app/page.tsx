import Link from "next/link";
import { Heart, Sparkles, Smartphone, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pb-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <span className="relative flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-sm font-medium text-rose-600">
              <Sparkles className="h-4 w-4" />
              Platform Undangan Digital Modern
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
            Sebar Momen Bahagiamu dengan{" "}
            <span className="text-rose-500">Elegan & Mudah</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Buat undangan pernikahan digital yang cantik, responsif, dan bagikan
            ke semua orang tersayang hanya dalam hitungan menit. Tanpa ribet,
            tanpa coding.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/register"
              className="group flex items-center gap-2 rounded-full bg-rose-500 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-rose-600  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 transition-all"
            >
              Mulai Sekarang Gratis
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#demo"
              className="text-base font-semibold leading-6 text-gray-900 flex items-center gap-2 hover:text-rose-500 transition-colors"
            >
              <Smartphone className="h-5 w-5" />
              Lihat Demo
            </Link>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </section>
    </main>
  );
}
