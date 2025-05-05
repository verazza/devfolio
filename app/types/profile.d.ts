declare module '../../data/profile.json' {
  interface Skill {
    name: string;
    level: string;
  }

  interface Project {
    name: string;
    url: string;
  }

  interface Social {
    github?: string;
    blog?: string;
    twitter?: string;
  }

  interface Contact {
    email?: string;
  }

  interface ProfileData {
    name: string;
    title: string;
    introduction: string;
    skills: Skill[];
    projects: Project[];
    social: Social;
    contact: Contact;
  }

  const value: ProfileData;
  export default value;
}
