import ActivityImage from "@/components/ActivityImage";
import Link from "next/link";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import PreFooter from "@/components/PreFooter";
import FaqSection, { FaqAccordion } from "@/components/FaqSection";
import LinkArrow from "@/components/LinkArrow";
import { activityWhatsApp, getActivity, priceText } from "@/data/activities";

const focus = "focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-4";
const textLink = `font-bold text-green underline underline-offset-4 ${focus}`;

function ActionLink({ action, whatsapp }) {
  const href = action.whatsapp ? whatsapp : action.slug
    ? `${getActivity(action.slug).path}${action.anchor ? `#${action.anchor}` : ""}`
    : action.href;
  return <Link href={href} className={textLink}>{action.label}<LinkArrow /></Link>;
}

function ActivitySection({ section, whatsapp }) {
  return (
    <section id={section.id} className="scroll-mt-28 border-t border-[#dce4da] py-10 md:py-14">
      <div className={section.image ? "grid items-center gap-8 md:grid-cols-2 md:gap-14" : ""}>
        {section.image && (
          <div className={section.compactImage ? "mx-auto w-full max-w-[560px]" : ""}>
            <ActivityImage src={section.image} alt={section.alt} sizes="(max-width: 767px) 92vw, 560px"
              className={`w-full rounded-[24px] object-cover ${section.compactImage ? "aspect-[4/3]" : "h-[320px] md:h-[440px]"}`}
              style={{ objectPosition: section.imagePosition || "center" }} />
          </div>
        )}
        <div className="min-w-0">
          <h2 className="myH3 mb-5 text-black">{section.title}</h2>
          {section.text && <p className="body1 max-w-[760px] text-[#525b53]">{section.text}</p>}
          {section.items && <ul className="mt-6 space-y-3 pl-5 text-lg leading-relaxed text-[#525b53] list-disc marker:text-green">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          {section.cards && <div className="mt-6 grid gap-4 sm:grid-cols-2">{section.cards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-[#eef1f0] p-6"><h3 className="subH2 mb-3 text-black">{card.title}</h3><p className="text-lg leading-relaxed text-[#525b53]">{card.text}</p></div>
          ))}</div>}
          {section.steps && <ol className="mt-7 grid gap-6 sm:grid-cols-2">{section.steps.map(([title, text], index) => (
            <li key={title} className="flex items-start gap-4"><span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e6efdf] font-bold text-[#246526]">{index + 1}</span><div><h3 className="subH2 mb-2 text-black">{title}</h3><p className="text-lg leading-relaxed text-[#525b53]">{text}</p></div></li>
          ))}</ol>}
          {section.action && <div className="mt-6"><ActionLink action={section.action} whatsapp={whatsapp} /></div>}
        </div>
      </div>
    </section>
  );
}

