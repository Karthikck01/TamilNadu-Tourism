import React from 'react'
import { DestinationData } from "../DestinationData/index";
import { Container, Image } from 'react-bootstrap';

const PlacesToVisitDetails = () => {
  return (
    <>
        {DestinationData.map((data) => {
            return(
                <Container fluid className='py-5'>
                    <h3 className='text-center'>{data.DestinationDetails.name}</h3>
                    <div className="text-center h6">
                        Tourist places To Visit
                    </div>
                    <div>
                        {data.PlaceMustVist.map((_data, i) => {
                            return(
                                <>
                                <div className="my-5">
                                    <strong>{_data.title} , Overview</strong>
                                <Image src={_data.img} alt="" width={200} height={220} className={ i == 0 || i == 2 ? `float-start mx-3` : `float-end mx-3`}/>
                                <div className="p-3 ">
                                {_data.detailDescription.map((para) => {
                                    return(
                                            <p>{para}</p>
                                    )
                                })}
                                </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </Container>
            )
        })}
    </>
  )
}

export default PlacesToVisitDetails