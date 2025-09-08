const Hero = () => {
  return (
    <section className="grid max-w-7xl grid-cols-1 items-center gap-6 px-6 py-12 lg:grid-cols-[1fr_1fr]">
      <div>
        <h1 className="font-heading text-5xl lg:text-6xl">
          Premium English & Humanities Tutition by{" "}
          <span className="text-sage">Ex-MOE Teacher</span>
        </h1>
        <p className="my-6 text-base text-zinc-500 xl:text-lg">
          Boutique small group classes (max 6-8 students) in our cosy learning
          space. Join Singapore's most trusted English and Humanities tuition
          for Primary and Secondary subjects.
        </p>
      </div>

      <div className="grid min-w-full max-w-full place-items-center">
        <div className="group relative isolate">
          <img
            src="https://placehold.co/800x600"
            alt="Wunderlearn"
            className="relative z-10 rounded-xl object-contain"
          />

          <div className="-top-3 -right-3 absolute hidden w-[30%] justify-end rounded-xl bg-navy-dark p-4 text-right text-white transition-transform duration-300 sm:flex 2xl:group-hover:translate-x-[44%]">
            <div className="overflow-hidden">
              <p className="font-heading text-lg">English</p>
              <p className="text-xs opacity-75">Literature</p>
              <p className="text-xs opacity-75">Language</p>
            </div>
          </div>

          <div className="-bottom-3 -left-3 2xl:group-hover:-translate-x-[60%] absolute hidden w-[30%] items-end rounded-xl bg-sage p-4 text-white transition-transform duration-300 sm:flex">
            <div className="overflow-hidden">
              <p className="font-heading text-lg">Humanities</p>
              <p className="text-xs opacity-75">History</p>
              <p className="text-xs opacity-75">Geography</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
