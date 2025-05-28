export default function App() {
  return (
    <div className="min-h-screen relative bg-zinc-800 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight font-['Poppins']">
              Leopoldo Miquel
            </h1>

            <p className="text-lg text-white/60 font-['Poppins'] leading-relaxed max-w-md">
              developers, designers, and product managers.
            </p>

            <button className="bg-amber-200 hover:bg-amber-300 transition-colors duration-200 text-zinc-800 px-8 py-3 rounded-2xl text-lg font-['Poppins'] font-medium">
              Ver mas
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[500px] h-[400px] bg-zinc-700 rounded-[20px] absolute inset-0" />
              <img
                className="w-[500px] h-[400px] object-cover rounded-[20px] relative z-10"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration and analytics dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
