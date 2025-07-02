import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
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

// Unit Converter Tools
import LengthConverter from "./pages/unit-tools/LengthConverter";
import WeightConverter from "./pages/unit-tools/WeightConverter";
import TemperatureConverter from "./pages/unit-tools/TemperatureConverter";
import TimeConverter from "./pages/unit-tools/TimeConverter";
import SpeedConverter from "./pages/unit-tools/SpeedConverter";
import AreaConverter from "./pages/unit-tools/AreaConverter";
import VolumeConverter from "./pages/unit-tools/VolumeConverter";
import DataSizeConverter from "./pages/unit-tools/DataSizeConverter";

// Date & Time Tools
import AgeCalculator from "./pages/date-tools/AgeCalculator";
import DateDifference from "./pages/date-tools/DateDifference";
import Countdown from "./pages/date-tools/Countdown";
import WorkDays from "./pages/date-tools/WorkDays";
import BirthdayCountdown from "./pages/date-tools/BirthdayCountdown";
import LeapYear from "./pages/date-tools/LeapYear";
import WeekNumber from "./pages/date-tools/WeekNumber";

// Number Tools
import PercentageCalculator from "./pages/number-tools/PercentageCalculator";
import SimpleInterest from "./pages/number-tools/SimpleInterest";
import EMICalculator from "./pages/number-tools/EMICalculator";
import RomanConverter from "./pages/number-tools/RomanConverter";
import LCMHCFCalculator from "./pages/number-tools/LCMHCFCalculator";
import NumberToWords from "./pages/number-tools/NumberToWords";
import ScientificNotation from "./pages/number-tools/ScientificNotation";
import NumberBaseConverter from "./pages/number-tools/NumberBaseConverter";
import RoundingTool from "./pages/number-tools/RoundingTool";
import RandomGenerator from "./pages/number-tools/RandomGenerator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
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

            {/* Unit Converter Tools Routes */}
            <Route path="/unit-tools/length-converter" element={<LengthConverter />} />
            <Route path="/unit-tools/weight-converter" element={<WeightConverter />} />
            <Route path="/unit-tools/temperature-converter" element={<TemperatureConverter />} />
            <Route path="/unit-tools/time-converter" element={<TimeConverter />} />
            <Route path="/unit-tools/speed-converter" element={<SpeedConverter />} />
            <Route path="/unit-tools/area-converter" element={<AreaConverter />} />
            <Route path="/unit-tools/volume-converter" element={<VolumeConverter />} />
            <Route path="/unit-tools/data-size-converter" element={<DataSizeConverter />} />

            {/* Date & Time Tools Routes */}
            <Route path="/date-tools/age-calculator" element={<AgeCalculator />} />
            <Route path="/date-tools/date-difference" element={<DateDifference />} />
            <Route path="/date-tools/countdown" element={<Countdown />} />
            <Route path="/date-tools/workdays" element={<WorkDays />} />
            <Route path="/date-tools/birthday-countdown" element={<BirthdayCountdown />} />
            <Route path="/date-tools/leap-year" element={<LeapYear />} />
            <Route path="/date-tools/week-number" element={<WeekNumber />} />

            {/* Number Tools Routes */}
            <Route path="/number-tools/percentage-calculator" element={<PercentageCalculator />} />
            <Route path="/number-tools/simple-interest" element={<SimpleInterest />} />
            <Route path="/number-tools/emi" element={<EMICalculator />} />
            <Route path="/number-tools/roman-converter" element={<RomanConverter />} />
            <Route path="/number-tools/lcm-hcf" element={<LCMHCFCalculator />} />
            <Route path="/number-tools/number-to-words" element={<NumberToWords />} />
            <Route path="/number-tools/scientific-notation" element={<ScientificNotation />} />
            <Route path="/number-tools/number-base-converter" element={<NumberBaseConverter />} />
            <Route path="/number-tools/rounding" element={<RoundingTool />} />
            <Route path="/number-tools/random-generator" element={<RandomGenerator />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
