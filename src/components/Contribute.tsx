const REPO_URL = "https://github.com/bmanke/dev-atlas";

export default function Contribute() {
    return (
        <section
            aria-labelledby="contribute-heading"
            className="mt-10 flex flex-col gap-5 rounded-xl border
                 border-white/10 bg-[#161a1d] p-5 sm:flex-row
                 sm:items-center sm:justify-between sm:p-6"
        >
            <div className="flex items-start gap-4">
                <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View the project on GitHub (opens in a new tab)"
                    className="flex h-11 w-11 shrink-0 items-center justify-center
                     rounded-xl border border-[#c6f17c]/20
                     bg-[#c6f17c]/5 text-[#c6f17c]
                     transition hover:bg-[#c6f17c]/10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.922c.563.104.768-.244.768-.542 0-.267-.01-.974-.015-1.912-3.13.68-3.79-1.51-3.79-1.51-.512-1.3-1.25-1.647-1.25-1.647-1.022-.699.077-.685.077-.685 1.13.08 1.724 1.16 1.724 1.16 1.004 1.72 2.633 1.223 3.275.935.102-.727.393-1.223.715-1.504-2.499-.284-5.126-1.25-5.126-5.562 0-1.229.44-2.233 1.16-3.02-.116-.284-.503-1.428.11-2.977 0 0 .945-.303 3.094 1.154A10.79 10.79 0 0 1 12 6.182c.956.004 1.918.129 2.817.38 2.148-1.457 3.092-1.154 3.092-1.154.614 1.549.227 2.693.112 2.978.722.786 1.158 1.79 1.158 3.019 0 4.323-2.632 5.275-5.139 5.553.404.348.766 1.034.766 2.084 0 1.504-.014 2.717-.014 3.086 0 .3.203.65.774.54A11.25 11.25 0 0 0 12 .75Z" />
                    </svg>
                </a>

                <div>
                    <h2
                        id="contribute-heading"
                        className="text-base font-semibold tracking-tight"
                    >
                        Help improve Dev Atlas
                    </h2>

                    <p className="mt-1 text-sm leading-6 text-stone-400">
                        Create an issue or make a pull request for changes.
                    </p>

                    <a
                        href={REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs
                       text-stone-500 transition hover:text-[#c6f17c]"
                    >
                        View repository
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:shrink-0">
                <a
                    href={`${REPO_URL}/issues/new/choose`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2
                     rounded-lg bg-[#c6f17c] px-4 py-2.5 text-sm
                     font-medium text-[#101315] transition
                     hover:bg-[#d7f7a4]"
                >
                    Create an issue
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>

                <a
                    href={`${REPO_URL}/compare`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2
                     rounded-lg border border-white/15 px-4 py-2.5
                     text-sm font-medium text-stone-200 transition
                     hover:border-[#c6f17c]/50 hover:text-[#c6f17c]"
                >
                    Make a pull request
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
            </div>
        </section>
    );
}