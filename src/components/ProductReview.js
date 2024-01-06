import React, { useState } from 'react';
import './styles/ProductReview.scss';
import imgData from './ImageData';
import { Link } from 'react-router-dom';
import { Star, StarHalf, StarOutline } from '@mui/icons-material';

const ProductReview = () => {
    const [productReview, setProductReview] = useState([
        {
            productReviewImage: imgData.image1,
            productReviewDescrptionHalf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel`,
            productReviewDescrptionHalf2: `erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.`,
            showMore: false // New property for showing more content
        },

        {
            productReviewImage: imgData.image1,
            productReviewDescrptionHalf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel`,
            productReviewDescrptionHalf2: `erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.`,
            showMore: false // New property for showing more content
        },

        {
            productReviewImage: imgData.image1,
            productReviewDescrptionHalf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel`,
            productReviewDescrptionHalf2: `erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.`,
            showMore: false // New property for showing more content
        },

        {
            productReviewImage: imgData.image1,
            productReviewDescrptionHalf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel`,
            productReviewDescrptionHalf2: `erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.`,
            showMore: false // New property for showing more content
        },

        {
            productReviewImage: imgData.image1,
            productReviewDescrptionHalf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel`,
            productReviewDescrptionHalf2: `erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.`,
            showMore: false // New property for showing more content
        },

        {
            productReviewImage: imgData.image1,
            productReviewDescrptionHalf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel`,
            productReviewDescrptionHalf2: `erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.`,
            showMore: false // New property for showing more content
        },

        {
            productReviewImage: imgData.image1,
            productReviewDescrptionHalf1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel`,
            productReviewDescrptionHalf2: `erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.`,
            showMore: false // New property for showing more content
        }
        // Add other product review objects as needed
    ]);

    const [reviewFormData, setReviewFormData] = useState({
        userName: '',
        userEmail: '',
        comments: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReviewFormData({
            ...reviewFormData,
            [name]: value
        });
    };

    const toggleReadMore = (index) => {
        const updatedReviews = productReview.map((review, i) => {
            if (index === i) {
                return { ...review, showMore: !review.showMore };
            } else {
                return review;
            }
        });
        setProductReview(updatedReviews);
    };

    const submitReview = (e) => {
        e.preventDefault();
        // Handle submission of review data (e.g., send it to an API)
        console.log('Review submitted:', reviewFormData);
        // Reset form data after submission
        setReviewFormData({
            userName: '',
            userEmail: '',
            comments: ''
        });
    };

    return (
        <div className='product-review'>
            <div className='product-review-banner'>
                <h1>Product Review</h1>
                <p><Link to='/' className='goback-home'>Home</Link> {'>'} <Link to=''>Product Review</Link></p>
            </div>

            <div className='review'>

                <div className='product-review-menu'>
                    {productReview.map((productReviewData, index) => (
                        <div className='product-review-card' key={index}>
                            <img src={productReviewData.productReviewImage} alt='img' className='product-profile-review-img' />

                            <div className='product-review-description'>
                                <p>
                                    {productReviewData.productReviewDescrptionHalf1}
                                    {productReviewData.showMore ? (
                                        <span id="more">
                                            {productReviewData.productReviewDescrptionHalf2}
                                        </span>
                                    ) : (
                                        <span id="more"></span>
                                    )}
                                    <span id="dots">...</span>
                                </p>

                                <div className='product-riview-bs'>
                                    <button onClick={() => toggleReadMore(index)} className='read-more-review' id={`myBtn-${index}`}>
                                        {productReviewData.showMore ? 'Read less' : 'Read more'}
                                    </button>

                                    <div className='star-group'>
                                        <Star className='review-star' />
                                        <Star className='review-star' />
                                        <Star className='review-star' />
                                        <StarHalf className='review-star' />
                                        <StarOutline className='review-star' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='review-form'>
                    <h2>Leave a Review</h2>
                    <form onSubmit={submitReview}>
                        <button><Star /></button>
                        <button><Star /><Star /></button>
                        <button><Star /><Star /><Star /></button>
                        <button><Star /><Star /><Star /><Star /></button>
                        <button><Star /><Star /><Star /><Star /></button><br />
                        <input
                            type="text"
                            name="userName"
                            placeholder="Your Name"
                            value={reviewFormData.userName}
                            onChange={handleInputChange}
                        /><br />

                        <input
                            type="email"
                            name="userEmail"
                            placeholder="Your Email"
                            value={reviewFormData.userEmail}
                            onChange={handleInputChange}
                        /><br />

                        <textarea
                            name="comments"
                            placeholder="Your Comments"
                            value={reviewFormData.comments}
                            onChange={handleInputChange}
                        ></textarea><br />

                        <button type="submit" className='submitReview'>Submit Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;