export default function ActivityLanding({ activity }) {
  const whatsapp = activityWhatsApp(activity.message);
  return (
    <Layout>
      <main className="min-w-0">
        <section className="relative isolate flex min-h-[620px] items-end bg-blue pt-36 pb-14 md:min-h-[650px] md:pb-20">
          <ActivityImage src={activity.hero} alt={activity.heroAlt} fill priority sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: activity.heroPosition || "center" }} />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
          <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#c9efb4]">{activity.eyebrow}</p>
            <h1 className="jakarta max-w-[850px] text-[clamp(2rem,10vw,2.5rem)] leading-[1.08] font-medium tracking-[-0.035em] text-white sm:text-[52px] md:text-[64px]">{activity.heading}</h1>
            <p className="mt-6 text-2xl font-medium text-white">{priceText(activity.options[0])} <span className="text-base font-normal">per person</span></p>
            <Button link={whatsapp} className={`mt-7 min-h-12 px-6 py-3 text-center ${focus}`}>{activity.cta}</Button>
          </div>
        </section>

        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="py-6 text-sm text-[#525b53]">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li><Link href="/" className={`hover:underline ${focus}`}>Home</Link></li>
              <li aria-hidden="true">/</li><li><Link href="/activities" className={`hover:underline ${focus}`}>Activities</Link></li>
              <li aria-hidden="true">/</li><li aria-current="page">{activity.name}</li>
            </ol>
          </nav>
          <dl className="grid gap-px overflow-hidden rounded-[20px] border border-[#dce4da] bg-[#dce4da] sm:grid-cols-3">
            {activity.summary.map(([label, value]) => <div key={label} className="bg-[#eef1f0] px-6 py-5"><dt className="mb-2 text-sm font-bold uppercase tracking-wide text-[#525b53]">{label}</dt><dd className="subH2 text-[#002422]">{value}</dd></div>)}
          </dl>
          <p className="body1 max-w-[900px] py-9 text-[#525b53] md:py-12">{activity.intro}</p>

          <section aria-labelledby="options-heading" className="pb-12 md:pb-16">
            <h2 id="options-heading" className="myH2 max-w-[850px] text-black">{activity.optionsHeading}</h2>
            <p className="body1 mt-5 mb-8 max-w-[800px] text-[#525b53]">{activity.optionsIntro}</p>
            <div className={`grid items-stretch gap-5 ${activity.options.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
              {activity.options.map((option) => <section key={option.id} id={option.id} className="scroll-mt-28 min-w-0 rounded-[24px] border border-[#dce4da] bg-white p-6 md:p-8">
                <h3 className="subH1 text-[#002422]">{option.name}</h3>
                <p className="jakarta mt-5 text-[30px] leading-tight font-medium text-green">{priceText(option)}</p>
                {option.price != null && <p className="mt-1 text-sm text-[#525b53]">per person{option.payment ? ` · ${option.payment}` : ""}</p>}
                <p className="mt-5 text-lg leading-relaxed text-[#525b53]">{option.text}</p>
                <dl className="mt-5 space-y-3 text-base leading-relaxed">{[["Duration", option.duration], ["Departure", option.departure], ["Return", option.return], ["Transport", option.transport]].filter(([, value]) => value).map(([label, value]) => <div key={label}><dt className="font-bold text-black">{label}</dt><dd className="text-[#525b53]">{value}</dd></div>)}</dl>
                <p className="mt-6 font-bold text-black">Included</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[#525b53] marker:text-green">{option.includes.map((item) => <li key={item}>{item}</li>)}</ul>
                {option.excludes && <p className="mt-4 text-sm leading-relaxed text-[#525b53]">Extra: {option.excludes}</p>}
              </section>)}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#525b53]">Prices in US dollars. Contact the lodge for current availability and your booking details.</p>
          </section>

          {activity.rates && <section className="border-t border-[#dce4da] py-10 md:py-14"><h2 className="myH3 mb-6 text-black">{activity.rates.title}</h2><dl className="max-w-[900px] divide-y divide-[#dce4da]">{activity.rates.rows.map(([label, value]) => <div key={label} className="grid gap-2 py-5 sm:grid-cols-2 sm:gap-8"><dt className="subH2 text-black">{label}</dt><dd className="text-lg leading-relaxed text-[#525b53]">{value}</dd></div>)}</dl></section>}

          {activity.sections.map((section) => <ActivitySection key={section.id} section={section} whatsapp={whatsapp} />)}

          {activity.preparation && <section className="my-5 rounded-[24px] bg-[#e9f0e3] p-7 md:p-10"><h2 className="myH3 mb-6 text-[#002422]">{activity.preparation.title}</h2><ul className="grid list-disc gap-x-10 gap-y-3 pl-5 text-lg leading-relaxed text-[#354d39] marker:text-green sm:grid-cols-2">{activity.preparation.items.map((item) => <li key={item}>{item}</li>)}</ul><p className="mt-6 max-w-[850px] text-base leading-relaxed text-[#354d39]">{activity.preparation.note}</p></section>}

        </div>

        <FaqSection headingId="activity-faq-heading">
          <div><FaqAccordion items={activity.faqs} /></div>
        </FaqSection>

        <div className="mx-auto max-w-[1280px] px-5 pt-12 sm:px-8 lg:px-12 md:pt-16">
          <section className="rounded-[24px] bg-[#002422] px-6 py-10 text-white md:p-12">
            <h2 className="myH3 mb-4">Let&apos;s plan your experience</h2>
            <p className="body1 mb-6 max-w-[650px]">Message Funky Monkey Lodge or visit reception. We&apos;ll help you choose a session or tour and arrange your booking.</p>
            <Button link={whatsapp} className={`min-h-12 px-6 py-3 text-center ${focus}`}>{activity.cta}</Button>
          </section>
          <div className="flex flex-col items-start gap-5 pt-9 pb-3">{activity.related?.map((action) => <ActionLink key={action.label} action={action} whatsapp={whatsapp} />)}<Link href="/activities" className={textLink}>Explore all activities<LinkArrow /></Link></div>
        </div>
        <PreFooter />
      </main>
    </Layout>
  );
}
