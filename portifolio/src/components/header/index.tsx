"use client";

import { CodeXml, Files, FileText, Github, Linkedin} from "lucide-react"
import { useState } from "react"
import { ContactMe } from "../contactMe/contactMe";

export const Header = () => {
    const [emailCopied, setEmailCopied] = useState(false)
    const handleEmailCopy = () =>{
        navigator.clipboard.writeText('jao.lucas.lourenco@gmail.com')
            .then(() => {
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 1000);
            })
    }

    return(
        <header className="mt-32 p-3">
            
            <section className="">

                <ul className="flex gap-5 mb-4">
                    <li className="
                    liHeader
                    hover:bg-purple-600
                    hover:shadow-purple-500
                    ">
                        <a target="_blank" 
                        href="https://github.com/JoaoLucasLourenco" 
                        className="w-full h-full hover:text-[var(--color-white)]">
                            <Github/>
                        </a>
                    </li>

                    <li className="
                    liHeader
                    hover:bg-[var(--color-primary)]
                    hover:shadow-[var(--color-primary)]
                    ">
                        <a target="_blank" 
                        href="https://www.linkedin.com/in/joão-lucas-lourenço-ab87a1259/" 
                        className="w-full h-full hover:text-[var(--color-white)]">
                            <Linkedin />
                        </a>
                    </li>

                    <li className="
                    liHeader
                    hover:bg-[var(--color-secondary)]
                    hover:shadow-[var(--color-secondary)]
                    ">
                        <a target="_blank" 
                        href="./curriculoJoaoLucas.pdf"
                        download
                        className="w-full h-full hover:text-[var(--color-white)]">
                            <FileText/>
                            
                        </a>
                    </li>
                </ul>
                
                <span className="text-lg">Olá, eu sou o João!</span>
                <h1 className="text-2xl font-medium">
                    Desenvolvedor Frontend em busca de experiência profissional
                </h1>
            </section>
            <ContactMe/>


        </header>
    )
}