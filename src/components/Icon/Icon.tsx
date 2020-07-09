import React, { FC, } from "react";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps, } from '@fortawesome/react-fontawesome'

export type themeProps = 'primary' | 'success' | 'info' | 'warning' | 'danger'

interface IconProps extends FontAwesomeIconProps{
    theme?: themeProps
}

const Icon: FC<IconProps> = (props) => {
    const { className, style, theme, ...restProps} = props
    const clazz = classNames('lwh-icon', className, {
        [`icon-${theme}`]: theme
    })

    return (
        <FontAwesomeIcon className={clazz} style={style} {...restProps}/>
    )
}

export default Icon;
