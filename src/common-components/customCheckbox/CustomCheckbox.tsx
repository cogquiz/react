import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

const CustomCheckbox = (props: any) => {
    const { selectedValues, onChange, selectedId, name} = props

    return (
        <FormGroup className="custom-checkbox">
            {selectedValues.map((value: any, index: number) => (
                <FormControlLabel
                    key={index}
                    name={name}
                    control={<Checkbox checked={value.selected} onChange={() => onChange(name, index)} />}
                    label={value.label}
                />
            ))}
        </FormGroup>
    )
}

export default CustomCheckbox