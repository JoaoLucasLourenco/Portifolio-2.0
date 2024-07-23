'use client'

import { useRouter } from "next/navigation";



export default function Projects() {
    const router = useRouter()
    return (
      
      <main className="flex justify-center">
        <button className="buttonHeader" onClick={() => router.push('/')}>voltar para pagina principal</button>
        projects
      </main>
  
    );
  }