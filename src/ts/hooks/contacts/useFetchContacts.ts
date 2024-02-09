import { getContacts } from "@repository/contacts/contactsRepository";
import { useQuery } from "react-query";

const useFetchContacts = () => {
  const { data, isLoading, isError } = useQuery(["contacts"], () =>
    getContacts()
  );
  return { contacts: data, isLoading, isError };
};

export default useFetchContacts;
