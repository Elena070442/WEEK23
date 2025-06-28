// import React from 'react';
import './tariff.css';

function Tariff() {
    const tariffs = [
        { title: 'Безлимитный300', price: '300р' },
        { title: 'Безлимитный450', price: '450p' },
        { title: 'Премиум', price: '550р' },
        { title: 'Эксперт', price: '1000р' },
    ];

    const selectedPrice = '550р';

    return (
        <div className="tariffs-container">
            <h1 className="tariffs-title">Наши тарифы</h1>
            <div className="tariffs-list">
                <div className={`tariff ${selectedPrice === '300р' ? 'selected' : ''}`}>
                    <h2 className="tariff-title">Безлимитный300</h2>
                    <div className="tariff-price">300р</div>
                    <div className="tariff-speed">до 100Мбит/сек</div>
                    <div className="tariff-trafic">Объём включенного трафика не ограничен</div>
                    </div>
                <div className={`tariff ${selectedPrice === '450' ? 'selected' : ''}`}>
                <h2 className="tariff-title">Безлимитный450</h2>
                <div className="tariff-price">450</div>
                <div className="tariff-speed">до 100Мбит/сек</div>
                <div className="tariff-trafic">Объём включенного трафика не ограничен</div>
                </div>
                <div className={`tariff ${selectedPrice === '550р' ? 'selected' : ''}`}>
                    <h2 className="tariff-title">Премиум</h2>
                    <div className="tariff-price">550р</div>
                    <div className="tariff-speed">до 100Мбит/сек</div>
                    <div className="tariff-trafic">Объём включенного трафика не ограничен</div>
                </div>
                <div className={`tariff ${selectedPrice === '1000р' ? 'selected' : ''}`}>
                    <h2 className="tariff-title">Эксперт</h2>
                    <div className="tariff-price">1000р</div>
                    <div className="tariff-speed">до 100Мбит/сек</div>
                    <div className="tariff-trafic">Объём включенного трафика не ограничен</div>
                </div>
            </div>
        </div>
    );
}

export default Tariff;