/**
 * @file        src/app/search/page.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @description Search page
 */
'use client';
import React, { SetStateAction, useEffect, useState } from 'react';
import { Download, AlertCircle, Search as SearchIcon } from 'lucide-react';

import { getFlavorTexts, getSearchCategories, queryOSINT, OSINTResult } from '@/lib/osint';
import { FLAVOR_KEY_WORDS } from '@/lib/constants';

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";

import { SearchSkeleton } from "@/components/skeletons/SearchSkeleton";
import { ResultCard } from "@/components/card/ResultCard";
import { BubbleText } from "@/components/text/BubbleText";

export default function Search() {

    const [flavorTexts, setFlavorTexts]           = useState<string[]>(['']);
    const [errorMessage, setErrorMessage]         = useState<string | null>(null);
    const [loading, setLoading]                   = useState(false);
    const [buttonCategories, setButtonCategories] = useState<string[]>([]);
    const [selectedButton, setSelectedButton]     = useState('Username');
    const [results, setResults]                   = useState<OSINTResult[]>([]);
    const [query, setQuery]                       = useState('');

    const handleSearch = async () => {
        if (!query.trim()) return;

        setLoading(true); 
        setErrorMessage(null); 
        setResults([]);

        try {
            const data = await queryOSINT(query, selectedButton);
            
            if (data.length === 0) {
                setErrorMessage("No results found.");
            } else {
                setResults(data);
            }
        } catch (error: any) {
            setErrorMessage(error.message || "Failed to connect to API.");
        }
        setLoading(false);
    }

    const downloadResults = () => {
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        const blob      = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
        const url       = URL.createObjectURL(blob);
        const a         = document.createElement('a');

        a.download      = `${query}-${timestamp}.json`;
        a.href          = url;
        a.click(); a.remove();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSearch();
    };

    useEffect(() => {
        getFlavorTexts().then((res) => setFlavorTexts(res));
        getSearchCategories().then((res) => setButtonCategories(res));
    }, []);

    const handleButtonChange = (name: SetStateAction<string>) => {
      if (!loading) setSelectedButton(name);
    }

    return (
        <div>
            <Navbar />
            
            {/* Background Texture */}
            <div className="fixed inset-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,black_1px)] bg-[size:20px_20px]"></div>
            
            {/* Main Layout Container */}
            <div className={`mx-auto w-screen min-h-screen px-6 pt-32 pb-20 md:max-w-[720px] lg:max-w-[612px] flex flex-col ${results.length > 0 ? 'justify-start' : 'justify-center'} gap-4 transition-all duration-500`}>
                
                <BubbleText />

                <div className='text-center text-xl text-gray-100 font-normal min-h-[1.75rem]'>
                    {flavorTexts[0] && flavorTexts[0].split(' ').map((word, index) => {
                        if (FLAVOR_KEY_WORDS.includes(word.toLowerCase())) {
                            return <span key={index} className="font-bold bg-grad text-indigo-500">{word} </span>
                        } else {
                            return <span key={index}>{word} </span>
                        }})
                    }
                </div>

                {/* Error & Input Section */}
                <div className="flex justify-center text-rose-400 font-mono text-sm h-6">
                    {errorMessage && <span className="flex items-center gap-2"><AlertCircle size={14}/> {errorMessage}</span>}
                </div>
                
                <div className="group relative flex items-center w-full bg-[#331E84] transition-all duration-300 focus-within:bg-[#4025a0] focus-within:ring-2 focus-within:ring-indigo-400/50 shadow-lg shadow-indigo-500/20">
                    <input 
                        onChange={(event) => setQuery(event.target.value)} 
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent px-6 py-4 text-lg font-normal text-gray-100 placeholder-indigo-300/50 outline-none" 
                        type="text" 
                        placeholder="target identifier..." 
                        autoFocus
                    />
                    <button 
                        className="h-full px-6 text-indigo-200 hover:text-white transition-colors border-l border-indigo-500/30 flex items-center justify-center" 
                        onClick={handleSearch}
                        disabled={loading}
                    >
                        {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/> : <SearchIcon size={22} />}
                    </button>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                    {buttonCategories.map((button, index) => (
                        <button 
                            key={index} 
                            onClick={() => handleButtonChange(button)} 
                            className={`p-2 rounded w-32 text-white cursor-pointer bg-[#5D3FD3] transition-all hover:bg-indigo-600 ${selectedButton === button ? 'bg-indigo-500 ring-2 ring-indigo-300 ring-offset-2 ring-offset-black' : ''}`}
                        >
                            {button}
                        </button>
                    ))}
                </div>

                {/* Results Display */}
                {loading && <SearchSkeleton />}
                
                {results.length > 0 && !loading && (
                    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col gap-4">
                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                            <span className="text-gray-400 text-sm font-mono">
                                Found {results.length} modules
                            </span>
                            <button 
                                onClick={downloadResults}
                                className="flex items-center gap-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                            >
                                <Download size={14} /> DOWNLOAD JSON
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">
                            {results.map((result, idx) => (
                                <ResultCard key={idx} name={result.name} data={result.data} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />

        </div>
    )
}
