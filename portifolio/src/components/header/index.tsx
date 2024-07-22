"use client";

import { CodeXml, Files, FileText, Github, Linkedin} from "lucide-react"
import { useState } from "react"

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
                    className="w-full h-full">
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
                    className="w-full h-full">
                        <Linkedin />
                    </a>
                </li>

                <li className="
                liHeader
                hover:bg-[var(--color-secondary)]
                hover:shadow-[var(--color-secondary)]
                ">
                    <a target="_blank" 
                    href="https://www.linkedin.com/in/joão-lucas-lourenço-ab87a1259/" 
                    className="w-full h-full">
                        <FileText/>
                        
                    </a>
                </li>
            </ul>
            
            <span className="text-lg">Olá, eu sou o João!</span>
            <h1 className="text-2xl font-medium">
                Desenvolvedor Frontend em busca de experiência profissional
            </h1>
            </section>


            <section className="mt-5 contactSection">
                <div className="flex gap-3 justify-center flex-wrap text-center">
                    <h3 className="text-xl w-full">
                        Me mande um email!
                    </h3>
                    <span className={`
                        select-none 
                        py-3 
                        px-5 
                        w-3/4 
                        rounded 
                        ${emailCopied ? 'bg-[var(--color-success)]' 
                        : 
                        'bg-[var(--color-paper)]'}`}>
                             {emailCopied ? 'Email Copiado' : 'jao.lucas.lourenco@gmail.com'}
                    </span>
                </div>

                <div className="w-full flex gap-3 mt-8 justify-center flex-wrap">
                    <button className="
                    buttonHeader
                    hover:bg-[var(--color-primary-light)]
                    bg-[var(--color-primary)]
                    hover:shadow-[var(--color-primary-superlight)]
                    shadow-[var(--color-primary-light)]
                    text-white
                    "
                    onClick={handleEmailCopy}
                    >
                        Copiar email <Files/>
                    </button>

                    <button className="
                    buttonHeader
                    hover:bg-[var(--color-primary)]
                    hover:text-white
                    hover:shadow-[var(--color-primary-light)]
                    text-[var(--color-primary)]
                    border
                    border-[var(--color-primary)]
                    ">
                        Ver projetos <CodeXml/>
                    </button>
                </div>
            </section>


        </header>
    )
}