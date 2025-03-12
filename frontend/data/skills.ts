import {
    type IconType,
    SiCplusplus,
    SiCss3,
    SiDjango,
    SiDocker,
    SiFlask,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiNextdotjs,
    SiNginx,
    SiPostgresql,
    SiPython,
    SiQt,
    SiReact,
    SiRedis,
    SiTailwindcss
} from '@icons-pack/react-simple-icons';

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
    [
        {
            field: "Languages",
            skills: [
                { skill: 'python', icon: SiPython },
                { skill: 'c++', icon: SiCplusplus },
                { skill: 'javascript', icon: SiJavascript },
                { skill: 'html', icon: SiHtml5 },
                { skill: 'css', icon: SiCss3 },
            ],
        },
        {
            field: 'Frontend',
            skills: [
                { skill: 'react', icon: SiReact },
                { skill: 'tailwind', icon: SiTailwindcss },
                { skill: 'nextjs', icon: SiNextdotjs },
                { skill: 'qt', icon: SiQt },
            ],
        },
        {
            field: 'Backend',
            skills: [
                {
                    skill: 'django',
                    icon: SiDjango,
                },
                {
                    skill: 'flask',
                    icon: SiFlask,
                },
                {
                    skill: 'redis',
                    icon: SiRedis,
                },
                {
                    skill: 'postgresql',
                    icon: SiPostgresql,
                },
                {
                    skill: 'mysql',
                    icon: SiMysql,
                },
                {
                    skill: 'nginx',
                    icon: SiNginx,
                },
                {
                    skill: 'docker',
                    icon: SiDocker,
                },
            ],
        },
    ]

export default SKILLS