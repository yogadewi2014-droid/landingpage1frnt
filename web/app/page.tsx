export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-6 py-24 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              AI Landing Page Generator Indonesia
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Buat Landing Page
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Dalam 1 Menit
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              AI otomatis membuat headline, copywriting, CTA, testimoni,
              FAQ, dan desain landing page modern untuk produk,
              affiliate, UMKM, restoran, jasa, dan personal branding.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30">
                Mulai Generate
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur hover:bg-white/10 transition-all">
                Lihat Demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/60">
              <div>⚡ AI Copywriting</div>
              <div>📱 Mobile First</div>
              <div>🚀 Auto Deploy</div>
              <div>🤖 WhatsApp & Telegram</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-zinc-900 p-4 border border-white/5">
                  <div className="text-sm text-cyan-400">
                    AI Prompt
                  </div>
                  <div className="mt-2 text-white/80">
                    “Buat landing page skincare glowing premium”
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-6 text-white shadow-xl">
                  <div className="text-xs uppercase tracking-widest opacity-80">
                    Generated Landing Page
                  </div>

                  <h2 className="mt-4 text-3xl font-black leading-tight">
                    Wajah Cerah Dalam
                    <br />
                    7 Hari ✨
                  </h2>

                  <p className="mt-4 text-white/80">
                    Formula premium dengan niacinamide & collagen untuk kulit glowing alami.
                  </p>

                  <button className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-black">
                    Order Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black">
              Template Modern Siap Pakai
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
              Cocok untuk affiliate TikTok, Shopee, UMKM, restoran, office, personal branding, dan toko online.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Affiliate TikTok',
                desc: 'Template conversion tinggi untuk affiliate & viral product.'
              },
              {
                title: 'Restaurant & Cafe',
                desc: 'Menu modern, promo, dan CTA WhatsApp otomatis.'
              },
              {
                title: 'Personal Branding',
                desc: 'Portfolio AI modern untuk creator & freelancer.'
              },
              {
                title: 'Office & Agency',
                desc: 'Landing page profesional untuk jasa & perusahaan.'
              },
              {
                title: 'Produk Digital',
                desc: 'Jual ebook, course, dan membership lebih cepat.'
              },
              {
                title: 'AI Toko Mini',
                desc: 'Mini shop dengan checkout WhatsApp & Telegram.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600" />

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Siap Membuat
            <span className="block text-cyan-400">
              Landing Page AI?
            </span>
          </h2>

          <p className="mt-6 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Generate landing page modern langsung dari prompt,
            WhatsApp, atau Telegram dalam hitungan detik.
          </p>

          <button className="mt-10 rounded-2xl bg-cyan-500 px-10 py-5 text-xl font-bold hover:bg-cyan-400 transition-all shadow-2xl shadow-cyan-500/30">
            Mulai Sekarang 🚀
          </button>
        </div>
      </section>
    </main>
  )
}
