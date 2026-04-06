import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <span className="font-heading text-[10rem] leading-none text-stone/20">
          404
        </span>
        <h1 className="font-heading text-3xl md:text-4xl text-charcoal -mt-8">
          Sayfa Bulunamadi
        </h1>
        <p className="text-warm-gray mt-4 max-w-md mx-auto">
          Aradiginiz sayfa mevcut degil veya tasindi. Ana sayfaya donerek
          kesfetmeye devam edebilirsiniz.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3.5 bg-stone text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-stone-dark transition-colors"
        >
          Ana Sayfaya Don
        </Link>
      </div>
    </section>
  );
}
