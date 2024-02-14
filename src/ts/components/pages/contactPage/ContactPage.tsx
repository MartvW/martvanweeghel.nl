import Contact from "./components/Contact";
import useFetchContacts from "@hooks/contacts/useFetchContacts";
import { ContactType } from "../../../types/ContactType";
import AlertBox from "@components/primitives/alertBox/AlertBox";

const ContactPage = () => {
  const { contacts } = useFetchContacts();

  return (
    <div className="md:my-24 h-screen w-full flex items-center py-24 md:px-24">
      <div
        id="contact"
        className="w-full h-full flex justify-center items-center flex-col gap-5"
      >
        <h1 className="text-5xl font-thin">Contact</h1>
        <div className="container md:px-10 md:py-10 md:w-3/4 w-full">
          <div className="flex items-center flex-row md:w-full md:justify-evenly justify-center md:gap-5 gap-[25px]">
            {contacts ? (
              contacts?.length > 0 ? (
                contacts?.map((contact: ContactType) => {
                  if (!contact.isVisible) return <div key={contact._id}></div>;
                  return (
                    <Contact
                      key={contact._id}
                      src={contact.icon}
                      alt={contact.name}
                      href={contact.url}
                    />
                  );
                })
              ) : (
                <AlertBox color="orange" message="No contacts found" />
              )
            ) : (
              <AlertBox
                color="red"
                message="Something went wrong. Please try again later."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
