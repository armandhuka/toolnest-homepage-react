import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Index from './pages/Index';
import Tools from './pages/Tools';
import About from './pages/About';
import Contact from './pages/Contact';
import Content from './pages/Content';
import NotFound from './pages/NotFound';

// Date Tools
import AgeCalculator from './pages/date-tools/AgeCalculator';
import DateDifference from './pages/date-tools/DateDifference';
import BirthdayCountdown from './pages/date-tools/BirthdayCountdown';
import Countdown from './pages/date-tools/Countdown';
import LeapYear from './pages/date-tools/LeapYear';
import WeekNumber from './pages/date-tools/WeekNumber';
import WorkDays from './pages/date-tools/WorkDays';

// Text Tools
import WordCounter from './pages/text-tools/WordCounter';
import CaseConverter from './pages/text-tools/CaseConverter';
import FindReplace from './pages/text-tools/FindReplace';
import PalindromeChecker from './pages/text-tools/PalindromeChecker';
import RemoveDuplicates from './pages/text-tools/RemoveDuplicates';
import RemoveSpecialChars from './pages/text-tools/RemoveSpecialChars';
import SlugGenerator from './pages/text-tools/SlugGenerator';
import TextLimiter from './pages/text-tools/TextLimiter';
import TextReverser from './pages/text-tools/TextReverser';
import TextSorter from './pages/text-tools/TextSorter';

// Math Tools
import BasicCalculator from './pages/math-tools/BasicCalculator';
import CircleCalculator from './pages/math-tools/CircleCalculator';
import ExponentLog from './pages/math-tools/ExponentLog';
import Factorial from './pages/math-tools/Factorial';
import MultiplicationTable from './pages/math-tools/MultiplicationTable';
import PercentageChange from './pages/math-tools/PercentageChange';
import PrimeChecker from './pages/math-tools/PrimeChecker';
import QuadraticSolver from './pages/math-tools/QuadraticSolver';
import StatisticsCalculator from './pages/math-tools/StatisticsCalculator';
import TriangleArea from './pages/math-tools/TriangleArea';

// Number Tools
import EMICalculator from './pages/number-tools/EMICalculator';
import LCMHCFCalculator from './pages/number-tools/LCMHCFCalculator';
import NumberBaseConverter from './pages/number-tools/NumberBaseConverter';
import NumberToWords from './pages/number-tools/NumberToWords';
import PercentageCalculator from './pages/number-tools/PercentageCalculator';
import RandomGenerator from './pages/number-tools/RandomGenerator';
import RomanConverter from './pages/number-tools/RomanConverter';
import RoundingTool from './pages/number-tools/RoundingTool';
import ScientificNotation from './pages/number-tools/ScientificNotation';
import SimpleInterest from './pages/number-tools/SimpleInterest';

// Unit Tools
import AreaConverter from './pages/unit-tools/AreaConverter';
import DataSizeConverter from './pages/unit-tools/DataSizeConverter';
import LengthConverter from './pages/unit-tools/LengthConverter';
import SpeedConverter from './pages/unit-tools/SpeedConverter';
import TemperatureConverter from './pages/unit-tools/TemperatureConverter';
import TimeConverter from './pages/unit-tools/TimeConverter';
import VolumeConverter from './pages/unit-tools/VolumeConverter';
import WeightConverter from './pages/unit-tools/WeightConverter';

