/**
 * @file        src/components/card/ResultCard.tsx
 * @author      David @dvhsh (https://dvh.sh)
 * @description Component to display result data
 */
import React, { useState } from 'react';
import { Terminal, ChevronRight } from 'lucide-react';
import { formatKey } from '@/utils/format';

// Helper to render value properly
const RenderValue = ({ value }: { value: any }) => {
    if (value === null || value === undefined) return <span className="text-neutral-500 italic">null</span>;
    if (typeof value === 'boolean') return <span className={value ? "text-emerald-400" : "text-rose-400"}>{value.toString()}</span>;
    if (typeof value === 'string' && value.startsWith('http')) return <a href={value} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline truncate block max-w-[200px]">{value}</a>;
    if (typeof value === 'object') return <span className="text-neutral-500 italic">object</span>;
    return <span className="text-neutral-300">{String(value)}</span>;
};

export const ResultCard = ({ name, data }: { name: string, data: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const content = data.data || {};

    const simpleFields = Object.entries(content).filter(([_, v]) => 
        typeof v !== 'object' || v === null
    );

    return (
        <div className="border border-indigo-500/30 bg-[#0a0a0a] rounded overflow-hidden transition-all duration-300 hover:border-indigo-500/60 w-full text-left">
            <div 
                className="flex items-center justify-between p-3 bg-neutral-900/50 cursor-pointer select-none border-b border-indigo-500/10"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-3">
                    <div className="text-indigo-400">
                        <Terminal size={16} />
                    </div>
                    <span className="font-mono text-base font-bold text-gray-200 capitalize">{name}</span>
                </div>
                <ChevronRight size={18} className={`text-neutral-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
            </div>
            
            {isOpen && (
                <div className="p-4 grid grid-cols-1 gap-y-2 text-sm bg-black/50">
                    {simpleFields.length > 0 ? simpleFields.map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center border-b border-white/5 pb-1 last:border-0">
                            <span className="text-neutral-500 font-mono text-xs uppercase tracking-wider">{formatKey(key)}</span>
                            <div className="text-right font-mono text-gray-300">
                                <RenderValue value={value} />
                            </div>
                        </div>
                    )) : (
                        <div className="text-center text-neutral-600 italic py-2">No simple data fields available</div>
                    )}
                </div>
            )}
        </div>
    );
};
