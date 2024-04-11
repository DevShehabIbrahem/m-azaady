import React from "react";

type Props = {};

const Table = ({ userSubmit }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Key
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Main Category</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  {userSubmit.main_category}
                </p>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">sub Category</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  {userSubmit.sub_category}
                </p>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Process Type </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  {userSubmit.process_type}
                </p>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Model</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  {userSubmit.model}
                </p>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Brand</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  {userSubmit.brand}
                </p>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Type</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  {userSubmit.type}
                </p>
              </div>
            </div>
          </td>
        </tr>
        {/* El dod */}

        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              Transmission Type
            </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  {userSubmit.transmission_type}
                </p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
