import React from 'react'
// import Accordian from './Accordian';

const MenuCard = ({ menuData }) => {
    return (
        <>
        <section className="main-card--cointainer">
            {menuData.map((curElem, index) => {
                const{id, image, name, category, description}=curElem;
                return (
                    <>
                        <div>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle" style={{ color: "red" }}>{name}</span>
                                        <h2 className="card-title">{category}</h2>
                                    <img src={image} alt="images" className='card-media'></img><br/>
                                        <span className="card-description subtle">
                                         {description}
                                        </span>
                                        <div className="card-read">Read</div>
                                        {/* <Accordian/> */}
                                    </div>
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </div>
                    </>)
            })}

        </section>
        </>
    )
}

export default MenuCard
