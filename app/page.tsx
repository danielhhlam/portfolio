import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeBodyClass } from "@/components/HomeBodyClass";

const Dot = ({ sub = false }: { sub?: boolean }) => (
  <span
    className={`flex-none text-muted ${sub ? "text-[7px] leading-[2.2]" : "text-[8px] leading-[1.9]"}`}
    aria-hidden="true"
  >
    &#9642;
  </span>
);

const Row = ({ sub = false, group = false, children }: { sub?: boolean; group?: boolean; children: React.ReactNode }) => (
  <p className={`m-0 flex items-baseline gap-[11px] ${sub ? "ml-[21px]" : ""} ${group ? "mt-[clamp(8px,1.6vh,15px)]" : ""}`}>
    <Dot sub={sub} />
    <span className="min-w-0 flex-1">{children}</span>
  </p>
);

const M = ({ children }: { children: React.ReactNode }) => <span className="text-muted">{children}</span>;
const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="ink" href={href} target="_blank" rel="noopener">
    {children}
  </a>
);

export default function Home() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <HomeBodyClass />
      <div className="mx-auto flex min-h-0 w-full max-w-[660px] flex-1 animate-fade flex-col px-6 pb-[clamp(12px,2vh,24px)]">
        <Header compact />

        <main className="flex min-h-0 flex-1 flex-col justify-[safe_center] gap-[clamp(4px,.85vh,7px)] overflow-auto text-[clamp(12.5px,1.55vh,14px)] leading-[1.5]">
          <Row>
            Previous Software Developer <M>at</M> <Ext href="https://www.computer-talk.com/">ComputerTalk</Ext>
          </Row>
          <Row sub>
            Built a <Ext href="https://www.computer-talk.com/">RAG documentation tool</Ext>,{" "}
            <M>greatly reducing intern onboarding time</M>
          </Row>
          <Row group>
            <Ext href="https://uwaterloo.ca/future-students/programs/computer-engineering">Computer Engineering</Ext>{" "}
            <M>at</M> <Ext href="https://uwaterloo.ca/">UWaterloo</Ext>
          </Row>
          <Row group>Some things I&rsquo;ve built:</Row>
          <Row sub>
            <Link className="ink" href="/projects?p=OpenCafe">
              OpenCafe
            </Link>
            , <M>an open-source POS for 30+ weekly caf&eacute; users</M>
          </Row>
          <Row group>Other experience:</Row>
          <Row sub>
            Autonomy Software <M>at</M> <Ext href="https://www.uwarg.com/">WARG</Ext>
          </Row>
          <Row sub>
            Software Engineer <M>at</M> <Ext href="https://www.watonomous.ca/">WATonomous</Ext>
          </Row>
          <Row group>
            In my free time: <span className="font-medium">lifting</span>
            <M>,</M> <span className="font-medium">barbering</span>
            <M>, and</M> <span className="font-medium">listening to music</span>
          </Row>
        </main>

        <Footer compact />
      </div>
    </div>
  );
}
