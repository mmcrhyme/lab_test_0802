import React from "react";
// import style from "../styles/test.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const news = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
    
const items = [
    {title: "1", img: '/1.avif'},
    {title: "2", img: '/2.avif'},
    {title: "3", img: '/3.avif'},
    {title: "4", img: '/4.avif'},
    {title: "5", img: '/5.avif'},
    {title: "6", img: '/6.avif'},
    {title: "7", img: '/7.avif'},
    {title: "8", img: '/8.avif'},
    {title: "9", img: '/9.avif'},
    {title: "10", img: '/10.avif'},
    {title: "11", img: '/11.avif'},
    {title: "12", img: '/12.avif'},
    {title: "13", img: '/13.avif'},
    {title: "14", img: '/14.avif'},
    {title: "15", img: '/15.avif'},
    {title: "16", img: '/16.avif'},
    {title: "17", img: '/17.avif'},
    {title: "18", img: '/18.avif'},
    {title: "19", img: '/19.avif'},
    {title: "20", img: '/20.avif'},
    {title: "21", img: '/21.avif'},
    {title: "22", img: '/22.avif'},
    {title: "23", img: '/23.avif'},
    {title: "24", img: '/24.avif'},
    {title: "25", img: '/25.avif'},
    {title: "26", img: '/26.avif'},
    {title: "27", img: '/27.avif'},
    {title: "28", img: '/28.avif'},
    {title: "29", img: '/29.avif'},
    {title: "30", img: '/30.avif'},
    {title: "31", img: '/31.avif'},
    {title: "32", img: '/32.avif'},
    {title: "33", img: '/33.avif'},
    {title: "34", img: '/34.avif'},
    {title: "35", img: '/35.avif'},
    {title: "36", img: '/36.avif'},
    {title: "37", img: '/37.avif'},
    {title: "38", img: '/38.avif'},
    {title: "39", img: '/39.avif'},
    {title: "40", img: '/40.avif'},
    {title: "41", img: '/41.avif'},
    {title: "42", img: '/42.avif'},
    {title: "43", img: '/43.avif'},
    {title: "44", img: '/44.avif'},
    {title: "45", img: '/45.avif'},
    {title: "46", img: '/46.avif'},
    {title: "47", img: '/47.avif'},
    {title: "48", img: '/48.avif'},
    {title: "49", img: '/49.avif'},
    {title: "50", img: '/50.avif'},
    {title: "51", img: '/51.avif'},
    {title: "52", img: '/52.avif'},
    {title: "53", img: '/53.avif'},
    {title: "54", img: '/54.avif'},
    {title: "55", img: '/55.avif'},
    {title: "56", img: '/56.avif'},
    {title: "57", img: '/57.avif'},
    {title: "58", img: '/58.avif'},
    {title: "59", img: '/59.avif'},
    {title: "60", img: '/60.avif'},
    {title: "61", img: '/61.avif'},
    {title: "62", img: '/62.avif'},
    {title: "63", img: '/63.avif'},
    {title: "64", img: '/64.avif'},
    {title: "65", img: '/65.avif'},
    {title: "66", img: '/66.avif'},
    {title: "67", img: '/67.avif'},
    {title: "68", img: '/68.avif'},
    {title: "69", img: '/69.avif'},
    {title: "70", img: '/70.avif'},
    {title: "71", img: '/71.avif'},
    {title: "72", img: '/72.avif'},
    {title: "73", img: '/73.avif'},
    {title: "74", img: '/74.avif'},
    {title: "75", img: '/75.avif'},
    {title: "76", img: '/76.avif'},
    {title: "77", img: '/77.avif'},
    {title: "78", img: '/78.avif'},
    {title: "79", img: '/79.avif'},
    {title: "80", img: '/80.avif'},
    {title: "81", img: '/81.avif'},
    {title: "82", img: '/82.avif'},
    {title: "83", img: '/83.avif'},
]
    
    return (
      <div>
        <img className="w-1/4 h-1/4" src="/logo.png" alt="logo" />
        <Slider {...settings}>
            {items && items.map(item => {
                return (
                    <Image className="w-1/4 h-1/4 m-5" src={item.img} />
                )
            })}
        </Slider>
    　</div>
  );
};

export default news;