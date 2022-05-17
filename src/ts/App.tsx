import ErrorBoundary from '@components/features/errorBoundary/ErrorBoundary';
import ScrollButtons from '@components/features/scrollButtons/ScrollButtons';
import HomePage from '@components/pages/homePage/HomePage';
import ProjectsPage from '@components/pages/projectsPage/ProjectsPage';
import Layout from '@components/primitives/layout/Layout';
import Seperator from '@components/primitives/seperator/Seperator';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <Layout>
        <HomePage />
        <Seperator />
        <ProjectsPage />
        <ScrollButtons />
      </Layout>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default App;
