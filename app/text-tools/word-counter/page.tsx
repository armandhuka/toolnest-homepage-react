'use client'

import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Copy, RotateCcw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WordCounter = () => {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs
    };
  }, [text]);

  const clearText = () => setText('');
  
  const copyStats = () => {
    const statsText = `Words: ${stats.words}, Characters: ${stats.characters}, Sentences: ${stats.sentences}`;
    navigator.clipboard.writeText(statsText);
  };

  return (
    <div className="min-h-screen bg-toolnest-bg font-inter">
      <Helmet>
        <title>Word Counter - ToolNest</title>
        <meta name="description" content="Count words, characters, sentences, and paragraphs in your text with ToolNest's free Word Counter tool." />
        <link rel="canonical" href="https://toolnest.com/text-tools/word-counter" />
      </Helmet>

      <Header />

      <div className="pt-32 pb-20 px-4">
        <div className="toolnest-container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-toolnest-text mb-4">
                Word Counter
              </h1>
              <p className="text-xl text-toolnest-text/80">
                Count words, characters, sentences, and paragraphs in your text
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Enter Your Text
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type or paste your text here..."
                  className="min-h-[200px] text-base"
                />

                <div className="flex gap-3">
                  <Button onClick={copyStats} className="flex-1">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Stats
                  </Button>
                  <Button onClick={clearText} variant="outline">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Text Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-toolnest-bg/50 rounded-lg">
                    <div className="text-2xl font-bold text-toolnest-text">{stats.words}</div>
                    <div className="text-sm text-toolnest-text/70">Words</div>
                  </div>
                  <div className="text-center p-4 bg-toolnest-bg/50 rounded-lg">
                    <div className="text-2xl font-bold text-toolnest-text">{stats.characters}</div>
                    <div className="text-sm text-toolnest-text/70">Characters</div>
                  </div>
                  <div className="text-center p-4 bg-toolnest-bg/50 rounded-lg">
                    <div className="text-2xl font-bold text-toolnest-text">{stats.charactersNoSpaces}</div>
                    <div className="text-sm text-toolnest-text/70">No Spaces</div>
                  </div>
                  <div className="text-center p-4 bg-toolnest-bg/50 rounded-lg">
                    <div className="text-2xl font-bold text-toolnest-text">{stats.sentences}</div>
                    <div className="text-sm text-toolnest-text/70">Sentences</div>
                  </div>
                  <div className="text-center p-4 bg-toolnest-bg/50 rounded-lg">
                    <div className="text-2xl font-bold text-toolnest-text">{stats.paragraphs}</div>
                    <div className="text-sm text-toolnest-text/70">Paragraphs</div>
                  </div>
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

export default WordCounter;