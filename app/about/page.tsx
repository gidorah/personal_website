import Experience from '@/components/experience-section'
import Skills from '@/components/skills-section'

export default function About() {
    return (
        <div className="font-base">
            <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

            <div className="mb-10 text-base sm:text-lg">
                <p>
                    Full-Stack Developer with 10+ years of proven success in the software development lifecycle,
                    from initial concept to deployment and maintenance. My passion is crafting high-quality,
                    scalable applications using technologies like Python (Flask, Django), React, Next.js, C++, and Qt.
                    I bring expertise in event-driven architectures and real-time data processing to deliver innovative solutions.
                    Beyond technical skills, I pride myself on clear communication and a collaborative approach,
                    ensuring projects are not only well-built but also a positive experience for my clients.
                    I am dedicated to understanding your needs and delivering exceptional results that drive your success.
                </p>
            </div>

            <Skills />

            <Experience />
        </div>
    )
}