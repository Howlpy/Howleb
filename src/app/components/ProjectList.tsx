import React from 'react'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  url: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    url: '/projects/1',
  },
  {
    id: '2',
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    url: '/projects/2',
  },
  {
    id: '3',
    title: 'Proyecto 3',
    description: 'Descripción del Proyecto 3',
    url: '/projects/3',
  },
]

const ProjectList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.url}
          className="group block p-6 bg-white bg-opacity-5 rounded-lg shadow-lg hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors">{project.description}</p>
          <div className="mt-4 text-blue-400 group-hover:text-blue-300 transition-colors">Ver más →</div>
        </Link>
      ))}
    </div>
  )
}

export default ProjectList

