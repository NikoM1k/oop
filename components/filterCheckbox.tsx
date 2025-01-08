"use client";

import React, { useState } from 'react';

const FilterCheckbox: React.FC = () => {
    const [active, setActive] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActive(event.target.checked);
    };

    return (
            <label className="flex items-center text-[14px] text-lightGrey gap-[12px]">
                <input
                    className="w-[16px] h-[16px] border-white"
                    type="checkbox"
                    checked={active}
                    onChange={handleCheckboxChange}
                />
                только мероприятия Донецкого сообщества
            </label>
    );
}

export default FilterCheckbox;