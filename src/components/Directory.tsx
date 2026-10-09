import { useEffect, useMemo, useState } from 'react';
import resources from '../data/resources.json';
import Contribute from "./Contribute";

const categories = [...new Set(resources.map(r => r.category))];
const marks: Record<string,string> = {Community:'◎', Git:'⑂', 'VS Code Extensions':'⌘', JavaScript:'JS', 'Validators & Checkers':'✓', Regex:'.*', 'JetBrains Plugins':'JB', 'UI / UX':'◈', CSS:'#', HTML:'</>'};
const storageKey = 'dev-atlas:favourites:v1';

export default function Directory() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All resources');
  const [savedOnly, setSavedOnly] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);
  const [ready, setReady] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [sort, setSort] = useState('curated');
  useEffect(() => {
    try {
      const value: unknown = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (Array.isArray(value)) setSaved(value.filter((id): id is number => typeof id === 'number' && resources.some(r => r.id === id)));
    } catch { setStorageError(true); }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(storageKey, JSON.stringify(saved)); }
    catch { setStorageError(true); }
  }, [saved, ready]);
  const filtered = useMemo(() => {
    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const result = resources.filter(r => (category === 'All resources' || r.category === category)
      && (!savedOnly || saved.includes(r.id))
      && words.every(word => `${r.title} ${r.description} ${r.category} ${r.tag}`.toLowerCase().includes(word)));
    return sort === 'alphabetical' ? [...result].sort((a,b) => a.title.localeCompare(b.title)) : result;
  }, [query, category, savedOnly, saved, sort]);
  const toggleSave = (id: number) => setSaved(previous => previous.includes(id) ? previous.filter(x => x !== id) : [...previous, id]);
  const reset = () => { setQuery(''); setCategory('All resources'); setSavedOnly(false); setSort('curated'); };

  return <div className="min-h-screen">
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a href={import.meta.env.BASE_URL} className="flex items-center gap-3 no-underline" aria-label="Dev Atlas home"><span className="logo">&lt;/&gt;</span><span className="text-lg font-bold tracking-tight">dev<span className="text-[#c6f17c]">atlas</span><span className="ml-3 hidden text-xs font-normal tracking-widest text-stone-500 sm:inline">THE DEVELOPER DIRECTORY</span></span></a>
        <button onClick={() => setSavedOnly(!savedOnly)} aria-pressed={savedOnly} className={`rounded-lg border px-4 py-2 text-sm ${savedOnly ? 'border-[#c6f17c] text-[#c6f17c]' : 'border-white/15 text-stone-300 hover:border-white/40'}`}>☆ Saved <span className="ml-2 text-xs">{saved.length}</span></button>
      </div>
    </header>
    <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[255px_1fr]">
      <aside className="border-b border-white/10 p-5 lg:border-r lg:border-b-0 lg:p-7" aria-label="Resource categories">
        <p className="mb-5 text-[11px] font-semibold tracking-[0.2em] text-stone-500">EXPLORE THE TOOLKIT</p>
        <nav className="flex gap-2 overflow-x-auto pb-2 lg:flex-col">
          {['All resources', ...categories].map(c => <button key={c} onClick={() => setCategory(c)} aria-pressed={category === c} className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${category === c ? 'bg-[#c6f17c]/10 text-[#c6f17c]' : 'text-stone-400 hover:bg-white/5 hover:text-white'}`}><span aria-hidden="true" className="w-5 text-center font-mono text-xs">{marks[c] || '▦'}</span><span className="flex-1 whitespace-nowrap">{c}</span><span className="ml-2 text-xs opacity-60">{c === 'All resources' ? resources.length : resources.filter(r => r.category === c).length}</span></button>)}
        </nav>
        <div className="mt-12 hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:block"><span className="text-[#c6f17c]">↗</span><p className="mt-3 text-sm font-medium">Less searching.<br/>More building.</p><p className="mt-2 text-xs leading-5 text-stone-500">Keep your favourite tools close. Save a resource to build your own toolkit.</p></div>
      </aside>
      <main id="main" className="min-w-0 px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
        <section className="hero relative mb-9 overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-9">
          <div className="relative z-10 max-w-xl"><p className="mb-5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-[#c6f17c]"><span className="h-1.5 w-1.5 rounded-full bg-[#c6f17c]"/> BUILT FOR THE BUILDERS</p><h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">Your next favourite<br/><span className="text-[#c6f17c]">dev resource.</span></h1><p className="mt-5 max-w-md text-sm leading-7 text-stone-400">Good tools make great work. Explore a curated collection of communities, references, and tools for your development journey.</p><div className="mt-7 flex flex-wrap gap-6 text-xs text-stone-400"><span><span className="mr-2 text-white">{resources.length}</span> resources</span><span><span className="mr-2 text-white">{categories.length}</span> categories</span><span className="text-[#c6f17c]">∞ possibilities</span></div></div><div aria-hidden="true" className="hero-symbol">&#123; &#125;</div>
        </section>
        <div className="mb-7 flex flex-col gap-3 sm:flex-row"><label className="flex flex-1 items-center gap-3 rounded-xl border border-white/15 bg-white/[0.025] px-4 focus-within:border-[#c6f17c]"><span aria-hidden="true" className="text-xl text-stone-500">⌕</span><span className="sr-only">Search resources</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search tools, topics, or something new…" className="w-full bg-transparent py-3.5 text-sm outline-none placeholder:text-stone-500"/></label><label className="flex items-center gap-3 rounded-xl border border-white/15 px-4 text-xs text-stone-400">Sort by<select value={sort} onChange={e => setSort(e.target.value)} className="bg-[#101315] py-3.5 text-sm text-stone-200"><option value="curated">Curated order</option><option value="alphabetical">Name A–Z</option></select></label></div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-lg font-semibold">{savedOnly ? 'Saved resources' : category}</h2><p role="status" aria-live="polite" className="mt-1 text-xs text-stone-500">{filtered.length} {filtered.length === 1 ? 'resource' : 'resources'}{category !== 'All resources' && savedOnly ? ` in ${category}` : ''}{query ? ` matching “${query}”` : ''}</p></div>{(query || savedOnly || category !== 'All resources') && <button onClick={reset} className="text-xs text-[#c6f17c] hover:underline">Reset filters ↺</button>}</div>
        {storageError && <p role="status" className="mb-4 rounded-lg border border-amber-400/30 p-3 text-xs text-amber-200">Browser storage is unavailable or unreadable. Saved resources may only be available for this visit.</p>}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map(r => <article key={r.id} className="resource-card group flex flex-col rounded-xl border border-white/10 bg-[#161a1d] p-5 transition hover:-translate-y-1 hover:border-[#c6f17c]/35">
            <div className="mb-5 flex items-start justify-between"><span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c6f17c]/15 bg-[#c6f17c]/5 font-mono text-sm font-semibold text-[#c6f17c]">{marks[r.category]}</span><button disabled={!ready} onClick={() => toggleSave(r.id)} aria-label={`${saved.includes(r.id) ? 'Unsave' : 'Save'} ${r.title}`} aria-pressed={saved.includes(r.id)} className={`rounded-md px-2 py-1 text-xl transition hover:bg-white/5 disabled:opacity-40 ${saved.includes(r.id) ? 'text-[#c6f17c]' : 'text-stone-500'}`}>{saved.includes(r.id) ? '★' : '☆'}</button></div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.13em] text-stone-500">{r.category}</p><h3 className="text-base font-semibold tracking-tight"><a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#c6f17c]">{r.title}<span className="sr-only"> (opens in a new tab)</span></a></h3><p className="mt-2 flex-1 text-[13px] leading-6 text-stone-400">{r.description}</p><div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4"><span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-stone-400">{r.tag}</span><a href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${r.title} (opens in a new tab)`} className="text-xs text-stone-300 transition hover:text-[#c6f17c]">Visit resource <span aria-hidden="true" className="ml-1 text-[#c6f17c]">↗</span></a></div>
          </article>)}
        </div>
        {!filtered.length && <div className="rounded-xl border border-dashed border-white/15 py-16 text-center"><p className="text-lg">No resources found</p><p className="mt-2 text-sm text-stone-400">Try a different search, switch category, or clear your filters.</p><button onClick={reset} className="mt-5 rounded-lg bg-[#c6f17c] px-5 py-2 text-sm font-medium text-[#101315]">Show all resources</button></div>}
        <Contribute />
        <footer className="mt-12 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs leading-5 text-stone-500"><p>devatlas / A little direction for your next big idea.</p><p>Independent directory · Plugin pricing and compatibility may vary.</p></footer>
      </main>
    </div>
  </div>;
}
