import { Feather } from '@expo/vector-icons'
import { ComponentProps } from 'react'
import { View, Text } from 'react-native'

type DetailSectionItem = {
  icon?: ComponentProps<typeof Feather>['name']
  name: string
  value: string
}

type DetailSectionProps = {
  name: string
  items: DetailSectionItem[]
}

// ⁠⁠Deal

const DetailSection = ({ name, items }: DetailSectionProps) => {
  return (
    <View className="flex flex-col bg-primary rounded-lg p-4">
      <Text className="text-background text-xl font-semibold">{name}</Text>
      <View className="flex flex-col ">
        {items.map(({ icon, name, value }, i, { length }) => (
          <View
            key={name + value}
            className={`flex flex-row py-1 justify-between ${i + 1 < length ? 'border-b border-background' : ''}`}
          >
            <Text className="text-background text-lg">
              {icon && <Feather name={icon} size={16} />}
              {icon && ' '}
              {name}
            </Text>
            <Text className="text-background text-lg">{value}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default function Contact() {
  return (
    <View className="pt-safe px-4 flex flex-1 bg-background gap-4">
      <View className="flex flex-row justify-between items-center rounded-lg bg-primary p-4">
        <View className="flex flex-col gap-2">
          <Text className="text-background text-xl font-semibold">Enkel Murati</Text>
          <Text className="text-background text-lg">
            Mobile:
            <Text className="text-background text-lg"> +355 69660867</Text>
          </Text>
        </View>

        <Text className="border-4 border-background rounded-full text-background">
          <Feather name="user" size={42} />
        </Text>
      </View>
      <View className="flex flex-col bg-primary rounded-lg p-4">
        <Text className="text-background text-xl font-semibold pb-1">Detajet</Text>
        <View className="flex flex-col">
          <Text className="text-background text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi eveniet tempore reiciendis
            exercitationem ea officia illum hic amet ipsam eum, maiores officiis, sed, saepe repudiandae molestiae
            corrupti ex cumque?
          </Text>
        </View>
      </View>
      <DetailSection
        name="Financat"
        items={[
          { icon: 'credit-card', name: 'Buxheti', value: '€ 140 000' },
          { name: 'Financimi', value: 'Liquid' },
        ]}
      />
      <DetailSection
        name="Preferencat"
        items={[
          { icon: 'map', name: 'Zona', value: 'Currila' },
          { icon: 'home', name: 'Siperfaqja', value: '120 m²' },
          { icon: 'layout', name: 'Nr. i Dhomave', value: '2 + 1' },
        ]}
      />
    </View>
  )
}
