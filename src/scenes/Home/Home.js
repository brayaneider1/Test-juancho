import  React,{useState} from 'react';
import { dummy } from '../../common/dummy/dummy';
import { AddresBanner } from '../../components/AddressBanner/AddresBanner';
import AddressMap from '../../components/AddressMap/AddressMap';
import { AddressSearch } from '../../components/AddressSearch/AddressSearch';

export const Home = () => {

  const [data, setData] = useState([])

 console.log('datos',data)
  return (
    <div className="home" >
      <div className="banner">
          <h1>IP Address Tracker</h1>
          <AddressSearch data={data} setData={setData} dummy={dummy.steps} />
          <AddresBanner data={data} />
      </div>
      <div className="container-map">
        <AddressMap data={data} />
      </div>
    </div>
  )
}