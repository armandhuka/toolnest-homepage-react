
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Content from "./pages/Content";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

// Text Tools
import WordCounter from "./pages/text-tools/WordCounter";
import RemoveDuplicates from "./pages/text-tools/RemoveDuplicates";
import CaseConverter from "./pages/text-tools/CaseConverter";
import TextSorter from "./pages/text-tools/TextSorter";
import TextReverser from "./pages/text-tools/TextReverser";
import SlugGenerator from "./pages/text-tools/SlugGenerator";
import FindReplace from "./pages/text-tools/FindReplace";
import PalindromeChecker from "./pages/text-tools/PalindromeChecker";
import RemoveSpecialChars from "./pages/text-tools/RemoveSpecialChars";
import TextLimiter from "./pages/text-tools/TextLimiter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
          
          {/* Text Tools Routes */}
          <Route path="/text-tools/word-counter" element={<WordCounter />} />
          <Route path="/text-tools/remove-duplicates" element={<RemoveDuplicates />} />
          <Route path="/text-tools/case-converter" element={<CaseConverter />} />
          <Route path="/text-tools/text-sorter" element={<TextSorter />} />
          <Route path="/text-tools/text-reverser" element={<TextReverser />} />
          <Route path="/text-tools/slug-generator" element={<SlugGenerator />} />
          <Route path="/text-tools/find-replace" element={<FindReplace />} />
          <Route path="/text-tools/palindrome-checker" element={<PalindromeChecker />} />
          <Route path="/text-tools/remove-special-chars" element={<RemoveSpecialChars />} />
          <Route path="/text-tools/text-limiter" element={<TextLimiter />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
