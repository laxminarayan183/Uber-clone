import { ChevronDown, IndianRupee, MapPin, MapPinned } from "lucide-react";
import React from "react";

const WaitingForDriver = ({ setWaitingForDriver }) => {
  return (
    <div>
      <div>
        <h5
          onClick={() => {
            setWaitingForDriver(false);
          }}
          className="p-3  text-center absolute top-0 right-0"
        >
          <ChevronDown />
        </h5>
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDv21E5y6ihw1-vHUqdxl6N-JJbcwJF2F6oHuEprlIcevTcy4e12__YH-rN-GkLECDbA&usqp=CAU"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">ABCD</h2>
            <h4 className="text-xl font-semibold -mb-1 -mt-1">MH 13 ZX 1818</h4>
            <p className="text-sm text-gray-600">White Suzuki Alto</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <div>
                <MapPin className="text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-gray-600 text-sm mt-1">Bibwewadi,Pune</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
              <div>
                <MapPinned className="text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  Lorem ipsum dolor sit amet.
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 ">
              <div>
                <IndianRupee className="text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-medium">193</h3>
                <p className="text-gray-600 text-sm mt-1">Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
