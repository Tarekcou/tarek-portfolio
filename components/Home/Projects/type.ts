// types.ts
import { StaticImageData } from 'next/image'; // Import StaticImageData type from Next.js

export interface Project {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData; // Allow both string and StaticImageData types for image
    techStack: string[];
    link: string;
    githubLink: string;
    challenges: string;
    futurePlans: string;
    tag: string[];
}
