import ErrorBoundary from "@components/features/errorBoundary/ErrorBoundary";
import ScrollButtons from "@components/features/scrollButtons/ScrollButtons";
import AboutPage from "@components/pages/aboutPage/AboutPage";
import ContactPage from "@components/pages/contactPage/ContactPage";
import HomePage from "@components/pages/homePage/HomePage";
import ProjectsPage from "@components/pages/projectsPage/ProjectsPage";
import SkillsPage from "@components/pages/skillsPage/SkillsPage";
import Layout from "@components/primitives/layout/Layout";
import Seperator from "@components/primitives/seperator/Seperator";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <Layout>
        <HomePage />
        <Seperator />
        <AboutPage />
        <Seperator />
        <ProjectsPage />
        <Seperator />
        <SkillsPage />
        <Seperator />
        <ContactPage />
        <ScrollButtons />
      </Layout>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default App;
