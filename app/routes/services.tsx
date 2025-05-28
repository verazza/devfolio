import { createRoute } from 'honox/factory';
import profile from '../../data/profile.json';
import type { ProfileSocials } from '../types/profile';
import CommonHeader from '../islands/CommonHeader';
import { generalMessages } from '../locales/translations';
import ServicesContent from '../islands/ServicesContent';

const typedProfile = profile as { social: ProfileSocials };

export default createRoute(async (c) => {
  return c.render(
    <>
      <div class="mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <CommonHeader
          titleContent={generalMessages.servicesTitle}
          descriptionContent={generalMessages.servicesDescription}
        />
        <ServicesContent profile={typedProfile} />
      </div>
    </>
  );
});
