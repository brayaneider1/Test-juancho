import React, { useEffect, useState } from 'react'
import { dummy } from '../../common/dummy/dummy'

export const AddresBanner = ({ data }) => {

    const [datos, setdatos] = useState([])

    useEffect(() => {
        setdatos(data.data);
        console.log('datos adentro 2', datos)
    }, [data])

    return (
        <div className="address-banner" >
            {(datos && datos.length>=1) ?
                <>
                  <div className="item">
                        <h4>
                            IP ADDRESS
                         </h4>
                        <span className="desc">{datos[0].ipAddress}</span>
                    </div>
                    <hr className="divider" />
                    <div className="item">
                        <h4>
                            location
                         </h4>
                        <span className="desc">{datos[0].location}</span>
                    </div>
                    <hr className="divider" />
                    <div className="item">
                        <h4>
                            TIMEZONE
                         </h4>
                        <span className="desc">{datos[0].timezone}</span>
                    </div>
                    <hr className="divider" />
                    <div className="item">
                        <h4>
                            ISP
                         </h4>
                        <span className="desc">{datos[0].isp}</span>
                    </div> 
                </>
                :
                <div className="item">
                    <h4>
                        address not tracked
                        </h4>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            }
        </div>
    )
}
