export type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  imagePath: string;        // path in /public/images/slides/
  type: 'index' | 'work' | 'project' | 'end';
  jumpLabel?: string;       // shown on index slide nav
};

export const slides: Slide[] = [
  {
    id: 'index',
    title: 'The Royal Proceedings',
    subtitle: 'Select a chapter',
    imagePath: '/images/slides/index-slide.webp',
    type: 'index',
  },
  {
    id: 'freelance',
    title: 'Freelance Chronicles',
    subtitle: 'Independent Projects',
    imagePath: '/images/slides/freelance-book.webp',
    type: 'work',
    jumpLabel: 'Freelance Journey',
  },
  {
    id: 'work-history',
    title: 'A Chronicle of Service',
    subtitle: 'My Corporate Journey',
    imagePath: '/images/slides/work-history.webp',
    type: 'work',
    jumpLabel: 'Corporate Experience',
  },
  {
    id: 'end',
    title: 'The Court Adjourns',
    subtitle: 'Summon me',
    imagePath: '/images/slides/end-slide.webp',
    type: 'end',
  },
];
