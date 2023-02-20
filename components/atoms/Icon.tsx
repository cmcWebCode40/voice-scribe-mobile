import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons'
import React from 'react'

type typeIconName =
  | 'addfile'
  | 'user'
  | 'search1'
  | 'add'
  | 'share-outline'
  | 'bulb-outline'
  | 'logout'
  | 'delete'
  | 'setting'
  | 'reader-outline'
  | 'user-circle'

type IconColor = 'white' | 'black' | '#ccc'

type IconProps = {
  name: typeIconName
  size?: number
  color?: IconColor
}

export const Icon: React.FunctionComponent<IconProps> = ({
  color,
  name,
  size = 24,
}) => {
  switch (name) {
    case 'share-outline':
      return <Ionicons name={name} size={size} color={color} />
    case 'reader-outline':
      return <Ionicons name={name} size={size} color={color} />
    case 'logout':
      return <SimpleLineIcons name={name} size={size} color={color} />
    case 'add':
      return <Ionicons name={name} size={size} color={color} />
    case 'addfile':
      return <AntDesign name={name} size={size} color={color} />
    case 'bulb-outline':
      return <Ionicons name={name} size={size} color={color} />
    case 'delete':
      return <AntDesign name={name} size={size} color={color} />
    case 'search1':
      return <AntDesign name={name} size={size} color={color} />
    case 'setting':
      return <AntDesign name={name} size={size} color={color} />
    case 'user':
      return <AntDesign name={name} size={size} color={color} />
    case 'user-circle':
      return <FontAwesome5 name='user-circle' size={size} color='black' />
    default:
      throw new Error('Icon not supported')
  }
}
