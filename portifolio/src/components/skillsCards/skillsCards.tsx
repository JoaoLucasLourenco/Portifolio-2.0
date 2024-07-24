import { Speech, SquareCode } from "lucide-react"
import './styles.css'
export const SkillCards = () => {
    return(
            <div className="skills">
                <div className="skillCard">

                    <div 
                    className="
                    iconSkillCard
                    ">
                        <Speech size={32}/>
                    </div>

                    <h3>Habilidades Comportamentais</h3>
                    <h5>
                        Sempre gostei de interagir com outras pessoas, e desenvolvi isso ainda mais
                        após meus 4 anos de trabalho em equipe e atendimento ao público.
                    </h5>

                    <h6>
                        Minhas habilidades:
                    </h6>
                    <p>
                        Trabalho em equipe, boa comunicação, boa didática, aprendizado rápido e
                        autodidata.
                    </p>

                    <h6>
                        Dados númericos:
                    </h6>
                    <ul>
                        <li>
                            +4 anos de atendimento ao público
                        </li>
                        <li>
                            +4 anos trabalhando em equipe
                        </li>
                        <li>
                            +60 pessoas diferentes com quem trabalhei
                        </li>
                        <li>
                            +6 anos aprendendo diferentes assuntos sendo autodidata
                        </li>
                    </ul>
                </div>

                <div className="skillCard">

                    <div 
                    className="
                    iconSkillCard
                    ">
                        <SquareCode size={32}/>
                    </div>

                    <h3>Habilidades Técnicas</h3>

                    <h5>
                        Gosto de desenvolver projetos que tem ligação com o que experimento no dia
                        a dia, como por exemplo RPG, Discord, Jogos, Faculdade e etc.
                    </h5>

                    <h6>
                        Linguagens e conhecimentos:
                    </h6>

                    <p>
                        Git, Python, C#, Javascript, HTML, CSS, Typescript, React, Next.js, Node.js,
                        APIs REST, Mysql, SQL Server.
                    </p>

                    <h6>
                        Ferramentas que utilizo ou já utilizei:
                    </h6>
                    <ul>
                        <li>
                            Github
                        </li>
                        <li>
                            VS Code
                        </li>
                        <li>
                            Versel
                        </li>
                        <li>
                            Visual Studio
                        </li>
                        <li>
                            Postman
                        </li>
                    </ul>
                </div>
            </div>
    )
}