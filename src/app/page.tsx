export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 border-b border-cyber-accent/20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-cyber-accent">Grinsel</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <section className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Digital Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Apps, tools and creative software by Marc Schmelzer
            </p>
          </section>

          {/* Projects Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cosplay Digital Gadgets */}
            <a
              href="/gadgets/"
              className="bg-cyber-darker border border-cyber-accent/20 rounded-lg p-8 card-hover block"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Cosplay Digital Gadgets
              </h3>
              <p className="text-gray-400 mb-4">
                Free Android apps for cosplay &amp; roleplay. Motion trackers, scanners, hacking terminals and more.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-cyber-accent/20 text-cyber-accent text-xs rounded">Android</span>
                <span className="px-2 py-1 bg-cyber-accent/20 text-cyber-accent text-xs rounded">Cosplay</span>
                <span className="px-2 py-1 bg-cyber-accent/20 text-cyber-accent text-xs rounded">Free</span>
              </div>
              <span className="text-cyber-accent font-semibold">
                Explore Gadgets →
              </span>
            </a>

            {/* Tablecast TTV - Coming Soon */}
            <div className="bg-cyber-darker border border-cyber-blue/20 rounded-lg p-8 opacity-60">
              <div className="text-4xl mb-4">🎲</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Tablecast TTV
              </h3>
              <p className="text-gray-400 mb-4">
                Tabletop streaming tools and utilities for content creators. Coming soon.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded">Tabletop</span>
                <span className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded">Streaming</span>
              </div>
              <span className="text-gray-500 font-semibold">
                Coming Soon
              </span>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyber-accent/20">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} Grinsel / Marc Schmelzer
          </p>
          <div className="flex justify-center gap-4">
            <a href="/gadgets/impressum/" className="hover:text-cyber-accent transition-colors">
              Legal Notice
            </a>
            <a href="/gadgets/privacy/" className="hover:text-cyber-accent transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
