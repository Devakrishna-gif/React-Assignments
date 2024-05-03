import BannerImage from '../../images/fooddelivery-banner.avif';
const Banner = () => {
    return (
        <div className='banner_container'>
            <img src={BannerImage} alt='banner' className='banner_image' />
        </div>
    )
}

export default Banner;