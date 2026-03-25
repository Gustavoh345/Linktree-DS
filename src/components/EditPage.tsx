import { useState } from 'react';
import {Input} from './Input';

export const EditPage = () => {

    const [name, setName] = useState("Jose");

    return(
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 bg-red-600 p-4">
                    <form className='space-y-4'>
                        <Input name="Nome" id='name' placeholder='Digite seu nome' value={name} onChange={(event) => {setName(event.target.value);}}/>
                        <Input name='GitHub' id='GitHub' placeholder='GitHub'/>

                        <div className='grid grid-cols-4  gap-4'>
                            <Input name='Linkedin' id='Linkedin' placeholder='Linkedin'/>
                            <Input name='Instagram' id='Instagram' placeholder='Instagram'/>
                            <Input name='Facebook' id='Facebook' placeholder='Facebook'/>
                            <Input name='TikTok' id='TikTok' placeholder='TikTok'/>
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