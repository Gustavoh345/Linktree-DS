import { useState } from 'react';
import { Input } from './Input';
import { Link } from '@tanstack/react-router';
import { SocialMediaLink } from './SocialMediaLink';
import { SiGithub, SiInstagram, SiTiktok } from 'react-icons/si';
import { GrLinkedin } from 'react-icons/gr';
import { Aside } from './Aside';
import { MainEditPage } from './MainEditPage';


{/*interface Link {
    name: string,
    url: string
}*/}

export const EditPage = () => {

    const [name, setName] = useState("Maurício Meireles");

    const [github, setGithub] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [instagram, setInstagram] = useState("")
    const [tiktok, setTiktok] = useState("")
    const [facebook, setFacebook] = useState("")
    {/* este <> serve para modificar/tipar o estado, ja o () serve para modificar o estado inicial, pois quando coloca um valor inicial ele indentifica o que esta ali,
    ex: se tem "" é uma string, se tem [] é uma array, se tem true ou false é um boolean. Entao como ainda n temos o valor inicial para ele saber qual é o tipo de dado
    colocamos entre <> para indicar que tipo de dado será naquele campo */}
    {/*const [links, setLinks] = useState<Link[]>([]);

    const handleAddLink = () => {
        setLinks([...links, {name: "", url:""}]);
        

        const handleLinkChange = (index: number, field: string, value: string) => {
            const updateLinks = [...links];

            updateLinks[index] = {
                ...updateLinks[index],
                [field]: value
            }

            setLinks(updateLinks)
        }
    }*/}

    return (
        <div>
            <div className="container mx-auto flex">
                <MainEditPage
                    name={name}
                    setName={setName}
                    github={github}
                    setGithub={setGithub}
                    linkedin={linkedin}
                    setLinkedin={setLinkedin}
                    instagram={instagram}
                    setInstagram={setInstagram}
                    tiktok={tiktok}
                    setTiktok={setTiktok}
                    facebook={facebook}
                    setFacebook={setFacebook}
                />
                <Aside 
                    name={name}
                    github={github}
                    linkedin={linkedin}
                    instagram={instagram}
                    tiktok={tiktok}
                    facebook={facebook}
                />
            </div>
        </div>
    )
}