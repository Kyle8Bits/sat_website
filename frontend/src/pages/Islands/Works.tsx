import React, { useEffect, useState } from "react";
import type { EventType } from "../../types/event";
import Button from "../../components/ui/Button";
import Tour from "../../components/ui_dashboard/Tour";

const getEvent = async (): Promise<EventType[]> => {
  try {
    const response = await fetch("http://localhost:1414/get_event");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
};

function Works() {
  const [event, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvent();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const runningEvents = event.filter((event) => event.status !== "idle");
  const upcomingEvents = event.filter((event) => event.status === "idle");

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex w-full items-center justify-end bg-transparent">
        <Button
          label="Create +"
          type="button"
          onClick={() => alert("Button Clicked!")}
          variant="primary"
        />
      </div>

      <div className="w-full bg-white shadow rounded-xl text-[28px] font-oswald bold p-4 flex flex-col items-start justify-center gap-4">
        Running Events
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 place-items-center">
          {runningEvents.map((event, index) => (
            <Tour
              key={index}
              school={event.school}
              date={event.date}
              headcount={event.headcount}
              lunch={event.lunch}
              group={event.group}
              status={event.status}
              type={event.type}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-white shadow rounded-xl text-[28px] font-oswald bold p-4 flex flex-col items-start justify-center gap-4">
        Upcoming Events
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 place-items-center">
          {upcomingEvents.map((event, index) => (
            <Tour
              key={index}
              school={event.school}
              date={event.date}
              headcount={event.headcount}
              lunch={event.lunch}
              group={event.group}
              status={event.status}
              type={event.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
