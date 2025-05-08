declare module '../../data/profile.json' {
  interface Link {
    github?: string;
    x?: string;
    qiita?: string;
    kishax?: Kishax;
    this?: string;
  }

  interface Kishax {
    site?: string;
    discord?: string;
  }

  interface OGP {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  }

  interface Contact {
    email?: string;
  }

  interface ProfileData {
    name: string;
    policy: string;
    title: string;
    og: OGP;
    link: Social;
    contact: Contact;
  }

  const value: ProfileData;
  export default value;
}
