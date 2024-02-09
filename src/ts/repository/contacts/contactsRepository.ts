import { executeGetRequest } from "@api/client";
import { APIPath } from "@routes/appUrls";

export const getContacts = async () => {
  const [promise] = executeGetRequest(APIPath.contacts);
  const result = await promise;
  return result.data;
};
