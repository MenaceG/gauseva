import React from 'react';
import './styles/ServeCard.scss';
import servImg1 from './images/iStock-957820114-india-cows_16c7b60aff4_medium.jpg'
import servImg2 from './images/cow-dairy-farms-american-dairy-association-north-east-35.png'

const ServeCard = () => {
    return (
        <div className='service'>
            <div className='service-card-heading'>
                <h1>Welcome to Gau Seva Dham</h1>
                <p>
                    The FARM Animal Care Program standards are revised every three years to reflect the most current science and
                    best management practices within the dairy industry.
                </p>
            </div>

            <div className='service-card'>
                <div className='service-card-menu'>
                    {/* Card 1 */}
                    <div className='card'>
                        <img src={servImg1} className='service-img' alt='img' />
                        <div className='card-decription'>
                            <h2>Milking</h2>
                            <p>
                                Lexcept to obtain some advantage from
                                it? But who has any right to find fault
                                with a man chooses to enjoy.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='card'>
                        <img src={servImg1} className='service-img' alt='img' />
                        <div className='card-decription'>
                            <h2>Milking</h2>
                            <p>
                                Lexcept to obtain some advantage from
                                it? But who has any right to find fault
                                with a man chooses to enjoy.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='card'>
                        <img src={servImg1} className='service-img' alt='img' />
                        <div className='card-decription'>
                            <h2>Milking</h2>
                            <p>
                                Lexcept to obtain some advantage from
                                it? But who has any right to find fault
                                with a man chooses to enjoy.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='about-gau-seva'>
                    <div className='gau-seva-info-card'>
                        <div className='information-about-gau-seva-description'>
                            <h1>Know About Our Gau Seva<br /> Dham welfare</h1>
                            <p>
                                Gau Seva organizations in India, primarily focused on the welfare of cows due to their cultural and religious significance, also extend their services and campaigns to encompass all animals. These organizations provide shelter, rescue, and rehabilitation services for a wide range of animals, including stray dogs, cats, birds, and wildlife. Spaying and neutering programs help control overpopulation, reducing the suffering of homeless animals, and they offer vaccinations and medical care to improve the well-being of street animals. Gau Seva groups actively promote responsible pet ownership, facilitate animal adoption, and conduct educational campaigns to change public attitudes towards animals. Additionally, they play a crucial role in wildlife protection, conservation, and advocacy, striving to create a more compassionate and respectful society for all living beings. Collaboration with other animal welfare organizations further enhances their efforts to support animals in need.
                            </p>
                        </div>
                        <img src={servImg2} alt='image' className='gau-seva-cow-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServeCard;