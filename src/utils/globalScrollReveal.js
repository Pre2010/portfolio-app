import ScrollReveal from 'scrollreveal';

const isScrollReveal = typeof window !== 'undefined';
const scrollReveal = isScrollReveal ? ScrollReveal() : null;

export default scrollReveal;