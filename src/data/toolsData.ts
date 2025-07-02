export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  iconColor: string;
  icon: string;
  status: 'available' | 'coming-soon';
}

export const toolsData: Tool[] = [
  // Unit Converter Tools
  {
    id: 1,
    name: "Length Converter",
    description: "Convert between different units of length (meters, feet, inches, etc.)",
    category: "Unit Converter Tools",
    iconColor: "#3B82F6",
    icon: "📏",
    status: "available"
  },
  {
    id: 2,
    name: "Weight Converter",
    description: "Convert between different units of weight (kg, lbs, grams, etc.)",
    category: "Unit Converter Tools",
    iconColor: "#3B82F6",
    icon: "⚖️",
    status: "available"
  },
  {
    id: 3,
    name: "Temperature Converter",
    description: "Convert between Celsius, Fahrenheit, and Kelvin",
    category: "Unit Converter Tools",
    iconColor: "#3B82F6",
    icon: "🌡️",
    status: "available"
  },
  {
    id: 4,
    name: "Time Converter",
    description: "Convert between different time units (hours, minutes, seconds)",
    category: "Unit Converter Tools",
    iconColor: "#3B82F6",
    icon: "⏰",
    status: "available"
  },
  {
    id: 5,
    name: "Speed Converter",
    description: "Convert between different speed units (mph, km/h, m/s)",
    category: "Unit Converter Tools",
    iconColor: "#3B82F6",
    icon: "🏃",
    status: "available"
  },
  {
    id: 6,
    name: "Area Converter",
    description: "Convert between different area units (sq ft, sq m, acres)",
    category: "Unit Converter Tools",
    iconColor: "#3B82F6",
    icon: "📐",
    status: "available"
  },
  {
    id: 7,
    name: "Volume Converter",
    description: "Convert between different volume units (liters, gallons, cups)",
    category: "Unit Converter Tools",
    iconColor: "#3B82F6",
    icon: "🥤",
    status: "available"
  },
  {
    id: 8,
    name: "Data Size Converter",
    description: "Convert between bytes, KB, MB, GB, TB",
    category: "Unit Converter Tools",
    iconColor: "#3B82F6",
    icon: "💾",
    status: "available"
  },

  // Text Tools
  {
    id: 9,
    name: "Word Counter",
    description: "Count words, characters, sentences, and paragraphs in your text",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "📝",
    status: "available"
  },
  {
    id: 10,
    name: "Remove Duplicates",
    description: "Remove duplicate lines or words from your text",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "🔄",
    status: "available"
  },
  {
    id: 11,
    name: "Case Converter",
    description: "Convert text to uppercase, lowercase, title case, or sentence case",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "🔤",
    status: "available"
  },
  {
    id: 12,
    name: "Text Sorter",
    description: "Sort lines of text alphabetically or numerically",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "🔢",
    status: "available"
  },
  {
    id: 13,
    name: "Text Reverser",
    description: "Reverse text, words, or lines in your content",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "↩️",
    status: "available"
  },
  {
    id: 14,
    name: "Slug Generator",
    description: "Generate URL-friendly slugs from your text",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "🔗",
    status: "available"
  },
  {
    id: 15,
    name: "Find & Replace",
    description: "Find and replace text patterns in your content",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "🔍",
    status: "available"
  },
  {
    id: 16,
    name: "Palindrome Checker",
    description: "Check if text reads the same forwards and backwards",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "🔄",
    status: "available"
  },
  {
    id: 17,
    name: "Remove Special Characters",
    description: "Remove or filter special characters from text",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "🧹",
    status: "available"
  },
  {
    id: 18,
    name: "Text Limiter",
    description: "Limit text to a specific number of characters or words",
    category: "Text Tools",
    iconColor: "#10B981",
    icon: "✂️",
    status: "available"
  },

  // Date & Time Tools - Updated to match exact page names
  {
    id: 19,
    name: "Age Calculator",
    description: "Calculate exact age in years, months, and days",
    category: "Date & Time Tools",
    iconColor: "#8B5CF6",
    icon: "🎂",
    status: "available"
  },
  {
    id: 20,
    name: "Date Difference",
    description: "Calculate the difference between two dates",
    category: "Date & Time Tools",
    iconColor: "#8B5CF6",
    icon: "📅",
    status: "available"
  },
  {
    id: 21,
    name: "Countdown Timer",
    description: "Create countdown timers for events and deadlines",
    category: "Date & Time Tools",
    iconColor: "#8B5CF6",
    icon: "⏳",
    status: "available"
  },
  {
    id: 22,
    name: "Work Days Calculator",
    description: "Calculate working days between two dates",
    category: "Date & Time Tools",
    iconColor: "#8B5CF6",
    icon: "💼",
    status: "available"
  },
  {
    id: 23,
    name: "Next Birthday Countdown",
    description: "Count days until your next birthday",
    category: "Date & Time Tools",
    iconColor: "#8B5CF6",
    icon: "🎉",
    status: "available"
  },
  {
    id: 24,
    name: "Leap Year Checker",
    description: "Check if a year is a leap year",
    category: "Date & Time Tools",
    iconColor: "#8B5CF6",
    icon: "📆",
    status: "available"
  },
  {
    id: 25,
    name: "Current Week Number Checker",
    description: "Find the week number for any date",
    category: "Date & Time Tools",
    iconColor: "#8B5CF6",
    icon: "📊",
    status: "available"
  },

  // Number Tools
  {
    id: 26,
    name: "Percentage Calculator",
    description: "Calculate percentages, percentage increase/decrease",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "💯",
    status: "available"
  },
  {
    id: 27,
    name: "Interest Calculator",
    description: "Calculate simple and compound interest",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "💰",
    status: "available"
  },
  {
    id: 28,
    name: "EMI Calculator",
    description: "Calculate loan EMI and payment schedules",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "🏦",
    status: "available"
  },
  {
    id: 29,
    name: "Roman Number Converter",
    description: "Convert between Arabic and Roman numerals",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "🏛️",
    status: "available"
  },
  {
    id: 30,
    name: "LCM/HCF Calculator",
    description: "Find Least Common Multiple and Highest Common Factor",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "🔢",
    status: "available"
  },
  {
    id: 31,
    name: "Number to Words",
    description: "Convert numbers to written words",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "📖",
    status: "available"
  },
  {
    id: 32,
    name: "Scientific Notation",
    description: "Convert numbers to and from scientific notation",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "🔬",
    status: "available"
  },
  {
    id: 33,
    name: "Base Converter",
    description: "Convert between binary, decimal, octal, and hexadecimal",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "💻",
    status: "available"
  },
  {
    id: 34,
    name: "Number Rounding",
    description: "Round numbers to specified decimal places",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "🎯",
    status: "available"
  },
  {
    id: 35,
    name: "Random Generator",
    description: "Generate random numbers within specified ranges",
    category: "Number Tools",
    iconColor: "#F59E0B",
    icon: "🎲",
    status: "available"
  },

  // Math Tools
  {
    id: 36,
    name: "Advanced Calculator",
    description: "Scientific calculator with advanced functions",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "🧮",
    status: "available"
  },
  {
    id: 37,
    name: "Prime Number Checker",
    description: "Check if a number is prime and find prime factors",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "🔍",
    status: "available"
  },
  {
    id: 38,
    name: "Factorial Calculator",
    description: "Calculate factorial of any number",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "❗",
    status: "available"
  },
  {
    id: 39,
    name: "Multiplication Tables",
    description: "Generate multiplication tables for any number",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "✖️",
    status: "available"
  },
  {
    id: 40,
    name: "Quadratic Equation Solver",
    description: "Solve quadratic equations and find roots",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "📈",
    status: "available"
  },
  {
    id: 41,
    name: "Percentage Increase/Decrease Calculator",
    description: "Calculate percentage change between values",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "📊",
    status: "available"
  },
  {
    id: 42,
    name: "Triangle Area Calculator",
    description: "Calculate area and perimeter of triangles",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "📐",
    status: "available"
  },
  {
    id: 43,
    name: "Circle Area Calculator",
    description: "Calculate area and circumference of circles",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "⭕",
    status: "available"
  },
  {
    id: 44,
    name: "Logarithm Calculator",
    description: "Calculate logarithms and exponentials",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "📊",
    status: "available"
  },
  {
    id: 45,
    name: "Statistics Calculator",
    description: "Calculate mean, median, mode, and standard deviation",
    category: "Math Tools",
    iconColor: "#EF4444",
    icon: "📈",
    status: "available"
  },

  // Health Tools
  {
    id: 46,
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index and health category",
    category: "Health Tools",
    iconColor: "#06B6D4",
    icon: "💪",
    status: "available"
  },
  {
    id: 47,
    name: "Calorie Calculator",
    description: "Calculate daily calorie needs based on activity level",
    category: "Health Tools",
    iconColor: "#06B6D4",
    icon: "🍎",
    status: "available"
  },
  {
    id: 48,
    name: "Water Intake Calculator",
    description: "Calculate your daily water intake requirements",
    category: "Health Tools",
    iconColor: "#06B6D4",
    icon: "💧",
    status: "available"
  },
  {
    id: 49,
    name: "Body Fat Percentage",
    description: "Calculate body fat percentage using various methods",
    category: "Health Tools",
    iconColor: "#06B6D4",
    icon: "📏",
    status: "available"
  },
  {
    id: 50,
    name: "Ideal Weight Calculator",
    description: "Calculate your ideal weight based on height and age",
    category: "Health Tools",
    iconColor: "#06B6D4",
    icon: "⚖️",
    status: "available"
  },
  {
    id: 51,
    name: "BMR Calculator",
    description: "Calculate Basal Metabolic Rate and daily energy expenditure",
    category: "Health Tools",
    iconColor: "#06B6D4",
    icon: "🔥",
    status: "available"
  },
  {
    id: 52,
    name: "Macro Split Calculator",
    description: "Calculate optimal macronutrient distribution",
    category: "Health Tools",
    iconColor: "#06B6D4",
    icon: "🥗",
    status: "available"
  }
];
