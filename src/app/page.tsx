import Link from "next/link";
export default function Page() {
  return (
    <section className="min-h-screen h-full w-full overflow-hidden flex justify-center py-10 px-4">
      <div className="h-full w-full max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-heading">Gabríel Máni</h1>
          
          <p className="text-normal">
            hæhæ, er nemandi á þriðja ári í Tækniskólanum þar sem ég legg stund á tölvunarfræði. Ég hef sérstakan áhuga á{' '}
            <span className="text-lightsky">gagnafræði</span> og þróun sjálfvirkra lausna í kringum hana, auk{' '}
            <span className="text-lightgreen">vefforritunar</span>, bæði í framenda og bakenda.
          </p>
          
          <p className="text-normal">
            Reynsla mín í vefforritun er talsverð, þar sem ég hef unnið að fjölmörgum verkefnum með React, Next.js, TypeScript og JavaScript. 
            Ég hef einnig traustan grunn í Flask og notað það til að þróa bakenda lausnir. Aðalforritunarmálin sem ég vinn með eru Python og JavaScript, 
            en ég hef einnig grunnþekkingu í öðrum málum, eins og BAT skriftum.
          </p>
          
          <p className="text-normal">
            Ég hef góða reynslu af PostgreSQL gagnagrunnum og nýt þá við þróun á gagnadrifnum lausnum. 
            Verkefni mín endurspegla áhuga minn á því að sameina öflugar gagnavinnsluaðferðir við notendavænar og áreiðanlegar vefforritanir.
          </p>
          
          <p className="text-normal">
            Markmið mitt er að halda áfram að þróa hæfileika mína á sviði gagnafræði og hugbúnaðarþróunar, 
            með áherslu á að skapa nýstárlegar lausnir sem bæta og einfalda líf notenda.
          </p>
        </div>

        <hr className="border-lightbrown rounded-full my-10 border-[2px]" />
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lightpink mb-3">nýjustu verkefni</p>
            <ul className="flex flex-col">
              <li className="underline underline-offset-8 hover:decoration-lightgreen flex cursor-pointer items-start hover:-translate-y-1 transition-all">
                <Link href="https://github.com/GabrielMani15/automaticnextjscreations">Git and Next.js automations</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-lightpink mb-3">Upplýsingar</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="mailto:gabriel.sigvaldason@gmail.com" className="bg-lightgreen text-black flex justify-center items-center gap-x-2 h-10 w-full sm:max-w-24 rounded-[3px] font-black text-sm hover:bg-opacity-95">
                <svg width="19" height="16" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.08322 3.40947C0.75 4.64946 0.75 6.36008 0.75 9C0.75 12.7497 0.75 14.6246 1.70491 15.9389C2.01331 16.3634 2.3866 16.7367 2.81107 17.0451C4.1254 18 6.00027 18 9.75 18H11.75C15.4997 18 17.3746 18 18.6889 17.0451C19.1134 16.7367 19.4867 16.3634 19.7951 15.9389C20.75 14.6246 20.75 12.7497 20.75 9C20.75 6.35129 20.75 4.63806 20.4134 3.39709L18.3107 5.49986C16.6784 7.13214 15.3992 8.41132 14.267 9.2752C13.1081 10.1594 12.0153 10.6789 10.7499 10.6789C9.48441 10.6789 8.39167 10.1594 7.23274 9.2752C6.10048 8.41132 4.82131 7.13213 3.18904 5.49984L1.23385 3.54466L1.08322 3.40947Z" fill="#090909"/>
                  <path d="M1.75 2L1.85885 2.09007L2.26587 2.45535L4.20913 4.39861C5.89079 6.08027 7.09981 7.28703 8.14261 8.08267C9.16812 8.8651 9.94425 9.17894 10.7499 9.17894C11.5555 9.17894 12.3316 8.8651 13.3571 8.08267C14.3999 7.28703 15.6089 6.08027 17.2906 4.39861L19.5985 2.0907L19.7241 1.96579C19.4157 1.54132 19.1134 1.26331 18.6889 0.954915C17.3746 0 15.4997 0 11.75 0H9.75C6.00027 0 4.1254 0 2.81107 0.954915C2.3866 1.26331 2.0584 1.57553 1.75 2Z" fill="#090909"/>
                </svg>
                Email
              </Link>
              
              <Link href="https://github.com/GabrielMani15" className="bg-lightgreen text-black h-10 w-full sm:max-w-24 rounded-[3px] font-black text-sm hover:bg-opacity-95 flex justify-center items-center gap-x-2">
                <svg width="20" height="20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M40 2.5C18.8208 2.5 1.66667 19.6542 1.66667 40.8333C1.66667 57.7958 12.6396 72.1229 27.8771 77.2021C29.7938 77.5375 30.5125 76.3875 30.5125 75.3812C30.5125 74.4708 30.4646 71.4521 30.4646 68.2417C20.8333 70.0146 18.3417 65.8937 17.575 63.7375C17.1438 62.6354 15.275 59.2333 13.6458 58.3229C12.3042 57.6042 10.3875 55.8312 13.5979 55.7833C16.6167 55.7354 18.7729 58.5625 19.4917 59.7125C22.9417 65.5104 28.4521 63.8812 30.6563 62.875C30.9917 60.3833 31.9979 58.7062 33.1 57.7479C24.5708 56.7896 15.6583 53.4833 15.6583 38.8208C15.6583 34.6521 17.1438 31.2021 19.5875 28.5187C19.2042 27.5604 17.8625 23.6312 19.9708 18.3604C19.9708 18.3604 23.1813 17.3542 30.5125 22.2896C33.5792 21.4271 36.8375 20.9958 40.0958 20.9958C43.3542 20.9958 46.6125 21.4271 49.6792 22.2896C57.0104 17.3062 60.2208 18.3604 60.2208 18.3604C62.3292 23.6312 60.9875 27.5604 60.6042 28.5187C63.0479 31.2021 64.5333 34.6042 64.5333 38.8208C64.5333 53.5312 55.5729 56.7896 47.0438 57.7479C48.4333 58.9458 49.6313 61.2458 49.6313 64.8396C49.6313 69.9667 49.5833 74.0875 49.5833 75.3812C49.5833 76.3875 50.3021 77.5854 52.2188 77.2021C67.3604 72.1229 78.3333 57.7479 78.3333 40.8333C78.3333 19.6542 61.1792 2.5 40 2.5V2.5Z" fill="black"/>
                </svg>
                Github
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
