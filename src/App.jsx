import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { LandingPage } from './pages/LandingPage';
import { LegalLayout } from './components/layout/LegalLayout';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { TermsOfService } from './components/legal/TermsOfService';
import { AcceptableUsePolicy } from './components/legal/AcceptableUsePolicy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Legal Routes */}
        <Route element={<LegalLayout />}>
          <Route path="/privacy/:type" element={<PrivacyPolicy />} />
          <Route path="/terms/:type" element={<TermsOfService />} />
          <Route path="/aup/vendor" element={<AcceptableUsePolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
