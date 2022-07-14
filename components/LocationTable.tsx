import React, { FC } from "react";
import { WeatherLocation } from "../model/Weather";

interface LocationTableProps {
  locations: WeatherLocation[];
  locationName?: string;
}

export const LocationTable: FC<LocationTableProps> = ({ locations, locationName }) =>
  <div>
    <h2>Locations</h2>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {locations.map(location =>
          <tr key={location.id}>
            <td>{location.name}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>;