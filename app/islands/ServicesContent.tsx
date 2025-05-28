import { usePageLang } from '../hooks/pageLang';
import { translate } from '../utils/i18n';
import type { ProfileSocials } from '../types/profile';
import { servicesPageStrings } from '../locales/translations';

type ServicesContentProps = {
  profile: {
    social: ProfileSocials;
  };
};

const ServicesContent = ({ profile }: ServicesContentProps) => {
  const { lang } = usePageLang();

  return (
    <section class="mt-12 space-y-12 text-left">
      <article>
        <h2 class="text-2xl font-semibold">{translate(servicesPageStrings.techBlogTitle, lang)}</h2>
        <p class="mt-2 text-gray-300">
          &emsp;{translate(servicesPageStrings.techBlogDescription1, lang)}
          <br />
          {translate(servicesPageStrings.techBlogDescription2, lang)}
        </p>
        <div class="mt-6 flex space-x-4 items-center text-blue-400 leading-none"> {/* text-blue-400 に変更 */}
          <a href="/blog" rel="noopener noreferrer" target="_blank" class="hover:text-blue-300">{translate(servicesPageStrings.readBlog, lang)}</a>
          <span class="text-gray-400 not-italic">{translate(servicesPageStrings.or, lang)}</span>
          <a href={`${profile.social.qiita.url}/${profile.social.qiita.id}`} rel="noopener noreferrer" target="_blank" class="hover:text-blue-300">{translate(servicesPageStrings.readQiita, lang)}</a>
        </div>
      </article>

      <article>
        <h2 class="text-2xl font-semibold">{translate(servicesPageStrings.kishaxTitle, lang)}</h2>
        <p class="mt-2 text-gray-300">
          &emsp;{translate(servicesPageStrings.kishaxDescription1, lang)}
          <br />
          {translate(servicesPageStrings.kishaxDescription2, lang)}
          <br />
          {translate(servicesPageStrings.kishaxDescription3, lang)}
        </p>
        <ul class="mt-2 list-disc list-inside text-gray-400">
          <li>{translate(servicesPageStrings.kishaxFeature1, lang)}</li>
          <li>{translate(servicesPageStrings.kishaxFeature2, lang)}</li>
          <li>{translate(servicesPageStrings.kishaxFeature3, lang)}</li>
          <li>{translate(servicesPageStrings.kishaxFeature4, lang)}</li>
          <li>{translate(servicesPageStrings.kishaxFeature5, lang)}</li>
        </ul>
        <p class="mt-2 text-gray-400">
          {translate(servicesPageStrings.kishaxPortalSite, lang)}<a href={profile.social.kishax.page.url} class="text-blue-400 underline hover:text-blue-300" rel="noopener noreferrer" target="_blank">kishax.net</a>
          <br /><br />
          {translate(servicesPageStrings.kishaxDiscord, lang)}<a href={profile.social.kishax.discord.url} class="text-blue-400 underline hover:text-blue-300" rel="noopener noreferrer" target="_blank">{translate(servicesPageStrings.joinHere, lang)}</a>
        </p>
      </article>
    </section>
  );
};

export default ServicesContent;
