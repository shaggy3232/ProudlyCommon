import React, { useEffect } from 'react';
import './HeroBanner.css';

const HeroBanner = () => {

  useEffect(() => {
    const gridContent = document.querySelector(".content-grid");
    const gridTitle = gridContent.querySelector(".content-grid-title");
    
    const getScroll = () => {
      const yNormalized = Math.min(window.scrollY / window.innerHeight, 1);
      console.log(yNormalized)
      gridContent.style.setProperty("--gridOpacity", yNormalized);
      gridContent.style.setProperty("--gridScale", 1 + yNormalized);
      gridContent.style.setProperty("--gridTranslate", 5 - 5 * yNormalized + "vh");
      gridTitle.style.setProperty("--gridOpacity", 1 - yNormalized);
    };
    window.removeEventListener('scroll', getScroll);
    window.addEventListener("scroll", getScroll);

    return () => {
      window.removeEventListener("scroll", getScroll);
    };
  }, []);
  

  return (
    <div className="main">
      <div className="content-grid">
        <div className="content-grid-title">
          <h1>Unlock Life</h1>
        </div>
        <div className="content-grid__scroll">
          <div className="content-grid__sticky">
            <div className="content-grid__items">
            <div className="grid__item"><img src="https://i.ibb.co/wLnjZDW/photo-1575102890923-2d7afc68fdd8.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/GkvVvSs/andrey-zvyagintsev-a2-YKC0ux-Oaw-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/2h127L2/stories-wxrrcb-KLTX0-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/1sFydrH/naail-hussain-Raj-S9-Wfnw-E-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/jJmPK3S/photo-1573976366083-5ce0d56439cf.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/gw7NRr2/clayton-cardinalli-wodb3-Pm3-E-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/3csj2wj/hu-chen-E5nq-Fil-Jb-UI-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/d0rBQnP/photo-1573370280818-48d5e5299afa.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/WvqxJSB/alabaster-co-ZMZD5hby0cg-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/0c2280j/natalya-letunova-j-Cz-Jsi-Yi-Ws-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/VJBLvW5/bogdan-che-a-NSAg7f1-VLMk-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/jfWDx2R/hector-falcon-Ss-A5-Tl-Mmg-AY-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/44gRxBq/joshua-rawson-harris-v-n-X1l4sdzo-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/pZnBgPL/lucas-mendes-n-XYkvqwn8-UQ-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/PN4PsbN/bill-xi-8j-Jl-YMVU4-Tg-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/2vmJSvQ/said-alamri-c-IUozi9-BM34-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/MS6FtN4/jess-harper-sunday-t-BKYoc-Akz-RU-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/27GQ3zt/aleksander-borzenets-HOl3-K2p-EIQg-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/1sg7J1V/photo-1575275402138-8b840cf4504f.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/dPcb2k6/ivars-utinans-FZPv-Eam-SYD8-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/BVcmmLn/aleksander-borzenets-9-RNsy90-On-U0-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/GP6HGmL/the-honest-company-Ai-ADE3prv90-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/p4ts0cR/ron-mcclenny-pwh-GHarpll-Q-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/zXpMTDy/sergey-pesterev-GYIxd-UFEk-X8-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/4J7B10B/the-honest-company-SYIpx-U6la-A0-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/M7X7y1C/drew-dempsey-d-MQSSJvbk-G4-unsplash.jpg" alt="" className="grid__item_image"/></div>
          <div className="grid__item"><img src="https://i.ibb.co/xFtt8hQ/photo-1530071698688-1e4c30e1ea52.jpg" alt="" className="grid__item_image"/></div>
            </div>
          </div>
        </div>
      </div>

      <div className="band-center-text">
        <h2>We believe that city life is a beautiful life.</h2>
      </div>
    </div>
  );
};

export default HeroBanner;
