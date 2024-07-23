import { Speech, SquareCode } from "lucide-react"

export const SkillCards = () => {
    return(
            <div className="skills">
                <div className="skillCard">
                    <div 
                    className="
                    bg-[var(--color-secondary)]
                    text-text
                    p-3
                    rounded-full
                    ">
                        <Speech size={32}/>
                    </div>
                    
                        
                </div>

                <div className="skillCard">
                    
                    <div 
                    className="
                    bg-[var(--color-secondary)]
                    text-text
                    p-3
                    rounded-full
                    ">
                        <SquareCode size={32}/>
                    </div>
                </div>
            </div>
    )
}