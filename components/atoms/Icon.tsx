import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons'
import { SvgProps } from "react-native-svg";
import React from 'react'

type FontAwesome5IconsName = 'user-circle' | 'edit'

type AntDesignIconName =
  | 'addfile'
  | 'user'
  | 'search1'
  | 'delete'
  | 'setting'
  | 'play'
  | 'pausecircle'

type SimpleLineIconsIconName = 'logout'
type FeatherIconName = 'more-horizontal'
type EntypoIconName = 'unread'

type IonIconsName =
  | 'reader-outline'
  | 'add'
  | 'bulb-outline'
  | 'close'
  | 'chevron-back'
  | 'chevron-forward'
  | 'share-outline'

type typeIconName =
  | FontAwesome5IconsName
  | AntDesignIconName
  | SimpleLineIconsIconName
  | IonIconsName
  | FeatherIconName
  | EntypoIconName

type IconProps = {
  name: typeIconName
  size?: number
} & SvgProps

export const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size = 24,
  ...otherProps
}) => {
  switch (name) {
    case 'share-outline':
      return <Ionicons name={name}  size={size}  {...otherProps} />
    case 'reader-outline':
      return <Ionicons name={name} size={size}  {...otherProps} />
    case 'logout':
      return (
        <SimpleLineIcons
          name={name}
          size={size}
          
          {...otherProps}
        />
      )
    case 'add':
      return <Ionicons name={name} size={size}  {...otherProps} />
    case 'addfile':
      return <AntDesign name={name} size={size}  {...otherProps} />
    case 'bulb-outline':
      return <Ionicons name={name} size={size}  {...otherProps} />
    case 'close':
      return <Ionicons name={name} size={size}  {...otherProps} />
    case 'chevron-back':
      return <Ionicons name={name} size={size}  {...otherProps} />
    case 'chevron-forward':
      return <Ionicons name={name} size={size}  {...otherProps} />
    case 'delete':
      return <AntDesign name={name} size={size}  {...otherProps} />
    case 'search1':
      return <AntDesign name={name} size={size}  {...otherProps} />
    case 'play':
      return <AntDesign name={name} size={size}  {...otherProps} />
    case 'pausecircle':
      return <AntDesign name={name} size={size}  {...otherProps} />
    case 'setting':
      return <AntDesign name={name} size={size}  {...otherProps} />
    case 'user':
      return <AntDesign name={name} size={size}  {...otherProps} />
    case 'more-horizontal':
      return <Feather name={name} size={size}  {...otherProps} />
    case 'unread':
      return <Entypo name={name} size={size}  {...otherProps} />
    case 'edit':
      return (
        <FontAwesome5 name={name} size={size}  {...otherProps} />
      )
    case 'user-circle':
      return (
        <FontAwesome5 name={name} size={size}  {...otherProps} />
      )
    default:
      throw new Error('Icon not supported')
  }
}
