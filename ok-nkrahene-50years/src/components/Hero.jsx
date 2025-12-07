import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-0 md:pb-12 pt-8
      bg-[var(--bg)] dark:bg-[var(--surface)] text-[var(--text)] transition-colors duration-300">

      {/* Top curved glow */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-[var(--gold-light)/10] via-transparent to-transparent pointer-events-none"></div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--gold-light)/12,transparent_70%)]"></div>

      {/* Floating sparkles */}
      <div className="pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-[var(--gold-light)] opacity-40 blur-sm animate-float"></div>
        <div className="absolute bottom-28 right-12 w-2 h-2 rounded-full bg-[var(--gold-dark)] opacity-30 blur-[2px] animate-float-delayed"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-12">

        {/* LEFT TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <p className="uppercase tracking-[0.25em] text-[var(--accent)] mb-4 font-semibold text-center md:text-left">
            50th Anniversary Celebration
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center md:text-left">
            Honouring <br/><span className="text-[var(--gold-light)]">50 Years</span><br />
            of Ministry Excellence
          </h1>

          {/* Gold underline shimmer */}
          <div className="mt-3 mb-6 h-1 w-40 bg-gradient-to-r 
            from-[var(--gold-light)] to-[var(--gold-dark)] rounded-full animate-shimmer"></div>

          <p className="text-[var(--muted)] mb-6 text-lg leading-relaxed text-center md:text-left">
            Celebrating the life, impact and unwavering dedication of{" "}
            <span className="font-semibold text-[var(--text)]">
              Rev. O. K. Nkrahene
            </span>{" "}
            — a legacy of leadership, faith, and transformation.
          </p>

          {/* <p className="text-[var(--accent)] font-bold mb-10 text-center md:text-left">
            • Ceremony & Book Launch •<br />
            Friday, 5th December 2025
          </p> */}

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full">
            {/* <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              href="/programme"
              className="px-8 py-3 rounded-full font-semibold w-full sm:w-auto text-center
                bg-[var(--gold-light)] text-black 
                shadow-lg shadow-[var(--gold-light)/30]
                hover:bg-[var(--gold-dark)] transition-all"
            >
              View Programme
            </motion.a> */}

            {/* <motion.a
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              href="testimonials"
              className="px-8 py-3 rounded-full font-semibold w-full sm:w-auto text-center
                border border-[var(--gold-light)]
                hover:bg-[var(--gold-light)] hover:text-black
                transition-all"
            >
              Testimonials
            </motion.a> */}
          </div>
        </motion.div>

        {/* RIGHT PORTRAIT BLOCK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <div className="relative">
            <img
              src="/kente-pic-sm.png"
              alt="Rev. O. K. Nkrahene"
              className="
                        w-[320px] 
                        sm:w-[380px] 
                        md:w-[480px] 
                        lg:w-[520px] 
                        xl:w-[560px]
                        rounded-3xl
                        mx-auto"
            />

            {/* Floating particles */}
            <div className="absolute -right-6 top-12 w-2 h-2 rounded-full bg-[var(--gold-light)] blur-[2px] animate-float-slow"></div>
            <div className="absolute -left-6 bottom-8 w-3 h-3 rounded-full bg-[var(--gold-dark)] blur-[3px] animate-float-slow-delayed"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
