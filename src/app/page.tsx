

export default function Home() {
  return (
     <section className="px-8 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Hi, I’m Milan 👋
      </h2>

      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Frontend Developer specializing in React & Next.js.
        I build clean, performant user interfaces.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border rounded-lg"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
