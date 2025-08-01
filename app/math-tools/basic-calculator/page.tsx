'use client'

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calculator, RotateCcw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BasicCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+': return firstValue + secondValue;
      case '-': return firstValue - secondValue;
      case '×': return firstValue * secondValue;
      case '÷': return firstValue / secondValue;
      default: return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="min-h-screen bg-toolnest-bg font-inter">
      <Helmet>
        <title>Basic Calculator - ToolNest</title>
        <meta name="description" content="Perform basic mathematical calculations with ToolNest's free Basic Calculator tool." />
        <link rel="canonical" href="https://toolnest.com/math-tools/basic-calculator" />
      </Helmet>

      <Header />

      <div className="pt-32 pb-20 px-4">
        <div className="toolnest-container max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-toolnest-text mb-4">
                Basic Calculator
              </h1>
              <p className="text-xl text-toolnest-text/80">
                Perform basic mathematical calculations
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Display */}
                <div className="bg-toolnest-bg p-4 rounded-lg">
                  <div className="text-right text-2xl font-mono text-toolnest-text">
                    {display}
                  </div>
                </div>

                {/* Buttons Grid */}
                <div className="grid grid-cols-4 gap-2">
                  <Button onClick={clear} variant="outline" className="col-span-2">
                    Clear
                  </Button>
                  <Button onClick={() => inputOperation('÷')} variant="outline">
                    ÷
                  </Button>
                  <Button onClick={() => inputOperation('×')} variant="outline">
                    ×
                  </Button>

                  <Button onClick={() => inputNumber('7')} variant="outline">7</Button>
                  <Button onClick={() => inputNumber('8')} variant="outline">8</Button>
                  <Button onClick={() => inputNumber('9')} variant="outline">9</Button>
                  <Button onClick={() => inputOperation('-')} variant="outline">
                    -
                  </Button>

                  <Button onClick={() => inputNumber('4')} variant="outline">4</Button>
                  <Button onClick={() => inputNumber('5')} variant="outline">5</Button>
                  <Button onClick={() => inputNumber('6')} variant="outline">6</Button>
                  <Button onClick={() => inputOperation('+')} variant="outline">
                    +
                  </Button>

                  <Button onClick={() => inputNumber('1')} variant="outline">1</Button>
                  <Button onClick={() => inputNumber('2')} variant="outline">2</Button>
                  <Button onClick={() => inputNumber('3')} variant="outline">3</Button>
                  <Button onClick={performCalculation} className="row-span-2">
                    =
                  </Button>

                  <Button onClick={() => inputNumber('0')} variant="outline" className="col-span-2">
                    0
                  </Button>
                  <Button onClick={inputDecimal} variant="outline">
                    .
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Link href="/tools" className="inline-flex items-center gap-2 text-toolnest-text hover:text-toolnest-text/80 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Tools
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BasicCalculator;