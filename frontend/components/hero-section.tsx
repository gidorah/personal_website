import Image from 'next/image';
import Links from './links';
import { Card } from './ui/card';



export function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex flex-col gap-4">
                <h1 className='text-5xl font-semibold text-center md:text-left'>I&apos;m Onur Akyüz</h1>
                <h2 className='text-center md:text-left'>Crafting things for the web</h2>
                <p className='text-center md:text-left text-wrap md:w-80'>Hi, I&apos;m a software engineer from Türkiye with over 10 years of experience in creating practical software solutions. I enjoy solving problems and continuously learning from every project.</p>
                <div className='mt-auto'>
                    <Links />
                </div>
            </div>
            <div>
                <Card>
                    <Image src="/hero-avatar.png" alt="Picture of Onur" width={360} height={640} />
                </Card>

            </div>
        </section>
    )
}