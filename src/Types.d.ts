type WrapperProps = {
  pageIndex: number;
  children: React.ReactNode;
  className?: string;
};
type NavLink = {
  path: string;
  label: string;
};

type Skills = {
  name: string;
  level: number;
};
type SkillBarProps = {
  skills: Skills[];
};
type ProjectProps = {
  id: number;
  img: string;
  name: string;
  tools: string[];
  liveLink: string;
  githubLink: string;
};
type CountUpProps = {
  start: number;
  end: number;
  duration: number;
};
type countUpItemsProps = {
  id: number;
  number: number;
  text: string;
};


type ContactsProps = {
  id: number;
  title: string;
  text: string;
};

export {
  WrapperProps,
  CountUpProps,
  NavLink,
  SkillBarProps,
  countUpItemsProps,
  ProjectProps,
  ServiceProps,
  ContactsProps,
};
