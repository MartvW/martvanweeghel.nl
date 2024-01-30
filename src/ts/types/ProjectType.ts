import { SkillType } from './SkillType';

export type ProjectType = {
    _id: string;
    name: string;
    description: string;
    photo: string;
    url: string;
    isVisible: boolean;
    skills: [SkillType['name']];
};