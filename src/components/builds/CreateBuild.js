import React, {useState} from 'react';
import HeadGear from '../gear/head/HeadGear';
import ChestGear from '../gear/chest/ChestGear'

import MainHand from '../weapons/MainHand';
import OffHand from '../weapons/OffHand';

export default function CreateBuild() {

    return (
        <div className="select-menus">
            <div className="head-dropdown">
                <HeadGear/>
            </div>

            <div className="chest-dropdown">
                <ChestGear/>
            </div>

            <div className="mainHand-dropdown">
                <MainHand />
            </div>

            <div className="offHand-dropdown">
                <OffHand />
            </div>
        </div>

    )

}