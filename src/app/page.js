export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1
        className={"font-extrabold text-8xl text-slate-900 dark:text-slate-50"}
      >
        DARK MODE
      </h1>
      <p
        className={
          "p-2 tracking-wide text-2xl rounded-sm text-slate-900 dark:text-slate-50"
        }
      >
        With Next.js and TailwindCSS
      </p>
    </div>
  );
}
