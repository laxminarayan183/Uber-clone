import { MapPin } from "lucide-react";
import React from "react";

const LocationSearchPanel = ({
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
}) => {
  // const handleSuggestionClick = (suggestion) => {
  //   if (activeField === "pickup") {
  //     setPickup(suggestion);
  //   } else if (activeField === "destination") {
  //     setDestination(suggestion);
  //   }
  //   // setVehiclePanel(true)
  //   // setPanelOpen(false)
  // };

  const locations = [
    "24A,Solapur Lorem ipsum, dolor sit amet consectetur adipisicing eli officiis!",
    "20B,Pune Lorem ipsum, dolor sit amet consectetur adipisicing eli officiis!",
    "26C,Mumbai Lorem ipsum, dolor sit amet consectetur adipisicing eli officiis!",
    "28D,Hyderabad Lorem ipsum, dolor sit amet consectetur adipisicing eli officiis!",
  ];
  return (
    <div>
      {locations.map((location, idx) => (
        <div
          key={idx}
          onClick={() => {
            // setVehiclePanel(true);
            // setPanelOpen(false);
            setPickup(location);
            setDestination(location);
          }}
          className="flex items-center justify-start gap-4 my-2 border-2 p-3 rounded-xl border-gray-100 active:border-black"
        >
          <h2 className="bg-[#eee] h-10 w-10 rounded-full flex items-center justify-center">
            <MapPin />
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
