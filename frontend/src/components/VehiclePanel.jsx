import { ChevronDown } from "lucide-react";
import React from "react";

const VehiclePanel = ({
  setVehiclePanel,
  setConfirmRidePanel,
  selectVehicle,
}) => {
  return (
    <div>
      <h5
        onClick={() => {
          setVehiclePanel(false);
          selectVehicle("car");
        }}
        className="p-3  text-center absolute top-0 right-0"
      >
        <ChevronDown />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehiclePanel(false);
        }}
        className="flex w-full border-2 active:border-black bg-gray-100 mb-2 rounded-xl items-center justify-between p-3"
      >
        <img
          className="h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDv21E5y6ihw1-vHUqdxl6N-JJbcwJF2F6oHuEprlIcevTcy4e12__YH-rN-GkLECDbA&usqp=CAU"
          alt=""
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            UberGo 4
            {/* <span>
                  <UserRound />4
                </span> */}
          </h4>
          <h5 className="font-medium text-small">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable,compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹193.02</h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex w-full border-2 active:border-black bg-gray-100  mb-2 rounded-xl items-center justify-between p-3"
      >
        <img
          className="h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base">
            Moto 1
            {/* <span>
                  <UserRound />4
                </span> */}
          </h4>
          <h5 className="font-medium text-small">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹65.03</h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex w-full border-2 active:border-black bg-gray-100  mb-2 rounded-xl items-center justify-between p-3"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2 ml-2">
          <h4 className="font-medium text-base">
            Auto 3
            {/* <span>
                  <UserRound />4
                </span> */}
          </h4>
          <h5 className="font-medium text-small">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹118.68</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
