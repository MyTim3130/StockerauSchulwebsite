import React from "react";
import Image from "next/image";

const Direktion = () => {
  return (
    <section className="h-screen w-screen pt-[10vh] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-around h-5/6">
        <h1 className="text-3xl">Direktion</h1>
        <h2>Mag. Claudia Reinsperger</h2>
        <div className="flex flex-col">
          <span>Sprechstunde: Tel. Vereinbarung</span>
          <br />
          <div className="flex flex-col">
            <span>Tel: 02266/62143 (Sekretariat)</span>
            <span>Fax: 02266/62143-4</span>
            <span>E-Mail: office@bgstockerau.ac.at</span>
          </div>
        </div>
        <div className="flex">
          <Image
            className="h-[50vh] w-auto"
            src="/images/Reinsperger.jpg"
            height={10000}
            width={10000}
            alt="missing image"
          />
          <p className="w-[60vw]">
            Ich wurde mit 1. Oktober 2012 mit der provisorischen Leitung des
            BG/BRG Stockerau betraut. Seit 2013 bin ich Direktorin dieser
            Schule. Ich möchte mich daher auf diesem Weg kurz bei Ihnen
            vorstellen: <br /> <br /> <br />
            Mein Name ist Claudia Reinsperger. Ich wurde am 26. Dez. 1966 in
            Stockerau geboren und maturierte im Jahr 1985 am BG/BRG Stockerau
            mit gutem Erfolg. Ich bin verheiratet und Mutter zweier Söhne, die
            beide am BG/BRG Stockerau in den Jahren 2013 und 2014 maturiert
            haben. Nach der Matura begann ich an der Universität Wien mit dem
            Lehramtsstudium für die Fächer Mathematik und Chemie. <br /> <br />
            Nach dem Abschluss meines Studiums folgte 1993 das
            Unterrichtspraktikum am BG/BRG Hollabrunn, und parallel dazu kehrte
            ich mit einer halben Lehrverpflichtung für Chemie an meine Schule in
            Stockerau zurück. Das Unterrichtspraktikum konnte ich mit
            Auszeichnung abschließen. Seit dem Schuljahr 1993/94 unterrichte
            ich, abgesehen von Mutterschutzurlauben bei der Entbindung meiner
            beiden Söhne, am BG/BRG Stockerau die Fächer Mathematik und Chemie. <br /> <br />
            Mit den Jahren wuchs ich neben meiner Lehrtätigkeit immer stärker in
            das schulische Umfeld hinein. Ich engagierte mich sehr für die
            Weiterentwicklung „meiner“ Schule. Zu Beginn investierte ich viel
            Zeit in die Schnittstellenproblematik VS-AHS. Daraus ergab sich die
            Tätigkeit der Bildungsberatung, die ich gemeinsam mit meiner
            Kollegin Mag. Sommer-Hubatschke 2007 übernahm. <br /> <br /> Seit 2005 war ich
            außerdem im SGA als Lehrervertreterin tätig. Dabei habe ich immer
            versucht, ein gutes Gesprächsklima zwischen den einzelnen Vertretern
            aufrecht zu erhalten. <br /> <br /> Eine gute Kommunikationsbasis ist entscheidend
            für die gemeinsame Arbeit. <br /> <br /> Nachdem Schule nicht nur eine Stätte der
            Wissensvermittlung ist, sondern auch ein Ort der menschlichen
            Begegnung, muss Respekt und persönliche Wertschätzung allen
            Schulpartnern gegenüber stehen. Der Austausch mit den Eltern,
            Schülern und Lehrern ist daher sehr wichtig. <br /> <br /> Unsere Gesellschaft
            konzentriert sich leider im Augenblick hauptsächlich auf Fehler und
            Schwächen, mir ist es jedoch wichtig, bewusst Gelungenes und
            Positives in den Mittelpunkt der Aufmerksamkeit zu rücken. Es soll
            ein ermutigendes Umfeld geschaffen werden. Die Jugendlichen sollen
            ein gesundes Selbstwertgefühl entwickeln können, zu Persönlichkeiten
            heranwachsen und sich, die Welt und andere Menschen als wertvoll
            erleben. Sie sollen stolz sein, unsere Schule absolviert zu haben. <br /> <br /> <br />
            Ich hoffe, dass es mir jeden Tag aufs Neue gelingt, meine Vorhaben
            umzusetzen und verspreche Ihnen, mein Bestes zu geben! <br /> <br /> Ich freue
            mich auf eine gute Zusammenarbeit, <br /> <br /> <br /> Mag. Claudia Reinsperger
            Direktorin des BG/BRG Stockerau
          </p>
        </div>
      </div>
    </section>
  );
};

export default Direktion;
