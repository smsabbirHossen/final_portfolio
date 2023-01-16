import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "iuyo1hky",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skvq7Rp4T0BzVAzHQQcw0NzBttr1kSrDZKjtDRozFS8tpxAzwcU5TeGULgAXwmDNFeVMYLn5ADwD671Lo2j2OMML60edxAnaoJ3WfXTQwFNKY1kSV3Uyu5YH6TrI9fsolZWZiT9wLmAvfy6k08ooyOLIGtcVXCUHlt6xrzH71L8Q3YNdgVCb",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
