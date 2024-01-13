import qs from "qs";
import { getStrapiURL } from "./api-helpers";
import { token } from "@/utils";

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    return await response.json();
  } catch (error) {
    console.error(error);
    // throw new Error(
    //   `Please check if your server is running and you set all the required tokens.`
    // );
  }
}
