

const CustomButton = (props)=>{

    const {style, onClick, textContent, type} = props;

    return(
        <div>
            <button onClick={onClick} className={style} type={type} > 
                {textContent}
            </button>
        </div>
    )
}

export default CustomButton;