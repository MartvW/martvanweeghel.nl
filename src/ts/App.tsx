import HomePage from '@components/pages/homePage/HomePage';
import RoutesWrapper from '@components/primitives/routesWrapper/RoutesWrapper';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import ErrorBoundary from '@components/features/errorBoundary/ErrorBoundary';
import { PagePath } from '@routes/appUrls';
import AppContext from '@components/features/appContext/AppContext';
import ProjectsPage from './components/pages/projectsPage/ProjectsPage';
import AboutPage from './components/pages/aboutPage/AboutPage';
import ContactPage from './components/pages/contactPage/ContactPage';
import NavBar from '@components/features/navBar/NavBar';

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <ErrorBoundary>
          <NavBar>
            <RoutesWrapper>
              <Route path='/' element={<Navigate to={PagePath.home} />} />
              <Route path={PagePath.home} element={<HomePage />} />
              <Route path={PagePath.projects} element={<ProjectsPage />} />
              <Route path={PagePath.about} element={<AboutPage />} />
              <Route path={PagePath.contact} element={<ContactPage />} />
            </RoutesWrapper>
          </NavBar>
        </ErrorBoundary>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
