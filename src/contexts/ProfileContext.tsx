import React, { createContext, useContext, useState } from "react";
import type { Link } from "../interfaces/Link";

interface ProfileContextsType{
    name: string;
    github: string;
    linkedin: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    links: Link[];
    setName: (name: string) => void;
    setGithub: (github: string) => void;
    setLinkedin: (linkedin: string) => void;
    setInstagram: (instagram: string) => void;
    setTiktok: (tiktok: string) => void;
    setFacebook: (facebook: string) => void;

    handleAddLink: () => void;
    handleLinkChange: (index: number, field: string, value: string) => void;
}

interface ProfileProviderProps{
    children: React.ReactNode;
}

const ProfileContexts = createContext<ProfileContextsType | undefined>({undefined});

export const ProfileProvider = ({children}: ProfileProviderProps) => (){
    const [name, setName] = useState("Maurício Meireles");
    const [github, setGithub] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [instagram, setInstagram] = useState("")
    const [tiktok, setTiktok] = useState("")
    const [facebook, setFacebook] = useState("")

    const [links, setLinks] = useState<Link[]>([]);
            
    const handleAddLink = () => {
        setLinks([...links, {name: "", url:""}]);
    };
                
    
    const handleLinkChange = (index: number, field: string, value: string) => {
        const updateLinks = [...links];
    
        updateLinks[index] = {
            ...updateLinks[index],
            [field]: value
        }
        
        setLinks(updateLinks)
    }

    return(
        <ProfileContexts.Provider value={{name, github , linkedin, instagram, tiktok, facebook,
         setName, setGithub, setLinkedin, setInstagram, setTiktok, setFacebook, 
         handleAddLink, handleLinkChange}}>
            {children}

        </ProfileContexts.Provider>
    )
}

export const useProfile = () => {
    return(
        useContext(ProfileContexts)
    )
}