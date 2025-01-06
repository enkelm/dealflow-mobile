import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

const Contact = ({ id, className }: { id: number; className?: string }) => {
  return (
    <Link href=".." asChild>
      <View className={`flex-row items-center bg-primary gap-10 px-8 rounded-xl ${className}`}>
        <Text className="border-4 border-background rounded-full text-background">
          <Feather name="user" size={42} />
        </Text>
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
    </Link>
  )
}

export default function Index() {
  return (
    <View className="p-safe flex flex-1 flex-col justify-center items-center bg-background">
      <FlatList data={new Array(10)} renderItem={({ index }) => <Contact id={index} className="h-[175px] mb-10" />} />
    </View>
  )
}
