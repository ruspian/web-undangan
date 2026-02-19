"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ikon hamburger buat mobile
import { useUIStore } from "@/store/useUIStore";

export default function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 tracking-tight"
        >
          Nex<span className="text-blue-600">Invite</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/templates"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Templates
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Fitur
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Harga
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-900 hover:text-blue-600"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-all"
          >
            Buat Undangan
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-transform"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 shadow-lg flex flex-col gap-4">
          <Link
            href="/templates"
            onClick={closeMobileMenu}
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            Templates
          </Link>
          <Link
            href="/features"
            onClick={closeMobileMenu}
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            Fitur
          </Link>
          <Link
            href="/pricing"
            onClick={closeMobileMenu}
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            Harga
          </Link>
          <div className="h-px w-full bg-gray-100 my-2"></div>{" "}
          <Link
            href="/login"
            onClick={closeMobileMenu}
            className="text-sm font-medium text-gray-900 hover:text-blue-600"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            onClick={closeMobileMenu}
            className="w-full text-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Buat Undangan
          </Link>
        </div>
      )}
    </nav>
  );
}
