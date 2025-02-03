import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

const Contact = ({ id, className }: { id: number; className?: string }) => {
  return (
    <View className={`flex-row items-center bg-primary gap-10 px-8 rounded-xl ${className}`}>
      <Link href={{ pathname: '/[contact]', params: { contact: id } }} asChild>
        <Text className="border-4 border-background rounded-full text-background">
          <Feather name="user" size={42} />
        </Text>
      </Link>
      <View className="flex justify-center h-full gap-1">
        <Text className="text-background text-xl font-semibold">Enkel Murati</Text>
        <Text className="text-background text-lg">
          <Feather name="phone-call" size={16} className="text-background" />
          {'  '}
          +355 69 966 0867
        </Text>
        <Text className="text-background text-lg">
          <Feather name="map-pin" size={16} className="text-background" />
          {'  '}
          Durrës
        </Text>
      </View>
    </View>
  )
}

export default function Index() {
  return (
    <View className="pt-safe flex flex-1 flex-col justify-center bg-background">
      {/* <View className="flex items-start w-full px-10 py-3">
        <Text className="text-xl font-semibold">Title</Text>
      </View> */}
      <FlatList
        className="px-4"
        data={new Array(10)}
        renderItem={({ index }) => <Contact id={index} className="h-[175px] mb-10" />}
      />
    </View>
  )
}
