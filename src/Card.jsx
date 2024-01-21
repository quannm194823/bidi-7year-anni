import React from 'react';
import brownImage from './brown.png';
import greenImage from './green.png';

export default () => (
  <div className="birthdayCard">
    <div className="cardFront">
      <h3 className="happy">HAPPY ANNIVERSARY!</h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
      <img src={greenImage} alt="Green" />

    </div>
    <div className="cardInside">
      <h3 className="back">HAPPY ANNIVERSARY</h3>
      <p className="content">Dear bây bì,</p>
      <p className="content">
        Thời gian trôi qua thật nhanh. Trong 7 năm qua, mỗi khoảnh khắc bên em đều đáng nhớ. Chúc mừng kỷ niệm 7 năm yêu nhau, người yêu thương của anh!
      </p>
      <img src={brownImage} alt="Brown" />
      <p className="name">Nguồn: mạng</p>
    </div>
  </div>
);