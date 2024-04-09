import React from "react";
import QrSections from "./QrSections";
import InfoSection from "./InfoSection";

type Props = {};

const ProfileCard = (props: Props) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <InfoSection />
      <hr className="my-6 border-t border-gray-300" />
      <QrSections />
    </div>
  );
};

export default ProfileCard;
