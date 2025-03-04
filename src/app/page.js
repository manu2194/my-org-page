"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center text-center px-6">
      {/* Org Name */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
        VENUTRONICS SMS OPT-IN (BUT NOT REALLY)
      </h1>

      {/* Description */}
      <p className="mt-6 text-lg max-w-xl text-gray-300">
        This webpage exists because <span className="font-bold text-orange-400">AWS, the undisputed king of cloud services</span>,  
        has a very reasonable requirement: If I want to send myself SMS, I need an opt-in page.  
      </p>

      <p className="mt-4 text-lg max-w-xl text-gray-300">
        Could I afford to build my own SMS gateway? <span className="font-bold text-red-500">Absolutely not.</span>  
        So instead, I bow down to the <span className="font-bold text-yellow-400">generous AWS free tier</span> and comply with their rules.  
        My startup dreams may be on hold, but at least my texts will get delivered.
      </p>

      {/* No-Op Button */}
      <button
        className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-600 transition"
        onClick={() => alert("This does nothing. Just like my chances of owning a cloud empire.")}
      >
        Opt In (But It’s Fake)
      </button>

      {/* Extra Disclaimer */}
      <p className="mt-4 text-sm text-gray-500">
        Clicking this does nothing. No one is opting in. No one needs to. But hey, AWS rules are AWS rules.  
      </p>

      {/* Praise AWS */}
      <p className="mt-4 text-xs text-gray-600">
        Shoutout to <span className="font-bold text-blue-400">AWS</span> for enabling tiny developers like me  
        to live out our big cloud dreams… one SMS at a time.
      </p>
    </main>
  );
}