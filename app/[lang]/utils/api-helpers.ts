import { i18n } from "@/plugins/i18n-config";
import { strapiUrl } from "@/utils";

    export function getStrapiURL(path = '') {
      return strapiUrl+`${path}`;
  }
  
  export function getStrapiMedia(url: string | "") {
      if (url == null) {
          return "";
      }
  
      // Return the full URL if the media is hosted on an external provider
      if (url.startsWith('http') ) {
          return url;
      }
  
      // Otherwise prepend the URL path with the Strapi URL
      return getStrapiURL(url);
  }
  
  export function formatDate(dateString: string) {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(i18n.defaultLocale, options);
  }