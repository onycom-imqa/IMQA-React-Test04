import React from 'react';
import Tour from './Tour';
import {useIMQA} from "imqa-react-sdk";
const Tours = ({tours, removeTour}) => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
            <section>
                <div className='title'>
                    <h2>Our Tours </h2>
                    <div className="underline">
                    </div>
                    <div>
                        {tours.map((tour) =>{
                                return <Tour key={tour.id} {...tour} removeTour={removeTour} />
                            }
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Tours;
