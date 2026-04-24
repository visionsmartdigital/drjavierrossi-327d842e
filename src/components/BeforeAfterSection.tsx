import { useEffect, useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { useI18n } from "@/lib/i18n";
import beforeCase1 from "@/assets/before-after-1-before.png";
import afterCase1 from "@/assets/before-after-1-after.png";
import beforeCase2 from "@/assets/before-after-2-before.png";
import afterCase2 from "@/assets/before-after-2-after.png";
import beforeCase3 from "@/assets/before-after-3-before.png";
import afterCase3 from "@/assets/before-after-3-after.png";
import beforeCase4 from "@/assets/before-after-4-before.png";
import afterCase4 from "@/assets/before-after-4-after.png";
import beforeCase5 from "@/assets/before-after-5-before.png";
import afterCase5 from "@/assets/before-after-5-after.png";
import beforeCase6 from "@/assets/before-after-6-before.png";
import afterCase6 from "@/assets/before-after-6-after.png";

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center bg-muted w-full h-full"
      style={{ aspectRatio: "3/4" }}
    >
      <p className="text-muted-foreground text-sm text-center px-4 font-sans">
        {label}
      </p>
    </div>
  );
}

export function BeforeAfterSection() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cases: Array<{ n: number; before?: string; after?: string }> = [
    { n: 1, before: beforeCase1, after: afterCase1 },
    { n: 2, before: beforeCase2, after: afterCase2 },
    { n: 3, before: beforeCase3, after: afterCase3 },
    { n: 4, before: beforeCase4, after: afterCase4 },
    { n: 5, before: beforeCase5, after: afterCase5 },
    { n: 6, before: beforeCase6, after: afterCase6 },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <span className="text-sm font-medium text-primary tracking-wide">
          {t("Resultados", "Results")}
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-medium text-foreground">
          {t("Antes y después", "Before and after")}
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map(({ n, before, after }) => (
            <div key={n} className="relative rounded-lg overflow-hidden" style={{ aspectRatio: "3/4.4" }}>
              {mounted ? (
                <ReactCompareSlider
                  itemOne={
                    before ? (
                      <ReactCompareSliderImage
                        src={before}
                        alt={`${t("Antes", "Before")} — ${t("Caso", "Case")} ${n}`}
                        style={{
                          objectFit: "cover",
                          objectPosition: n === 4 || n === 6 ? "top center" : undefined,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      <PlaceholderImage label={`${t("Antes", "Before")} — ${t("Caso", "Case")} ${n}`} />
                    )
                  }
                  itemTwo={
                    after ? (
                      <ReactCompareSliderImage
                        src={after}
                        alt={`${t("Después", "After")} — ${t("Caso", "Case")} ${n}`}
                        style={{
                          objectFit: "cover",
                          objectPosition: n === 4 || n === 6 ? "top center" : undefined,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      <PlaceholderImage label={`${t("Después", "After")} — ${t("Caso", "Case")} ${n}`} />
                    )
                  }
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <PlaceholderImage label={`${t("Antes", "Before")} — ${t("Caso", "Case")} ${n}`} />
              )}
              <span className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded bg-background/80 text-foreground backdrop-blur-sm pointer-events-none">
                {t("Antes", "Before")}
              </span>
              <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded bg-background/80 text-foreground backdrop-blur-sm pointer-events-none">
                {t("Después", "After")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
