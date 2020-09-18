module.exports = {
    siteTitle: 'Your name | Job title',
    siteDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    siteKeywords: '',
    siteUrl: '',
    email: '',
    socialMedia: [
        {
            name: 'github',
            url: ''
        },
        {
            name: 'linkedIn',
            url: ''
        }
    ],
    navLinks: [
        {
            name: 'About',
            url: '/#about'
        },
        {
            name: 'Work',
            url: '/#work'
        },
        {
            name: 'Projects',
            url: '/#projects'
        },
        {
            name: 'Contact',
            url: '/#contact'
        },
    ],
    scrollRevealConfig: (origin, delay=200) => ({
        origin,
        distance: '20px',
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
}