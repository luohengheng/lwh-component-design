import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, MouseEvent, MouseEventHandler } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon'
import { IconProp, } from '@fortawesome/fontawesome-svg-core'

type shapeType = 'circle' | 'round'
type sizeType = 'large' | 'small'
type btnState = 'primary' | 'dashed' | 'dotted' | 'link'

interface BaseButtonProps {
    disabled?: boolean,
    href?: string,
    shape?: shapeType,
    size?: sizeType,
    icon?: string,
    target?: string,
    btnType?: btnState,
    className?: string,
    children?: React.ReactNode
}

// ButtonHTMLAttributes 获取button类型的属性
type NativeButtonProps =  BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
// AnchorHTMLAttributes 获取a链接的属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// Partial 将二者属性合并，每个属性变成可选择
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const ButtonComponent: FC<ButtonProps> = (props) => {

    const { disabled, href, shape, size, target, btnType, children, className, icon, ...restProps} = props
    const clazz = classNames('lwh-btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        [`btn-${shape}`]: shape === 'circle',
        ['btn-icon-circle']: btnType !== 'link' && icon && shape === 'circle',
        disabled: disabled
    })
    const iconClazz = classNames({
        ['btn-icon']: btnType !== 'link' && icon,

    })

    if (btnType === 'link') {
        return (
            <a href={href ? href : '#'} target={target} className={clazz} {...restProps}>{children}</a>
        )
    }else {
        return (
            <button disabled={disabled} className={clazz} {...restProps}>
                {children}
                {
                    icon && <Icon className={iconClazz} icon={icon as IconProp}/>
                }
            </button>
        )
    }
}

ButtonComponent.defaultProps = {
    disabled: false,
    btnType: 'primary'
}

export default ButtonComponent;
