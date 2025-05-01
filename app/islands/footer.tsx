interface FooterProps {
  discord_url: string;
  webapp_git_repo_url: string;
  org_year: string;
  org_name: string;
}

const Footer = ({
  discord_url,
  webapp_git_repo_url,
  org_year,
  org_name,
}: FooterProps) => {
  return (
    <footer class="Footer">
      <div class="gap-flex-logo">
        <a href={discord_url}><img class="logo-image" src="./images/logo/discord/full_logo_blurple_RGB.svg" /></a>
        <a href={webapp_git_repo_url}><img class="git-logo-image" src="./images/logo/github/GitHub_Logo_White.png" /></a>
      </div>
      <small class="Copyright">&copy; {org_year} {org_name}</small>
    </footer>
  );
};

export default Footer;
