import Image from 'next/image';
import Links from './links';
import { Card } from './ui/card';



export function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex flex-col gap-4">
                <h1 className='text-5xl font-semibold text-center md:text-left'>I&apos;m Onur Akyüz</h1>
                <h2 className='text-center md:text-left'>I craft innovative web solutions.</h2>
                <p className='text-wrap w-80'>Based in Türkiye, I&apos;m a highly skilled and results-oriented Software Engineer with 10+
                    years of experience in designing, developing, and implementing
                    robust and scalable software.</p>
                <div className='mt-auto'>
                    <Links />
                </div>
            </div>
            <div>
                <Card className='bg-'>
                    <Image src="/hero-avatar.png" alt="Picture of Onur" width={360} height={640}></Image>
                </Card>

            </div>
        </section>
    )
}