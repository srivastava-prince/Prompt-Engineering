import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f5f0] text-[#171a18]">

      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-7 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#171a18] text-[#b9f3df] flex items-center justify-center font-bold text-sm">
            P
          </div>

          <span className="font-semibold tracking-tight">
            promptly
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#737874]">
          <a href="#features" className="hover:text-[#171a18] transition">
            Features
          </a>
          <a href="#how" className="hover:text-[#171a18] transition">
            How it works
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-[#555b57] hover:text-[#171a18]"
          >
            Log in
          </Link>

          <Link
            href="/Signup"
            className="bg-[#171a18] text-[#b9f3df] px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#292e2b] transition"
          >
            Get started
          </Link>
        </div>
      </nav>


      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-28">
        <div className="max-w-3xl">

          <div className="flex items-center gap-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-[#159574]" />

            <span className="text-xs font-medium text-[#6d746f]">
              Prompt engineering workspace
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-4px] leading-[0.95]">
            Better prompts.
            <br />
            <span className="text-[#159574]">
              Better results.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base sm:text-lg leading-7 text-[#6f7672]">
            Create, test and improve your AI prompts in one simple
            workspace. Turn rough ideas into instructions that actually work.
          </p>

          <div className="flex items-center gap-3 mt-9">

            <Link
              href="/signup"
              className="bg-[#171a18] text-[#b9f3df] px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#292e2b] transition"
            >
              Start building →
            </Link>

            <Link
              href="/login"
              className="px-6 py-3.5 rounded-xl border border-[#d6d8d2] text-sm font-medium hover:bg-white transition"
            >
              Sign in
            </Link>

          </div>
        </div>


        {/* PROMPT BOX */}
        <div className="mt-20 max-w-5xl mx-auto">

          <div className="rounded-2xl border border-[#dcded8] bg-white shadow-[0_20px_60px_rgba(20,25,22,0.06)] overflow-hidden">

            {/* TOP */}
            <div className="h-12 border-b border-[#e7e8e3] px-5 flex items-center justify-between">

              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#dedfd9]" />
                <span className="w-2 h-2 rounded-full bg-[#dedfd9]" />
                <span className="w-2 h-2 rounded-full bg-[#dedfd9]" />
              </div>

              <span className="text-[10px] tracking-[2px] text-[#a0a5a1] uppercase">
                Prompt playground
              </span>

            </div>


            {/* CONTENT */}
            <div className="grid md:grid-cols-2">

              <div className="p-7 md:p-10 border-b md:border-b-0 md:border-r border-[#e7e8e3]">

                <p className="text-[10px] uppercase tracking-[2px] text-[#159574] font-semibold mb-5">
                  Your prompt
                </p>

                <p className="font-mono text-sm leading-7 text-[#414743]">
                  Act as a product strategist.
                  <br /><br />
                  Analyze this product idea and identify
                  three opportunities for improvement.
                  <br /><br />
                  Keep the response concise and actionable.
                </p>

              </div>


              <div className="p-7 md:p-10 bg-[#fafbf8]">

                <div className="flex justify-between items-center mb-5">

                  <p className="text-[10px] uppercase tracking-[2px] text-[#159574] font-semibold">
                    Output
                  </p>

                  <span className="text-[10px] px-2 py-1 rounded-md bg-[#dff7ee] text-[#16866d]">
                    94 score
                  </span>

                </div>

                <p className="text-sm leading-7 text-[#5d6560]">
                  01 — Simplify the onboarding experience.
                  <br /><br />
                  02 — Introduce personalized recommendations.
                  <br /><br />
                  03 — Create a stronger feedback loop.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* FEATURES */}
      <section
        id="features"
        className="border-t border-[#dedfd9] bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="max-w-xl mb-14">

            <p className="text-xs font-semibold text-[#159574] mb-3">
              WHY PROMPTLY
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-2px]">
              Everything you need to
              <br />
              work better with AI.
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-12">

            <div>
              <span className="text-xs text-[#159574] font-semibold">
                01
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                Build
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#747a76]">
                Create structured prompts with clear instructions,
                context and desired outputs.
              </p>
            </div>


            <div>
              <span className="text-xs text-[#159574] font-semibold">
                02
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                Experiment
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#747a76]">
                Test different instructions and compare how small
                changes affect your results.
              </p>
            </div>


            <div>
              <span className="text-xs text-[#159574] font-semibold">
                03
              </span>

              <h3 className="mt-5 text-lg font-semibold">
                Improve
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#747a76]">
                Save your best prompts and build a reusable library
                for future projects.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* HOW IT WORKS */}
      <section
        id="how"
        className="bg-[#f6f5f0] border-t border-[#dedfd9]"
      >
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-xs font-semibold text-[#159574] mb-4">
                SIMPLE WORKFLOW
              </p>

              <h2 className="text-4xl font-semibold tracking-[-2px] leading-tight">
                From idea
                <br />
                to better output.
              </h2>

              <p className="mt-5 text-sm leading-6 text-[#737974] max-w-md">
                No complicated setup. Just write your idea,
                experiment with it and keep what works.
              </p>

            </div>


            <div className="space-y-0">

              {[
                ["01", "Write your idea"],
                ["02", "Structure your prompt"],
                ["03", "Test the output"],
                ["04", "Save what works"],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="flex items-center gap-6 py-5 border-b border-[#dcded8]"
                >
                  <span className="text-xs text-[#159574] font-semibold">
                    {number}
                  </span>

                  <span className="text-lg font-medium">
                    {text}
                  </span>

                  <span className="ml-auto text-[#a1a7a3]">
                    →
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="px-6 py-24 bg-white border-t border-[#dedfd9]">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-xs font-semibold text-[#159574] mb-4">
            READY?
          </p>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-3px]">
            Start building better prompts.
          </h2>

          <p className="mt-5 text-sm text-[#777d79]">
            Your AI workflow deserves better instructions.
          </p>

          <Link
            href="/signup"
            className="inline-block mt-8 bg-[#171a18] text-[#b9f3df] px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#292e2b] transition"
          >
            Create your workspace →
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-[#dedfd9] bg-[#f6f5f0]">

        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-2">

            <div className="w-7 h-7 rounded-md bg-[#171a18] text-[#b9f3df] flex items-center justify-center text-xs font-bold">
              P
            </div>

            <span className="text-sm font-semibold">
              promptly
            </span>

          </div>

          <p className="text-xs text-[#929793]">
            Prompt Engineering Playground
          </p>

        </div>

      </footer>

    </main>
  );
}