import { SocialMediaLink } from '../components/SocialMediaLink';
import { SiGithub, SiInstagram, SiTiktok } from 'react-icons/si';
import { GrLinkedin } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';

interface AsideProps{
    name: string;
    github: string;
    linkedin: string;
    instagram: string;
    tiktok: string;
    facebook: string;
}

export const Aside = ({name, github, linkedin, instagram, tiktok, facebook}: 
    AsideProps) => {
    return(
        <aside className='w-4/12 p-4'>
            <div className="rounded border-8 p-4 max-w-lg">
                <div className='flex flex-col gap-2 items-center'>
                    <span className='block w-16 h-16 rounded-full bg-blue-200'></span>
                    <h1 className='font-bold'>{name}</h1>
                </div>                            
            
                <ul className='flex gap-2 justify-center '>
                {/*sintaxe de um if */}
                {facebook !== "" && (
                    <li>
                        <SocialMediaLink link={"" + facebook}>
                        <FaFacebook/>
                        </SocialMediaLink>
                    </li>
                )}
            
                {linkedin !== "" && (
                    <li>
                        <SocialMediaLink link={"https://www.linkedin.com/in/gustavo-henrique-da-silva-98496a401/" + linkedin}>
                        <GrLinkedin/>
                        </SocialMediaLink>
                    </li>
                )}
            
                {github !== "" && (
                    <li>
                        <SocialMediaLink link={"https://github.com/Gustavoh345/" + github}>
                        <SiGithub/>
                        </SocialMediaLink>
                    </li>
                )}
            
                {instagram !== "" && (
                    <li>
                        <SocialMediaLink link={"https://www.instagram.com/ntc_m4ster/" + instagram}>
                        <SiInstagram/>
                        </SocialMediaLink>
                    </li>
                )}
            
                {tiktok !== "" && (
                    <li>
                        <SocialMediaLink link={"https://www.tiktok.com/@m4ster069/" + tiktok}>
                        <SiTiktok/>
                        </SocialMediaLink>
                    </li>
                )}
                </ul>
            </div>
        </aside>
        )
}