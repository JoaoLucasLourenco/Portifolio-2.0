'use client'

import BtnBackHome from "@/components/buttonBackHome/buttonBackHome";
import { SkillCards } from "@/components/skillsCards/skillsCards";
import { TextAboutMe } from "@/components/textAboutMe/textAboutMe";


export default function AboutMe() {
    return (
        <>
        <BtnBackHome/>
        <TextAboutMe/>
        <SkillCards/>
        </>
    );
}