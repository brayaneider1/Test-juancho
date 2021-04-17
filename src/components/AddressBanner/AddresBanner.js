import React from 'react'
import { dummy } from '../../common/dummy/dummy'

export const AddresBanner = () => {
    return (
        <div className="address-banner" >
            {dummy.steps.map(item => (
                <>
                    <div className="item">
                        <h4>
                            IP ADDRESS
                        </h4>
                        <span className="desc">{item.ipAddress}</span>
                    </div>
                    <hr className="divider" />
                    <div className="item">
                        <h4>
                           location
                        </h4>
                        <span className="desc">{item.location}</span>
                    </div>
                    <hr className="divider" />
                    <div className="item">
                        <h4>
                            TIMEZONE
                        </h4>
                        <span className="desc">{item.timezone}</span>
                    </div>
                    <hr className="divider" />
                    <div className="item">
                        <h4>
                            ISP
                        </h4>
                        <span className="desc">{item.isp}</span>
                    </div>
                </>
            ))}
        </div>
    )
}
