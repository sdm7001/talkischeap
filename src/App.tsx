import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "@/pages/Index";
import Features from "@/pages/Features";
import FeatureDetail from "@/pages/FeatureDetail";
import Pricing from "@/pages/Pricing";
import Industries from "@/pages/Industries";
import IndustryDetail from "@/pages/IndustryDetail";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import { Privacy, Terms } from "@/pages/Legal";
import NotFound from "@/pages/NotFound";

const App = () => (
  <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/features/:slug" element={<FeatureDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  </BrowserRouter>
);

export default App;
