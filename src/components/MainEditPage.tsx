import { useState } from 'react';
import { Input } from './Input';
import { Link } from '@tanstack/react-router';

interface MainEditPageProps{
    name: string,
    setName: (value: string) => void;

    github: string,
    setGithub: (value: string) => void;

    linkedin: string,
    setLinkedin: (value: string) => void;

    instagram: string,
    setInstagram: (value: string) => void;

    tiktok: string,
    setTiktok: (value: string) => void;

    facebook: string;
    setFacebook: (value: string) => void;
}

{/*interface Link {
    name: string,
    url: string
}*/}

export const MainEditPage = ({name, setName, github, setGithub, linkedin, setLinkedin, instagram, setInstagram, tiktok, setTiktok, facebook, setFacebook}:
    MainEditPageProps) => {

        
    
    return (
        <main className="w-8/12  p-4">
            <form className='space-y-4' onSubmit={(event) => {event.preventDefault()}}>
            <Input name="Nome" id='name' placeholder='Digite seu nome' value={name} onChange={(event) => { setName(event.target.value); }} />
            <Input 
                name='Facebook' 
                id='facebook' 
                placeholder='Facebook' 
                value={facebook} 
                onChange={(event) => {setFacebook(event.target.value);
            }}/>

            <Input 
                name='Linkedin' 
                id='linkedin' 
                placeholder='Linkedin' 
                value={linkedin} 
                onChange={(event) => {setLinkedin(event.target.value);
            }}/>

            <Input 
                name='GitHub' 
                id='GitHub' 
                placeholder='GitHub' 
                value={github} 
                onChange={(event) => {setGithub(event.target.value);
            }}/>

            <Input 
                name='Instagram' 
                id='instagram' 
                placeholder='Instagram' 
                value={instagram} 
                onChange={(event) => {setInstagram(event.target.value);
            }}/>

            <Input 
                name='Tiktok' 
                id='tiktok' 
                placeholder='TikTok' 
                value={tiktok} 
                onChange={(event) => {setTiktok(event.target.value);
            }}/>

            {/* este grid-cols-4 serve para indicar quantos componentes terão um ao lado do outro */}
                <div className='grid grid-cols-4  gap-4'>
                        <Input name='Linkedin' id='Linkedin' placeholder='Linkedin' />
                        <Input name='Instagram' id='Instagram' placeholder='Instagram' />
                        <Input name='Facebook' id='Facebook' placeholder='Facebook' />
                        <Input name='TikTok' id='TikTok' placeholder='TikTok' />
                </div>

                {/* o link(1° valor) seria o valor que sera dado, o index(2° valor) é a posição do valor no array, que seria o [] da const "([])"*/}
                    <div className='space-y-4'>
                        {
                        links.map((link, index) => {
                        return (
                            <div className='flex gap-4'>
                                <Input
                                    name={"Nome do link" + (index + 1)}
                                    id={"Link-" + index}
                                    value={link.name}
                                    placeholder='Ex: Portifólio'
                                    onChange={(event) => {handleLinkChange(index, "name", event.target.value)}}
                                />
                                <Input
                                    name={"URL do Link"}
                                    id={"Link-url-" + index}
                                    value={link.url}
                                    placeholder='Ex: https://meusite.com'
                                    onChange={(event) => {handleLinkChange(index, "url", event.target.value)}}
                                />
                            </div>)
                            })
                        }

                        <button onClick={handleAddLink} className='bg-white rounded-2xl cursor-pointer uppercase px-4 py-2 hover:opacity-80 transition-opacity duration-700'>Adicionar link</button>
                    </div>
            </form>
        </main>)
}