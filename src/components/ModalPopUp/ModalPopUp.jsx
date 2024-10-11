import { useEffect } from 'react'
import Styles from './ModalPopUp.module.css'
import {CloseIcon} from '../../icons'

const ModalPopUp = ({children , onCloseClick, isVisiable, popUpDimension}) => {

    useEffect(() => {
        isVisiable && (document.body.style.overflow = 'hidden');
        !isVisiable && (document.body.style.overflow = 'unset');
     }, [isVisiable]);

    return(
        <>
            { isVisiable && 
                <>
                    <div className={Styles.container} style={{width: popUpDimension.width, left:popUpDimension.left}}>
                        <div className={Styles.colseButtonContainer}>
                            <div className={Styles.colseButton} onClick={onCloseClick}><CloseIcon/></div>
                        </div>
                        <>{children}</>    
                    </div>
                    <div className={Styles.black_overlay} onClick={onCloseClick}></div>
                </>
            }
        </>    
    )
}
export default ModalPopUp;