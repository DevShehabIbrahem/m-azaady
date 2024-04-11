import React from "react";
import InfoSection from "./InfoSection";
import QrSections from "./QrSections";

const ProfileCard = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <InfoSection />
      <hr className="my-6 border-t border-gray-300" />
      <QrSections />
    </div>
  );
};

export default ProfileCard;
