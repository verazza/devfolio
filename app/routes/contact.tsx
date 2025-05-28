import { createRoute } from 'honox/factory';
import ContactContent from '../islands/ContactContent';
import CommonHeader from '../islands/CommonHeader';
import { generalMessages } from '../locales/translations';
import contactDataJson from '../../data/contact.json';
import type { ContactMe } from '../types/contact';

const ContactData = contactDataJson as ContactMe;

export default createRoute(async (c) => {
  return c.render(
    <>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl">
        <CommonHeader
          titleContent={generalMessages.contactTitle}
          descriptionContent={generalMessages.contactDescription}
        />
        <ContactContent way={ContactData.way} />
      </div>
    </>
  );
});
