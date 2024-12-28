import { Text, type TextProps, StyleSheet } from 'react-native'

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'subtitle' | 'link'
}

export function ThemedText({ type = 'default', className, ...rest }: ThemedTextProps) {
  return (
    <Text
      className={
        (() => {
          switch (type) {
            case 'default':
              return 'text-[16px] leading-[24px]'
            case 'title':
              return 'text-3xl font-semibold'
            case 'subtitle':
              return 'text-2xl'
            case 'link':
              return 'text-[16px] leading-[30px] color-blue-500'
            default:
              return ''
          }
        }) +
        (className ? ` ${className}` : '') +
        ' color-black dark:color-white'
      }
      {...rest}
    />
  )
}
