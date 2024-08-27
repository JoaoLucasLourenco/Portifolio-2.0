
import './stylesProjects.css';
import { ChevronRight, Github, Globe } from 'lucide-react';
export const ProjectCards = () =>{
    const imagem1 = "https://github.com/JoaoLucasLourenco/Portifolio/blob/main/summoned.png?raw=true"
    const imagem2 = "https://github.com/JoaoLucasLourenco/Portifolio/blob/main/em-dev.png?raw=true"
    const imagem3 = "https://github.com/JoaoLucasLourenco/Portifolio/blob/main/byte-bite.png?raw=true"

    const handleClick = (String: string) => {
        window.open(String,'_blank','noopener,noreferrer')
      }

    return(
        <main>
            <header
            className='
            text-center
            '
            >
                <h1
                className='font-bold
                mt-20
                p-4
                text-xl'
                >
                    Projetos Recentes
                </h1>
                <h2
                className='
                p-5
                '
                >Aqui estão os projetos em que 
                    estou trabalhando ou trabalhei recentemente.
                    Gostaria de ver mais?
                    <a href='mailto:jao.lucas.lourenco@gmail.com'
                    className='
                    text-primary
                    font-semibold
                    '
                    > Me mande um email</a>
                </h2>
                <main
                >
                <ul>
                    <li className="card-li">
                        <h3>Byte & bite</h3>
                        <img src={imagem3} alt="" />
                        <p>Web app completo com Frontend e Backend, para servir como prontuário
                            eletrônico para os alunos da clínica
                            de odontologia da UNIFENAS, feito com React.js e Styled Components, .NET
                            e MySQL
                        </p>
                        <button className='buttonHeader
                        bg-primary
                        text-white  
                        '
                        onClick={()=>handleClick("https://github.com/JoaoLucasLourenco/OdontoAtex")}
                        >Acessar código
                        </button>
                    </li>
                    <li className="card-li">
                        <h3>Calculadora Postaqui</h3>
                        <img src={imagem2} alt="" />
                        <p>Calculadora online de fretes, feito como teste para estágio na empresa
                            Postaqui utilizando React.js com Styled Components.
                        </p>
                        <button className='buttonHeader
                        bg-primary
                        text-white  
                        '
                        onClick={()=>handleClick("https://github.com/JoaoLucasLourenco/Teste_Postaqui")}
                        >Acessar código
                        </button>
                    </li>
                    <li className="card-li">
                        <h3>Summoned</h3>
                        <img src={imagem1} alt="" />

                        <p>
                            Projeto focado no desenvolvimento de habilidades frontend utilizando Next.js, voltado para jogadores de RPG. O objetivo é criar uma aplicação web moderna e interativa que ofereça uma experiência envolvente para os usuários.
                        </p>
                        <button className='buttonHeader 
                        bg-primary 
                        text-white
                        hover:bg-[var(--color-primary-light)]
                        '
                        
                        onClick={()=>handleClick("https://github.com/JoaoLucasLourenco/summoned     ")}
                        >Acessar código
                        
                        </button>
                        
                    </li>
                    
                    
                </ul>
                </main>


                
            </header>
        </main>
    )
}