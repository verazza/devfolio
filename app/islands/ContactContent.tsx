import { usePageLang } from '../hooks/pageLang';
import { translate } from '../utils/i18n';
import { generalMessages } from '../locales/translations';
import type { ContactMe } from '../types/contact';

const ContactMethod = ({
  name,
  href,
  label,
}: {
  name: string;
  href?: string;
  label: string;
}) => {
  return (
    <section class="mt-7 space-y-1 text-center">
      <p class="text-base text-gray-500">{name}</p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-300 hover:text-white transition duration-200"
        >
          {label}
        </a>
      ) : (
        <p class="text-gray-300">{label}</p>
      )}
    </section>
  );
}

function ContactContent({ way }: ContactMe) {
  const { lang } = usePageLang();

  return (
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <ContactMethod
        name="Discord"
        label={`@${way.discord.id}`}
      />
      <ContactMethod
        name="X"
        href={`${way.x.url}/${way.x.id}`}
        label={`@${way.x.id}`}
      />
      <ContactMethod
        name={translate(generalMessages.emailLabel, lang)}
        href={`mailto:${way.direct.email}`}
        label={way.direct.email}
      />
    </div>
  );
}

export default ContactContent;
