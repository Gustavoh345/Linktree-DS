import { useState } from 'react';
import { Input } from './Input';
import { Link } from '@tanstack/react-router';

interface Link {
    name: string,
    url: string
}

export const EditPage = () => {

    const [name, setName] = useState("Jose");
    {/* este <> serve para modificar/tipar o estado, ja o () serve para modificar o estado inicial, pois quando coloca um valor inicial ele indentifica o que esta ali,
    ex: se tem "" é uma string, se tem [] é uma array, se tem true ou false é um boolean. Entao como ainda n temos o valor inicial para ele saber qual é o tipo de dado
    colocamos entre <> para indicar que tipo de dado será naquele campo */}
    const [links, setLinks] = useState<Link[]>([]);

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
    }

    return (
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 bg-red-600 p-4">
                    <form className='space-y-4' onSubmit={(
                        event?.preventDefault()
                    )}>
                        <Input name="Nome" id='name' placeholder='Digite seu nome' value={name} onChange={(event) => { setName(event.target.value); }} />
                        <Input name='GitHub' id='GitHub' placeholder='GitHub' />

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
                                                name={"Link" + index + 1}
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
                                        </div>


                                    )
                                })
                            }

                            <button onClick={handleAddLink} className='bg-white rounded-2xl cursor-pointer uppercase px-4 py-2 hover:opacity-80 transition-opacity duration-700'>Adicionar link</button>
                        </div>
                    </form>
                </main>

                <aside className="w-4/12 bg-red-300 ">
                    Seu nome: {name}
                </aside>
            </div>
        </div>
    )
}