// Health Tools
import BMICalculator from './pages/health-tools/BMICalculator';
import BMRCalculator from './pages/health-tools/BMRCalculator';
import BodyFat from './pages/health-tools/BodyFat';
import CalorieCalculator from './pages/health-tools/CalorieCalculator';
import IdealWeight from './pages/health-tools/IdealWeight';
import MacroSplitter from './pages/health-tools/MacroSplitter';
import WaterIntake from './pages/health-tools/WaterIntake';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/content" element={<Content />} />
            
            {/* Date Tools */}
            <Route path="/date-tools/age-calculator" element={<AgeCalculator />} />
            <Route path="/date-tools/date-difference" element={<DateDifference />} />
            <Route path="/date-tools/birthday-countdown" element={<BirthdayCountdown />} />
            <Route path="/date-tools/countdown" element={<Countdown />} />
            <Route path="/date-tools/leap-year" element={<LeapYear />} />
            <Route path="/date-tools/week-number" element={<WeekNumber />} />
            <Route path="/date-tools/work-days" element={<WorkDays />} />

            {/* Text Tools */}
            <Route path="/text-tools/word-counter" element={<WordCounter />} />
            <Route path="/text-tools/case-converter" element={<CaseConverter />} />
            <Route path="/text-tools/find-replace" element={<FindReplace />} />
            <Route path="/text-tools/palindrome-checker" element={<PalindromeChecker />} />
            <Route path="/text-tools/remove-duplicates" element={<RemoveDuplicates />} />
            <Route path="/text-tools/remove-special-chars" element={<RemoveSpecialChars />} />
            <Route path="/text-tools/slug-generator" element={<SlugGenerator />} />
            <Route path="/text-tools/text-limiter" element={<TextLimiter />} />
            <Route path="/text-tools/text-reverser" element={<TextReverser />} />
            <Route path="/text-tools/text-sorter" element={<TextSorter />} />

            {/* Math Tools */}
            <Route path="/math-tools/basic-calculator" element={<BasicCalculator />} />
            <Route path="/math-tools/circle-calculator" element={<CircleCalculator />} />
            <Route path="/math-tools/exponent-log" element={<ExponentLog />} />
            <Route path="/math-tools/factorial" element={<Factorial />} />
            <Route path="/math-tools/multiplication-table" element={<MultiplicationTable />} />
            <Route path="/math-tools/percentage-change" element={<PercentageChange />} />
            <Route path="/math-tools/prime-checker" element={<PrimeChecker />} />
            <Route path="/math-tools/quadratic-solver" element={<QuadraticSolver />} />
            <Route path="/math-tools/statistics-calculator" element={<StatisticsCalculator />} />
            <Route path="/math-tools/triangle-area" element={<TriangleArea />} />

            {/* Number Tools */}
            <Route path="/number-tools/emi-calculator" element={<EMICalculator />} />
            <Route path="/number-tools/lcm-hcf-calculator" element={<LCMHCFCalculator />} />
            <Route path="/number-tools/number-base-converter" element={<NumberBaseConverter />} />
            <Route path="/number-tools/number-to-words" element={<NumberToWords />} />
            <Route path="/number-tools/percentage-calculator" element={<PercentageCalculator />} />
            <Route path="/number-tools/random-generator" element={<RandomGenerator />} />
            <Route path="/number-tools/roman-converter" element={<RomanConverter />} />
            <Route path="/number-tools/rounding-tool" element={<RoundingTool />} />
            <Route path="/number-tools/scientific-notation" element={<ScientificNotation />} />
            <Route path="/number-tools/simple-interest" element={<SimpleInterest />} />

            {/* Unit Tools */}
            <Route path="/unit-tools/area-converter" element={<AreaConverter />} />
            <Route path="/unit-tools/data-size-converter" element={<DataSizeConverter />} />
            <Route path="/unit-tools/length-converter" element={<LengthConverter />} />
            <Route path="/unit-tools/speed-converter" element={<SpeedConverter />} />
            <Route path="/unit-tools/temperature-converter" element={<TemperatureConverter />} />
            <Route path="/unit-tools/time-converter" element={<TimeConverter />} />
            <Route path="/unit-tools/volume-converter" element={<VolumeConverter />} />
            <Route path="/unit-tools/weight-converter" element={<WeightConverter />} />

            {/* Health Tools */}
            <Route path="/health-tools/bmi-calculator" element={<BMICalculator />} />
            <Route path="/health-tools/bmr-calculator" element={<BMRCalculator />} />
            <Route path="/health-tools/body-fat" element={<BodyFat />} />
            <Route path="/health-tools/calorie-calculator" element={<CalorieCalculator />} />
            <Route path="/health-tools/ideal-weight" element={<IdealWeight />} />
            <Route path="/health-tools/macro-splitter" element={<MacroSplitter />} />
            <Route path="/health-tools/water-intake" element={<WaterIntake />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;