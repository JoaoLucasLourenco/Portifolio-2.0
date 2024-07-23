import { Home } from "lucide-react";
import { useRouter } from "next/navigation";



export default function BtnBackHome() {
    const router = useRouter()
    return (
        <button className="
        buttonBackHome
        " 
        onClick={() => router.push('/')}>

            Voltar
            <Home/>

        </button>
  
    );
}