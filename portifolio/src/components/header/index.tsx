"use client";

import { CodeXml, Files, FileText, Github, Linkedin} from "lucide-react"
import { useState } from "react"
import { ContactMe } from "../contactMe/contactMe";
import { TextHeaderArea } from "../textHeaderArea/textHeaderArea";

export const Header = () => {
    return(
        <header className="mt-32 p-3">
            <TextHeaderArea/>
            <ContactMe/>
        </header>
    )
}