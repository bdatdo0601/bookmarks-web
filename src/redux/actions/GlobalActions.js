const ON_SIZE_CHANGE = "ON_NAVBAR_CHANGE";
const CHECK_MOBILE_FULFILL = "CHECK_MOBILE_FULFILL";

export const GlobalActionTypes = {
    ON_SIZE_CHANGE,
    CHECK_MOBILE_FULFILL,
};

export const GlobalActions = {
    changeSize: () => dispatch => {
        const event = document.createEvent("HTMLEvents");
        event.initEvent("resize", true, false);
        window.dispatchEvent(event);
        dispatch({
            type: ON_SIZE_CHANGE,
            action: window.matchMedia("only screen and (max-width: 760px)").matches,
        });
    },
    checkMobileSize: () => ({
        type: CHECK_MOBILE_FULFILL,
        payload: window.matchMedia("only screen and (max-width: 760px)").matches,
    }),
};
