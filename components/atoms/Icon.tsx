import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons'
import React from 'react'

type FontAwesome5IconsName = 'user-circle'

type AntDesignIconName = 'addfile' | 'user' | 'search1' | 'delete' | 'setting'

type SimpleLineIconsIconName = 'logout'

type IonIconsName =
  | 'share-outline'
  | 'reader-outline'
  | 'add'
  | 'bulb-outline'
  | 'close'

type typeIconName =
  | FontAwesome5IconsName
  | AntDesignIconName
  | SimpleLineIconsIconName
  | IonIconsName

type IconProps = {
  name: typeIconName
  size?: number
  color?: string
}

export const Icon: React.FunctionComponent<IconProps> = ({
  color,
  name,
  size = 24,
  ...otherProps
}) => {
  switch (name) {
    case 'share-outline':
      return <Ionicons name={name} size={size} color={color} {...otherProps} />
    case 'reader-outline':
      return <Ionicons name={name} size={size} color={color} {...otherProps} />
    case 'logout':
      return (
        <SimpleLineIcons
          name={name}
          size={size}
          color={color}
          {...otherProps}
        />
      )
    case 'add':
      return <Ionicons name={name} size={size} color={color} {...otherProps} />
    case 'addfile':
      return <AntDesign name={name} size={size} color={color} {...otherProps} />
    case 'bulb-outline':
      return <Ionicons name={name} size={size} color={color} {...otherProps} />
    case 'close':
      return <Ionicons name={name} size={size} color={color} {...otherProps} />
    case 'delete':
      return <AntDesign name={name} size={size} color={color} {...otherProps} />
    case 'search1':
      return <AntDesign name={name} size={size} color={color} {...otherProps} />
    case 'setting':
      return <AntDesign name={name} size={size} color={color} {...otherProps} />
    case 'user':
      return <AntDesign name={name} size={size} color={color} {...otherProps} />
    case 'user-circle':
      return (
        <FontAwesome5
          name='user-circle'
          size={size}
          color={color}
          {...otherProps}
        />
      )
    default:
      throw new Error('Icon not supported')
  }
}
