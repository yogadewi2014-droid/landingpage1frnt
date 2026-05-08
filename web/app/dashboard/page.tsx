'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchAPI } from '../../lib/api-client';

// ========== TYPES ==========
interface PageData {
  headline?: string;
  [key: string]: any;
}

interface Page {
  id: string;
  slug: string;
  data?: PageData;
}

interface GenerateForm {
  title: string;
  template: 'office' | 'restaurant' | 'product' | 'affiliate' | 'personal';
}

interface Notification {
  type: 'success' | 'error';
  message: string;
}

// ========== COMPONENT ==========
export default function Dashboard() {
  // ---------- state ----------
  const [pages, setPages] = useState<Page[]>([]);
  const [loadingPages, setLoadingPages] = useState(true);   // loading awal
  const [generating, setGenerating] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const generatingLock = useRef(false);                     // cegah double submit

  const [form, setForm] = useState<GenerateForm>({
    title: '',
    template: 'office',
  });

  // ---------- helper: tampilkan notifikasi ----------
  const showNotification = useCallback((type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);          // hilang setelah 5 detik
  }, []);

  // ---------- load halaman dari API ----------
  const loadPages = useCallback(async () => {
    try {
      setLoadingPages(true);
      const data = await fetchAPI('/api/pages?userId=guest');
      setPages((data.pages as Page[]) || []);
    } catch (err: any) {
      showNotification('error', 'Gagal memuat halaman. Periksa koneksi Anda.');
      console.error(err);
    } finally {
      setLoadingPages(false);
    }
  }, [showNotification]);

  // panggil sekali saat mount
  useEffect(() => {
    loadPages();
  }, [loadPages]);

  // ---------- generate halaman baru ----------
  const handleGenerate = async () => {
    // validasi minimal panjang judul
    if (form.title.trim().length < 3) {
      showNotification('error', 'Judul minimal 3 karakter.');
      return;
    }

    // cegah double submit
    if (generating || generatingLock.current) return;
    generatingLock.current = true;
    setGenerating(true);

    try {
      const result = await fetchAPI('/api/pages/generate', {
        method: 'POST',
        body: JSON.stringify({
          title: form.title.trim(),
          template: form.template,
          userId: 'guest',
        }),
      });

      const url = result?.url;
      if (!url) throw new Error('Respons API tidak memiliki URL.');

      showNotification('success', `Landing page berhasil dibuat! ${url}`);

      setForm({ title: '', template: 'office' });
      await loadPages();                                    // refresh daftar
    } catch (err: any) {
      const message =
        err?.message && err.message !== 'Failed to fetch'
          ? err.message
          : 'Gagal membuat landing page. Silakan coba lagi.';
      showNotification('error', message);
      console.error(err);
    } finally {
      setGenerating(false);
      generatingLock.current = false;
    }
  };

  // ---------- render ----------
  return (
    <div className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-5xl font-black tracking-tight">
          AI Dashboard Generator
        </h1>

        <p className="mt-3 text-white/60">
          Buat landing page AI modern untuk bisnis, affiliate, UMKM, restoran,
          dan personal branding.
        </p>

        {/* ---------- NOTIFICATION TOAST (pengganti alert) ---------- */}
        {notification && (
          <div
            className={`mt-6 rounded-xl px-4 py-3 text-sm font-medium backdrop-blur-md ${
              notification.type === 'success'
                ? 'border border-emerald-400/30 bg-emerald-500/10 text-emerald-300'
                : 'border border-red-400/30 bg-red-500/10 text-red-300'
            }`}
            role="alert"
          >
            {notification.message}
          </div>
        )}

        {/* ---------- FORM ---------- */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-3xl font-bold">Buat Landing Page Baru</h2>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Judul (contoh: Nasi Goreng Enak)"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="mb-4 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
              minLength={3}
            />

            <select
              value={form.template}
              onChange={(e) =>
                setForm({
                  ...form,
                  template: e.target.value as GenerateForm['template'],
                })
              }
              className="mb-4 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-cyan-400"
            >
              <option value="office">Office / Bisnis</option>
              <option value="restaurant">Restaurant</option>
              <option value="product">Produk</option>
              <option value="affiliate">Affiliate</option>
              <option value="personal">Personal Branding</option>
            </select>

            <button
              onClick={handleGenerate}
              disabled={generating || form.title.trim().length < 3}
              className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-white transition-all hover:bg-cyan-400 disabled:opacity-50"
            >
              {generating ? 'Membuat Landing Page...' : 'Generate Landing Page 🚀'}
            </button>
          </div>
        </div>

        {/* ---------- DAFTAR HALAMAN ---------- */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold">Landing Page Saya</h2>

          {loadingPages ? (
            <div className="mt-5 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-white/60">
              <svg
                className="mr-2 h-5 w-5 animate-spin text-cyan-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Memuat halaman...
            </div>
          ) : pages.length === 0 ? (
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/60">
              Belum ada landing page.
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <strong className="text-xl">
                    {page.data?.headline || page.slug}
                  </strong>

                  <div className="mt-4">
                    <a
                      href={`/p/${encodeURIComponent(page.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-400"
                    >
                      Lihat Landing Page
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
