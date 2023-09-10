import React, { useEffect } from "react";
import "./InfoTooltip.css";
import FailIcon from "../../images/popup-x.svg";
import SuccessIcon from "../../images/popup-confirm.svg";
import { usePopupClose } from "../../hooks/usePopupClose";

function InfoTooltip({ isOpen, onClose, errorMessage, successMessage }) {
    usePopupClose(isOpen, onClose);
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [isOpen, onClose]);

    return (
        <div className={`popup   ${isOpen ? "popup_opened " : ""}`}>
            <div className="popup__container ">
                <div className="popup__content">
                    {errorMessage ? (
                        <>
                            <img
                                className="popup__tooltip-img"
                                src={FailIcon}
                                alt="Всё плохо"
                            />
                            <p className="popup__tooltip-title">{errorMessage}</p>
                        </>
                    ) : (
                        <>
                            <img
                                className="popup__tooltip-img"
                                src={SuccessIcon}
                                alt="ВСё хорошо"
                            />
                            <p className="popup__tooltip-title ">{successMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default InfoTooltip;
