import HomePage from '@components/pages/homePage/HomePage';
import RoutesWrapper from '@components/primitives/routesWrapper/RoutesWrapper';
import { BrowserRouter, Route } from 'react-router-dom';
import ErrorBoundary from '@components/features/errorBoundary/ErrorBoundary';
import { PagePath } from '@routes/appUrls';
import AppContext from '@components/features/appContext/AppContext';
import ProjectsPage from './components/pages/projectsPage/ProjectsPage';
import AboutPage from './components/pages/aboutPage/AboutPage';
import ContactPage from './components/pages/contactPage/ContactPage';

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <ErrorBoundary>
          <RoutesWrapper>
            <Route path='/' element={<HomePage />} />
            <Route path={PagePath.home} element={<HomePage />} />
            <Route path={PagePath.projects} element={<ProjectsPage />} />
            <Route path={PagePath.about} element={<AboutPage />} />
            <Route path={PagePath.contact} element={<ContactPage />} />
          </RoutesWrapper>
        </ErrorBoundary>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
