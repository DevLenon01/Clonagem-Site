export default function Features() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Layout Fiel</h3>
        <p>Estrutura visual e tipográfica baseada no site original, com componentes reutilizáveis.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">100% Responsivo</h3>
        <p>Mobile-first com grid flexível e otimização para vários tamanhos de tela.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">HTML + CSS</h3>
        <p>HTML semântico e classes CSS com Tailwind + personalizações para fidelidade visual.</p>
      </div>
    </section>
  )
}