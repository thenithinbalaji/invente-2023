'use client';
import EventDetailsBox, {
  EventDetails,
  NonTechEventChip,
  TechEventChip,
} from '@/components/eventDetailsBox';
import { useState } from 'react';
import { COMevents } from './events';
import EventsDropDown from '@/components/eventsDropDown';
import { Averia_Sans_Libre, Bayon, Stick_No_Bills } from 'next/font/google';
import { useSearchParams } from 'next/navigation';

const averia_sans_libre = Averia_Sans_Libre({
  preload: true,
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const bayon = Bayon({
  preload: true,
  weight: '400',
  subsets: ['latin'],
});

export default function COM() {
  const searchParams = useSearchParams();
  const [selectedEvent, setSelectedEvent] = useState(
    COMevents.events.find(
      (event) =>
        event?.name?.toLowerCase().replace(' ', '') ===
        searchParams?.get('event')?.toLowerCase().replace(' ', '')
    ) || COMevents.events[0]
  );
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const colorScheme = {
    selected: 'bg-[#0B4C3EBD]',
    nonSelected: 'bg-[#6F7A8566]',
    hover: 'hover:bg-[#0B4C3EBD]',
  };

  const bg_color = 'bg-[#13735E]';

  return (
    <>
      <div className="background-gradient fixed left-0 top-0 h-full w-full z-0" />
      <div
        className="flex flex-col justify-center items-center min-h-screen bg-full w-full z-10 sm:px-12 px-6 py-16"
        style={{
          backgroundImage: `url('/background_COM.jpg')`,
        }}
      >
        <div className="flex justify-center flex-col items-center mt-10 z-10">
          <p className="lg:text-2xl md:text-xl">DEPARTMENT OF</p>
          <h1
            className={`${bayon.className} font-medium xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl leading-10 text-center`}
          >
            COMMERCE AND ECONOMICS
          </h1>
          <h4
            className={`${averia_sans_libre.className} md:text-2xl sm:text-xl text-lg italic`}
          >
            (Shiv Nadar University, Chennai)
          </h4>
        </div>

        <EventsDropDown
          {...{
            setDropDownOpen,
            setSelectedEvent,
            dropDownOpen,
            selectedEvent,
            deptEvents: COMevents,
            colorScheme,
            bg_color: bg_color,
            width: '230px',
          }}
        />

        <div className="flex relative lg:mt-8">
          <div className="relative h-fit mt-2 hidden lg:flex flex-col gap-3 items-end">
            {COMevents.events
              .filter((event) => event.event_type === 'tech')
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={colorScheme.selected}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width="w-[210px]"
                    />
                  );
                } else {
                  return (
                    <TechEventChip
                      key={event.name}
                      className={`${colorScheme.nonSelected} ${colorScheme.hover}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width="w-[210px]"
                    />
                  );
                }
              })}
            {/* <div className="relative bottom-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="240"
                height="48"
                viewBox="0 0 308 48"
                fill="none"
              >
                <path
                  d="M5.66666 3C5.66666 4.47276 4.47275 5.66667 3 5.66667C1.52725 5.66667 0.333344 4.47276 0.333344 3C0.333344 1.52724 1.52725 0.333333 3 0.333333C4.47275 0.333333 5.66666 1.52724 5.66666 3ZM307.667 45C307.667 46.4728 306.473 47.6667 305 47.6667C303.527 47.6667 302.333 46.4728 302.333 45C302.333 43.5272 303.527 42.3333 305 42.3333C306.473 42.3333 307.667 43.5272 307.667 45ZM3.5 3V25H2.5V3H3.5ZM23 44.5H305V45.5H23V44.5ZM3.5 25C3.5 35.7696 12.2304 44.5 23 44.5V45.5C11.6782 45.5 2.5 36.3218 2.5 25H3.5Z"
                  fill="white"
                />
              </svg>
              <h3
                className={` ${stick_no_bills.className} text-lg absolute -left-3 bottom-14 uppercase font-bold text-white/80 rotate-[270deg]`}
              >
                Tech
              </h3>
            </div> */}
          </div>

          <EventDetailsBox
            className={`xl:w-[60vw] md:h-[60vh] ${colorScheme.selected}`}
          >
            <EventDetails event={selectedEvent} bg_color={bg_color} />
          </EventDetailsBox>

          <div className="mt-2 hidden lg:flex flex-col gap-3">
            {COMevents.events
              .filter((event) =>
                event.event_type?.toLowerCase().includes('non')
              )
              .map((event) => {
                if (event.name === selectedEvent.name) {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className={`${colorScheme.selected}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width="w-[210px]"
                    />
                  );
                } else {
                  return (
                    <NonTechEventChip
                      key={event.name}
                      className={`${colorScheme.nonSelected} ${colorScheme.hover}`}
                      name={event.name}
                      onClickHandler={() => setSelectedEvent(event)}
                      width="w-[210px]"
                    />
                  );
                }
              })}

            {/* <div className={`relative bottom-6 transform -scale-x-100`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="235"
                height="48"
                viewBox="0 0 308 48"
                fill="none"
              >
                <path
                  d="M5.66666 3C5.66666 4.47276 4.47275 5.66667 3 5.66667C1.52725 5.66667 0.333344 4.47276 0.333344 3C0.333344 1.52724 1.52725 0.333333 3 0.333333C4.47275 0.333333 5.66666 1.52724 5.66666 3ZM307.667 45C307.667 46.4728 306.473 47.6667 305 47.6667C303.527 47.6667 302.333 46.4728 302.333 45C302.333 43.5272 303.527 42.3333 305 42.3333C306.473 42.3333 307.667 43.5272 307.667 45ZM3.5 3V25H2.5V3H3.5ZM23 44.5H305V45.5H23V44.5ZM3.5 25C3.5 35.7696 12.2304 44.5 23 44.5V45.5C11.6782 45.5 2.5 36.3218 2.5 25H3.5Z"
                  fill="white"
                />
              </svg>
              <h3
                className={`${stick_no_bills.className} text-lg absolute -left-9 bottom-[77px] uppercase font-bold text-white/80 rotate-[90deg] transform -scale-x-100`}
              >
                Non-Tech
              </h3>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
