import './stylesProjects.css';
import { ChevronRight, Github, Globe, Search } from 'lucide-react';
import { projetos } from '@/variables/projects';
import { useState } from 'react';


export const ProjectCards = () =>{
    const imagem1 = "https://github.com/JoaoLucasLourenco/Portifolio/blob/main/summoned.png?raw=true"
    const imagem2 = "https://github.com/JoaoLucasLourenco/Portifolio/blob/main/em-dev.png?raw=true"
    const imagem3 = "https://github.com/JoaoLucasLourenco/Portifolio/blob/main/byte-bite.png?raw=true"
    const [search,setSearch] = useState('');
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
                <main>
                <input 
                className='
                sm:w-4/6
                w-11/12
                rounded-full
                p-2
                mb-5
                text-center
                border
                '
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                placeholder={'Digite o nome de um projeto...'}/>
                    <ul>
                        {projetos.filter((projeto)=>{
                            return search.toLocaleLowerCase() === '' ? projeto : projeto.titulo
                            .toLocaleLowerCase().includes(search)
                        }).map((proj) => (
                            <li className="card-li" key={proj.id}>
                                <h3>{proj.titulo}</h3>
                                <img src={proj.imgSrc} alt="" />

                                <p>
                                    {proj.textoDescritivo}
                                </p>
                                {
                                    proj.urlSite===''?
                                    <></>:
                                    <button className='buttonHeader 
                                    bg-primary 
                                    text-white
                                    hover:bg-[var(--color-primary-light)]
                                    '
                                    
                                    onClick={()=>handleClick(proj.urlSite)}
                                    >Visitar site
                                    </button>
                                }
                                <button className={proj.urlSite===''?'text-white buttonHeader bg-primary hover:bg-[var(--color-primary-light)]'
                                :'buttonHeaderShadowNone'}

                                    onClick={()=>handleClick(proj.urlCodigo)}
                                    >Acessar código
                                </button>
                                
                            </li>
                        ))}
                        
                    </ul>
                </main>


                
            </header>
        </main>
    )
}