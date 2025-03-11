import Image from 'next/image';
import Links from './links';
import { Card } from './ui/card';



export function HeroSection() {
    return (
        <section className="flex  justify-center gap-8">
            <div className="flex flex-col gap-4">
                <h1 className='text-5xl font-semibold'>I'm Onur Akyüz</h1>
                <h2>I craft innovative web solutions.</h2>
                <p className='text-wrap w-80'>Based in Türkiye, I'm a highly skilled and results-oriented Software Engineer with 10+
                    years of experience in designing, developing, and implementing
                    robust and scalable software.</p>
                <Links />
            </div>
            <div>
                <Card className='bg-'>
                    <Image src="/hero-avatar.png" alt="Picture of Onur" width={360} height={640}></Image>
                </Card>

            </div>
        </section>
    )
}