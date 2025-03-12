const PROJECTS: {
    name: string
    description: string
    previewImage: string
    repoUrl: string
    liveLink: string
}[] = [
        {
            name: 'Eczanerede',
            description: 'A mobile-first web application to help users find nearest open and on-duty pharmacies in Turkish cities.',
            liveLink: 'https://eczanerede.com',
            previewImage: '/eczanerede.png',
            repoUrl: 'https://github.com/gidorah/PharmacyOnDuty',
        },
        {
            name: 'Kaiyo Backend',
            description: 'Backend system maintenance for Kaiyo, an online marketplace for sustainable furniture.',
            liveLink: 'https://kaiyo.com',
            previewImage: '/kaiyo.png',
            repoUrl: '',
        },
        {
            name: 'Canaca CRM',
            description: 'CRM tool for CNC machine salesmen to track customer meetings, generate quotes, and record competitor pricing.',
            liveLink: '',
            previewImage: '/canaca.png',
            repoUrl: '',
        },
        {
            name: 'AIMAR',
            description: 'AI Based Monitoring, Analysis and Recording Platform for railway sensor data. A high-performance desktop application processing up to 10,000 data points per second.',
            liveLink: '',
            previewImage: '/aimar.png',
            repoUrl: '',
        },
        {
            name: 'YAÇS',
            description: 'Combat simulator for Police Special Forces featuring a novel shot detection system combining location tracking and image processing.',
            liveLink: '',
            previewImage: '/yacs.png',
            repoUrl: '',
        },
        {
            name: 'E-5000 Locomotive Simulator',
            description: 'Engineering simulator for testing Train Control and Management Systems (TCMS) on the E-5000 locomotive, a joint project between Tubitak MAM and Tülomsaş.',
            liveLink: 'https://www.savronik.com.tr/en/solutions/simulation-solutions/train-engineering-simulator/',
            previewImage: '/e5000.png',
            repoUrl: '',
        },
        {
            name: 'TSIM',
            description: 'Multi-purpose console-type simulator system for Turkish State Railways (TCDD) with event-driven distributed architecture supporting multiple train types and scenarios.',
            liveLink: 'https://www.savronik.com.tr/en/solutions/simulation-solutions/train-simulator/',
            previewImage: '/tsim.png',
            repoUrl: '',
        },
        {
            name: 'ATESIM',
            description: 'Shooting simulator designed for Turkish Special Forces.',
            liveLink: 'https://www.savronik.com.tr/en/solutions/simulation-solutions/shooting-simulator/',
            previewImage: '/atesim.png',
            repoUrl: '',
        },
    ]

export default PROJECTS