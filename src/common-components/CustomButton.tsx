import LoadingButton from '@mui/lab/LoadingButton';

const CustomButton = (props: any) => {
    const { className, onBtnClick = () => { }, btnText, endIcon, startIcon, disabled, loadingPosition } = props

    return (
        <LoadingButton className={className} onClick={(e) => onBtnClick(e)} variant="contained" endIcon={endIcon} startIcon={startIcon}
            loadingPosition={loadingPosition}
            loading={disabled}>
            {btnText}
        </LoadingButton>
    )
}

export default CustomButton