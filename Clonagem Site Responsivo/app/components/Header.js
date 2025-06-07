export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">ClonedSite</h1>
        <nav className="space-x-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-blue-600">Início</a>
          <a href="#" className="hover:text-blue-600">Funcionalidades</a>
          <a href="#" className="hover:text-blue-600">Contato</a>
        </nav>
      </div>
    </header>
  )
}