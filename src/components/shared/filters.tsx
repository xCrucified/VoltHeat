import React from "react";
import { FilterCheckbox, Title } from "./lib";
import { Input } from "../ui/lib";
import { RangeSlider } from "./range-slider";
import { CheckBoxFilterGroup } from "./checkbox-filter-group";

interface Props{
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className} hidden>
            <Title text="Filtration" size="sm" className="mb-5 font-bold" />
            {/*Checkbox */}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Man" value="1"/>
                <FilterCheckbox text="Woman" value="2"/>
            </div>
            {/*Price */}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7s">
                <p className="font-bold mb-3">price min and max: </p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={7999} />
                    <Input type="number" placeholder="7999" min={100} max={7999} />
                </div>

                <RangeSlider min={0} max={7999} step={1} value={[0, 7999]} />
            </div>
            
            <b>Items</b>

            <CheckBoxFilterGroup
            className="mt-5"
            limit={3}
            defaultItems={[
                {
                    text: 'ТЕНовий котел',
                    value: '1'
                },
                {
                    text: 'Індукційний котел',
                    value: '2'
                },
                {
                    text: 'Електродний котел',
                    value: '3'
                },
            ]}
            items={[
                {
                    text: 'Cap',
                    value: '1'
                },
                {
                    text: 'Cardigan',
                    value: '2'
                },
                {
                    text: 'Slippers',
                    value: '3'
                },
                {
                    text: 'Vest',
                    value: '4'
                },
                {
                    text: 'Cap',
                    value: '1'
                },
                {
                    text: 'Cardigan',
                    value: '2'
                },
                {
                    text: 'Slippers',
                    value: '3'
                },
                {
                    text: 'Vest',
                    value: '4'
                },
                {
                    text: 'Cap',
                    value: '1'
                },
                {
                    text: 'Cardigan',
                    value: '2'
                },
                {
                    text: 'Slippers',
                    value: '3'
                },
                {
                    text: 'Vest',
                    value: '4'
                },
            ]}
            />
        </div>
    )
}