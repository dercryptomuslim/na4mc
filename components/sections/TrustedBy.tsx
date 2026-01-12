import { Card } from "@/components/ui/card";

export function TrustedBy() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="container px-4 mx-auto text-center">
        <p className="text-sm font-semibold text-slate-500 mb-8 tracking-wide uppercase">
          Vertraut von führenden muslimischen Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
           {/* Placeholders for logos - will be replaced with real logos */}
           <div className="h-8 w-32 bg-slate-200 rounded-md"></div>
           <div className="h-8 w-32 bg-slate-200 rounded-md"></div>
           <div className="h-8 w-32 bg-slate-200 rounded-md"></div>
           <div className="h-8 w-32 bg-slate-200 rounded-md"></div>
        </div>
      </div>
    </section>
  );
}
