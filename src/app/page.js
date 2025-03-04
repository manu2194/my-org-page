export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-r from-orange-500 to-purple-600 text-white min-h-[50vh]">
        <h1 className="text-5xl font-bold">Manu's Smart Home</h1>
        <p className="mt-4 text-lg max-w-xl">
          A fully automated home built just for me—because why not?
        </p>
        <a
          href="#setup"
          className="mt-6 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Explore My Setup
        </a>
      </section>

      {/* Features Section */}
      <section id="setup" className="p-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">What I’ve Automated</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Lights & Ambiance", desc: "Philips Hue, motion sensors, and automation that sets the mood." },
            { title: "Voice Control", desc: "Everything responds to me—whether through Alexa, Google, or shortcuts." },
            { title: "Security & Cameras", desc: "Automated locks, live monitoring, and peace of mind." }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-purple-400">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 p-10 text-center">
        <h2 className="text-4xl font-bold text-purple-400">Why I Did This</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          I love tech, I love efficiency, and honestly, I just wanted to see how far I could take home automation.
          Now, lights adjust themselves, doors unlock when I arrive, and my home runs itself. It’s both practical and fun.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-4xl font-bold text-orange-400">Hit Me Up</h2>
        <p className="mt-4 text-gray-300">
          Want to chat about automation? Email me at{" "}
          <a href="mailto:manu.venugopal1994@gmail.com" className="text-purple-400 font-semibold hover:underline">
            manu.venugopal1994@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
