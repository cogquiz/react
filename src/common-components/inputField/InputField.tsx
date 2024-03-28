import React, { ChangeEvent, FC } from 'react'
import { Box, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface InputProps {
    value?: string;
    type?: "text" | "number" | "password" | "date";
    label: string;
    placeHolder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean | undefined;
    inputProps?: any;
    multiLine?: any;
    rows?: any;
    labelStyle?: any;
    name?: string;
    helperText?: any;
    disabled?: boolean;
    InputProps?: object;
    inputRef?: React.Ref<any>;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void; // Make onBlur optional
    inputPropsStyle?: React.CSSProperties;
}

const InputFieldComponent: FC<InputProps> = ({
    value,
    label = "Set label",
    placeHolder = "Set Placeholder",
    onChange = () => {
        console.warn("you have not assigned any function");
    },
    multiLine,
    type,
    rows,
    name,
    error,
    inputProps,
    onBlur,
    inputPropsStyle,
    ...props
}) => {
    return (
        <Box display={"flex"} flexDirection={"column"}>
            {label ? (
                <label className='input-label'>{label}</label>
            ) : null}
            <TextField
                className='input-field-component'
                multiline={multiLine}
                rows={rows}
                variant='outlined'
                placeholder={placeHolder}
                margin='none'
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
                name={name}
                error={error}
                fullWidth
                onBlur={onBlur}
                {...props}
            />

        </Box>
    )
}

export default InputFieldComponent