import React from 'react';

import './SpecialMenu.css';
import {SubHeading, MenuItem} from "../../components"
import {images, data} from "../../constants"

const SpecialMenu = () => (
    <div className={"app__specialMenu flex__center section__padding"} id={"menu"}>
        <div className={"app__specialMenu-title"}>
            <SubHeading title={"Menu that fits you palatte"}/>
            <h1 className={"headtext__cormorant"}>Today’s Special</h1>
        </div>
        <div className={"app__specialMenu-menu"}>
            <div className={"app__specialMenu_wine flex__center"}>
                <p className={"app__specialMenu-menu_heading"}>Wine & Beer</p>
                <div className={"app_specialMenu-menu_items"}>
                    {data.wines.map((wine , index) =>(
                        <p>{wine.title}</p>
                        )
                    )}
                </div>
            </div>
            <div className={"app_specialMenu-menu_img"}>
                <img src={images.menu} alt={"menu img"}/>
            </div>
            <div className={"app__specialMenu_cocktails flex__center"}>
                <p className={"app__specialMenu-menu_heading"}>Wine & Beer</p>
                <div className={"app_specialMenu-menu_items"}>
                    {data.cocktails.map((cocktails , index) =>(
                            <p>{cocktails.title}</p>
                        )
                    )}
                </div>
            </div>
        </div>
        <div style={{marginTop: '15px'}}>
            <button type={"button"} className={"custom__button"}>
                View More
            </button>
        </div>
    </div>
);

export default SpecialMenu;
