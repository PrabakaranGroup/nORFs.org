import {
    MENU_SET_CLASSNAMES,
    MENU_CONTAINER_ADD_CLASSNAME,
    MENU_CLICK_MOBILE_MENU,
    MENU_CHANGE_DEFAULT_CLASSES
} from 'Constants/actionTypes';

export const changeDefaultClassnames = (strCurrentClasses) => {
    return (
        {
            type: MENU_CHANGE_DEFAULT_CLASSES,
            payload: strCurrentClasses
        }
    )
}

export const addContainerClassname = (classname, strCurrentClasses) => {
    const newClasses = !strCurrentClasses.indexOf(classname) > -1 ? strCurrentClasses + ' ' + classname : strCurrentClasses;
    return (
        {
            type: MENU_CONTAINER_ADD_CLASSNAME,
            payload: newClasses
        }
    )
}

export const clickOnMobileMenu = (strCurrentClasses) => {
    const currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(x => x != '' && x != 'sub-show-temporary') : '';
    let nextClasses = '';
    if (currentClasses.includes('main-show-temporary')) {
        nextClasses = (currentClasses.filter(x => x != 'main-show-temporary')).join(' ');
    } else {
        nextClasses = currentClasses.join(' ') + ' main-show-temporary';
    }
    return (
        {
            type: MENU_CLICK_MOBILE_MENU,
            payload: { containerClassnames: nextClasses, menuClickCount: 0 }
        }
    )
}

export const setContainerClassnames = (clickIndex, strCurrentClasses) => {
    const currentClasses = strCurrentClasses ? strCurrentClasses.split(' ').filter(x => x != '') : '';
    let nextClasses = '';                                           
    
    nextClasses = 'menu-sub-hidden';
    
    
    if (currentClasses.includes('menu-mobile')) {
        nextClasses += ' menu-mobile';
    }
    return (
        {
            type: MENU_SET_CLASSNAMES,
            payload: { containerClassnames: nextClasses, menuClickCount: clickIndex }
        }
    )
}