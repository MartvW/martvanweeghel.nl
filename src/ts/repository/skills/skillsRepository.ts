import { executeGetRequest } from "@api/client";
import { APIPath } from "@routes/appUrls";

export const getSkills = async () => {
  const [promise] = executeGetRequest(APIPath.skills);
  const result = await promise;
  return result.data;
};
