import {FileText, Github, Linkedin} from "lucide-react"

export const TextHeaderArea = () => {
    return(
            
            <section className="">

                <ul className="flex gap-5 mb-4">
                    <abbr title="Github">
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
                    </abbr>
                    <abbr title="Linkedin">
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
                    </abbr>
                    <abbr title="Download Currículo">
                    <li className="
                    liHeader
                    hover:bg-[var(--color-secondary)]
                    hover:shadow-[var(--color-secondary)]
                    ">
                        
                        <a target="_blank" 
                        href="./curriculoJoaoLucas.pdf"
                        download
                        className="w-full h-full">
                            <FileText/>
                        </a>
                    </li>
                    </abbr>
                    
                </ul>
                
                <span className="text-lg">Olá, eu sou o João!</span>
                <h1 className="text-2xl font-medium">
                    Desenvolvedor Frontend em busca de experiência profissional
                </h1>
            </section>
    )
}