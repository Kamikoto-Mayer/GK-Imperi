import React from 'react';
import './Our_Specializations.css';

import img1 from '../../img/our_specialization/OS_img_1.png';
import img2 from '../../img/our_specialization/OS_img_2.png';
import img3 from '../../img/our_specialization/OS_img_3.png';
import img4 from '../../img/our_specialization/OS_img_4.png';

export default function Our_Specializations() {
	return (
		<section className="specializations" id="specializations">
   	<div className="container">
      	<h2 className="section-title">Наша специализация</h2>
      	<div className="specializations__wrapper">
				<div className="specialization">
					<img src={img1} alt="Design Plan" className='specialization__img'/>
					<h3>Проектирование</h3>
					<p>Разработка концепций и чертежей, учитывая все пожелания.</p>
				</div>
				<div className="specialization">
					<img src={img2} alt="Interior Design" className='specialization__img'/>
					<h3>Дизайнерский ремонт</h3>
					<p>Уникальные дизайнерские решения для стильного пространства.</p>
				</div>
				<div className="specialization">
					<img src={img3} alt="Architecture Design" className='specialization__img'/>
					<h3>Строительство под ключ</h3>
					<p>Полный спектр строительных работ с высоким качеством.</p>
				</div>
				<div className="specialization">
					<img src={img4} alt="Construction" className='specialization__img'/>
					<h3>Продажа недвижимости</h3>
					<p>Широкий выбор объектов и полное сопровождение сделки.</p>
				</div>
      	</div>
      </div>
    </section>
	)
}
