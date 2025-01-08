import VectorAnimation from './components/VectorAnimation'
import ProjectList from './components/ProjectList'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8 relative">
      <VectorAnimation />
      <h1 className="text-6xl font-extrabold mb-12 mt-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Howl
      </h1>
      <h2 className="text-4xl font-bold mb-8 text-center">Mis Proyectos</h2>
      <ProjectList />
    </main>
  )
}

