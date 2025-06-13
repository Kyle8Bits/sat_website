import React from "react";
import Button from "../../components/ui/Button";
import Tour from "../../components/ui_dashboard/Tour";

function Works() {
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
          <Tour
            school="THPT Thủ Đức"
            date="2023-09-15"
            headcount="30"
            lunch={true}
            group="5"
            status="campus-tour"
          />
          <Tour
            school="THPT Thủ Đức"
            date="2023-09-15"
            headcount="30"
            lunch={true}
            group="5"
            status="campus-tour"
          />{" "}
          <Tour
            school="THPT Thủ Đức"
            date="2023-09-15"
            headcount="30"
            lunch={true}
            group="5"
            status="campus-tour"
          />{" "}
          <Tour
            school="THPT Thủ Đức"
            date="2023-09-15"
            headcount="30"
            lunch={true}
            group="5"
            status="campus-tour"
          />
          <Tour
            school="THPT Thủ Đức"
            date="2023-09-15"
            headcount="30"
            lunch={true}
            group="5"
            status="campus-tour"
          />
          <Tour
            school="THPT Thủ Đức"
            date="2023-09-15"
            headcount="30"
            lunch={true}
            group="5"
            status="campus-tour"
          />
          <Tour
            school="THPT Thủ Đức"
            date="2023-09-15"
            headcount="30"
            lunch={true}
            group="5"
            status="campus-tour"
          />
          <Tour
            school="THPT Thủ Đức"
            date="2023-09-15"
            headcount="30"
            lunch={true}
            group="5"
            status="campus-tour"
          />
        </div>
      </div>
    </div>
  );
}

export default Works;
