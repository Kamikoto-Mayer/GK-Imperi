import React from 'react'
import './Header_main.css'

import img from '../../img/header_main/modern_residential_building_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1470862_o.png'

export default function Header_Main() {
	return (
		<section className='header-main'>
			<div className='container-header'>
				<div className='header-main_wrapper'>
					<div className='header-main__columns header-main__columns_left'>
						<p className="header-main__top-text">Проектирование и строительство</p>
						<p className="header-main__title-text">Строительство под ключ</p>
						<p className='header-main__bottom-text'>Это та компания которая воплотит ваши идеи в жизнь, и благодаря качеству, честности и опыту обеспечит наилучший клиентский сервис, не оставив вас равнодушным.</p>
						<div className='header-main__buttom-text'>
							<a className="contact-button" href="tel:+7 (909) 461-75-94">Позвонить нам</a>
							<a className="contact-button" href="https://wa.me/79673111555">Написать нам</a>
						</div>
					</div>
					<div className='header-main__columns header-main__columns_right'>
						<img src={img} alt="build" className='header-main__img'></img>
					</div>
					<p className='header-main__text'>ИМПЕРИЯ</p>
				</div>
			</div>
		</section>
	)
}

