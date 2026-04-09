export type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  imagePath: string;
  type: 'index' | 'work' | 'project' | 'end';
  jumpLabel?: string;
};

export const slides: Slide[] = [
  {
    id: 'index',
    title: 'The Royal Proceedings',
    subtitle: 'Select a chapter',
    imagePath: '/images/slides/Main Website slides.jpg',
    type: 'index',
  },
  {
    id: 'left',
    title: 'Freelance Chronicles',
    subtitle: 'Independent Projects',
    imagePath: '/images/slides/leftside slide .gif',
    type: 'work',
    jumpLabel: 'Freelance Journey',
  },
  {
    id: 'right',
    title: 'A Chronicle of Service',
    subtitle: 'My Corporate Journey',
    imagePath: '/images/slides/right side slide.svg',
    type: 'work',
    jumpLabel: 'Corporate Experience',
  },
];
