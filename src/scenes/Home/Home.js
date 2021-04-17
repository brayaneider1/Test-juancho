import * as React from 'react';
import { AddresBanner } from '../../components/AddressBanner/AddresBanner';
import AddressMap from '../../components/AddressMap/AddressMap';
import { AddressSearch } from '../../components/AddressSearch/AddressSearch';

export const Home = () => {
  return (
    <div className="home" >
      <div className="banner">
          <h1>IP Address Tracker</h1>
          <AddressSearch />
          <AddresBanner />
      </div>
      <div className="home_container-map">
        <AddressMap />
      </div>
    </div>
  )
}