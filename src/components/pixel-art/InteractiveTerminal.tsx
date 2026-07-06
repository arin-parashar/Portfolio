'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface HistoryItem {
  id: number;
  command?: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 0,
      output: (
        <div className="text-primary">
          <p>Welcome to ArinOS v1.0.0</p>
          <p className="mt-1">Type <span className="text-secondary">help</span> to see available commands.</p>
        </div>
      ),
    },
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    let output: React.ReactNode = null;

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div className="text-muted-foreground/90 space-y-1">
            <p><span className="text-secondary w-20 inline-block">whoami</span> - Display information about me</p>
            <p><span className="text-secondary w-20 inline-block">skills</span> - List my technical skills</p>
            <p><span className="text-secondary w-20 inline-block">projects</span> - View my recent work</p>
            <p><span className="text-secondary w-20 inline-block">contact</span> - Get my contact details</p>
            <p><span className="text-secondary w-20 inline-block">clear</span> - Clear the terminal output</p>
          </div>
        );
        break;
      case 'whoami':
        output = (
          <div className="text-muted-foreground/90 space-y-2">
            <p>Arin Parashar - Software & AI Engineer</p>
            <p>I specialize in building intelligent systems and robust software architectures.</p>
          </div>
        );
        break;
      case 'skills':
        output = (
          <div className="text-muted-foreground/90 space-y-1">
            <p>Core: Python, JavaScript, TypeScript, C++</p>
            <p>Web: React, Next.js, Node.js, TailwindCSS</p>
            <p>AI/ML: PyTorch, TensorFlow, Computer Vision, Edge AI</p>
            <p>Cloud/DB: AWS, PostgreSQL, MongoDB, Docker</p>
          </div>
        );
        break;
      case 'projects':
        window.location.hash = 'projects';
        output = <span className="text-primary">Navigating to projects sector...</span>;
        break;
      case 'contact':
        window.location.hash = 'contact';
        output = <span className="text-primary">Opening communication channels...</span>;
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'sudo':
        output = <span className="text-destructive">nice try, but you don't have root privileges.</span>;
        break;
      case '':
        output = null;
        break;
      default:
        output = <span className="text-destructive">command not found: {trimmedCmd}</span>;
    }

    if (trimmedCmd !== 'clear') {
      setHistory(prev => [
        ...prev,
        { id: Date.now(), command: cmd, output }
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div 
      className="flex flex-col group w-full max-w-2xl pixel-card overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all cursor-text" 
      onClick={() => inputRef.current?.focus()}
    >
      {/* Window Header */}
      <div 
        className="flex items-center px-3 py-2 border-b-2 border-border"
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.8)' }}
      >
        <div className="flex gap-1.5 mr-4">
          <div className="w-2 h-2 rounded-none bg-destructive/80 border border-border" />
          <div className="w-2 h-2 rounded-none bg-chart-4/80 border border-border" />
          <div className="w-2 h-2 rounded-none bg-primary/80 border border-border" />
        </div>
        <div 
          className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-muted-foreground flex-1 text-center pr-8"
        >
          interactive_terminal.exe
        </div>
      </div>

      {/* Window Body */}
      <div 
        ref={scrollRef}
        className="p-4 sm:p-6 bg-background/90 relative h-[300px] overflow-y-auto scanlines custom-scrollbar"
      >
        <div className="font-[family-name:var(--font-vt323)] text-lg sm:text-xl flex flex-col gap-3">
          
          {history.map((item) => (
            <div key={item.id} className="flex flex-col gap-1">
              {item.command !== undefined && (
                <div className="flex items-center">
                  <span className="text-secondary mr-2">~/guest {'>'}</span>
                  <span className="text-foreground">{item.command}</span>
                </div>
              )}
              {item.output && (
                <div className="leading-snug">
                  {item.output}
                </div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center mt-2">
            <span className="text-secondary mr-2">~/guest {'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-foreground font-[family-name:var(--font-vt323)] text-lg sm:text-xl w-full"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
