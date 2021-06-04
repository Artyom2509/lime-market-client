import React from 'react';

import eliplse from '../assets/icons/logo/Ellipse 1.svg';
import frame from '../assets/icons/logo/Frame.svg';
import phone from '../assets/icons/top-line/Shape.svg';
import zone from '../assets/icons/top-line/clock(1) 1.svg';
import clock from '../assets/icons/top-line/Vector.svg';
import arrow from '../assets/icons/top-line/arrow.svg';
import catalog from '../assets/icons/catalog-button.svg';
import loupe from '../assets/icons/loupe.svg';
import percent from '../assets/icons/percent.svg';
import arrowYellow from '../assets/icons/arrow-yellow.svg';
import cart from '../assets/icons/cart.svg';
import favorites from '../assets/icons/favorites.svg';
import cabinet from '../assets/icons/cabinet.svg';

interface Props {}

export const HomePage = (props: Props) => {
	return (
		<div className="header">
			<div className="logo logo--top">
				<img src={eliplse} className="logo__wrapper" alt="" />
				<a href="#" className="logo__link">
					<img src={frame} className="logo__image" alt="" />
				</a>
			</div>
			<div className="topline">
				<div className="header__wrapper flex space-between">
					<div className="topline-info">
						<div className="topline-info__item">
							<img src={phone} alt="" className="topline-info__img" />
							<div className="topline-info__text topline-info__text--phone">
								+7 777 555 66 66
							</div>
						</div>
						<div className="topline-info__item">
							<img src={zone} alt="" className="topline-info__img" />
							<a href="#" className="topline-info__text">
								Зона доставки
								<span className="arrow">
									<img src={arrow} alt="" />
								</span>
							</a>
						</div>
						<div className="topline-info__item">
							<img src={clock} alt="" className="topline-info__img" />
							<a href="#" className="topline-info__text">
								17:00 - 17:45
								<span className="arrow">
									<img src={arrow} alt="" />
								</span>
							</a>
						</div>
					</div>

					<div className="topline-links">
						<a href="#" className="topline-links__item">
							Шеф-лайм
						</a>
						<a href="#" className="topline-links__item">
							Вакансии
						</a>
						<a href="#" className="topline-links__item">
							Вопрос-ответ
						</a>
						<a href="#" className="topline-links__item selected">
							Бонусная программа
						</a>
					</div>
				</div>
			</div>
			<div className="header-menu flex align-center">
				<div className="header__wrapper flex space-between align-center">
					<div className="main-menu">
						<a href="#" className="button button--green">
							<img src={catalog} alt="" className="button__icon" />
							Каталог
						</a>
					</div>

					<div className="search">
						<div className="search__block">
							<input
								type="text"
								placeholder="Купить молоко"
								className="search__input"
							/>
							<a href="#" className="search__button">
								<img src={loupe} alt="" />
							</a>
						</div>
					</div>

					<div className="shop-menu">
						<div className="sales-menu">
							<div className="sales-menu__icon-block">
								<img
									className="sales-menu__icon-block-img"
									src={percent}
									alt=""
								/>
							</div>
							Sale
							<span>
								<img src={arrowYellow} className="sales-menu__arrow" alt="" />
							</span>
						</div>
						<a href="#" className="shop-menu__item">
							<img src={cabinet} alt="" className="shop-menu__item-icon" />
							Cabinet
						</a>
						<a href="#" className="shop-menu__item">
							<img src={favorites} alt="" className="shop-menu__item-icon" />
							Favorites
						</a>
						<a href="#" className="shop-menu__item">
							<img src={cart} alt="" className="shop-menu__item-icon" />
							Cart
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
