import { Link } from 'expo-router'
import { FlatList, View } from 'react-native'
import { Text } from '@/components/nativewindui/text'
import { Icon } from '@roninoss/icons'
import { useColorScheme } from '@/lib/use-color-scheme'

const Contact = ({ id }: { id: number }) => {
  const { colors } = useColorScheme()
  return (
    <Link href={{ pathname: '/[contact]', params: { contact: id } }}>
      <View className="w-full flex flex-1 flex-row items-center bg-primary gap-10 px-8 rounded-xl">
        <Icon name="account-circle" color={colors.foreground} size={42} />
        <View className="flex justify-center">
          <Text>Enkel Murati</Text>
          <Text>
            <Icon name="phone" size={16} /> +355 69 966 0867
          </Text>
          <Text>
            <Icon name="map-marker-outline" size={16} ios={{ useMaterialIcon: true }} /> Durrës
          </Text>
        </View>
      </View>
    </Link>
  )
}

export default function Index() {
  return (
    <View className="pt-safe flex flex-1 flex-col justify-center bg-background">
      <FlatList className="px-4" data={new Array(10)} renderItem={({ index }) => <Contact id={index} />} />
    </View>
  )
}
