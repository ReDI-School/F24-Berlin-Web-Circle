import Styles from './LanguagePopUp.module.css'
import ModalPopUp from '../ModalPopUp/ModalPopUp'
import { useState } from 'react'

const LanguagePopUp = ({languages = 'English', currency = 'Euro', onCloseClick, isVisiable}) => {
    const[isLanguageSelected, setIsLanguageSelected] = useState(true);
    const popUpDimension = {width:'60%',left:'20%'};
    const handelLanguageClick = () => {
        setIsLanguageSelected(true);
    }
    const handelCurrencyClick = () => {
        setIsLanguageSelected(false);
    }

    return(
        <ModalPopUp onCloseClick={onCloseClick} isVisiable={isVisiable} popUpDimension={popUpDimension}>
            <div className={Styles.container}>
                <div className={Styles.tabContainer}>
                    <div className={isLanguageSelected ? Styles.languageButton : Styles.languageButtonDisabled} onClick={handelLanguageClick}>
                        <p>Language and region</p>
                    </div>
                    <div className={isLanguageSelected ? Styles.currencyButtonDisabled : Styles.currencyButton} onClick={handelCurrencyClick}>
                        <p>Currency</p>
                    </div>
                </div>
                <div className={Styles.selectionIndicatorContainer}>
                    <div className={isLanguageSelected ? Styles.languageSelectionIndicatorSelected : Styles.languageSelectionIndicatorNotSelected}></div>
                    <div className={isLanguageSelected ? Styles.currencySelectionIndicatorNotSelected : Styles.currencySelectionIndicatorSelected}></div>
                </div>
            </div>
            <div>
                {isLanguageSelected ? languages : currency}
            </div>
        </ModalPopUp>
    )
}
export default LanguagePopUp;