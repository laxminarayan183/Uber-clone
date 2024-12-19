import { ChevronDown, IndianRupee, MapPin, MapPinned } from "lucide-react";
import React from "react";

const ConfirmRide = ({ setVehicleFound, setConfirmRidePanel }) => {
  return (
    <div>
      <h5
        onClick={() => {
          setConfirmRidePanel(false);
        }}
        className="p-3  text-center absolute top-0 right-0"
      >
        <ChevronDown />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          className="h-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDv21E5y6ihw1-vHUqdxl6N-JJbcwJF2F6oHuEprlIcevTcy4e12__YH-rN-GkLECDbA&usqp=CAU"
          alt=""
        />
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

          <button
            onClick={() => {
              setVehicleFound(true);
              setConfirmRidePanel(false);
            }}
            className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setConfirmRidePanel(false);
            }}
            className="w-full mt-5 bg-red-600 text-white font-semibold p-2 rounded-lg"
          >
            Cancel Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRide;
