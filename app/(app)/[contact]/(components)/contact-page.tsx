import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { ComponentProps, Fragment, useState } from 'react'
import { View, Text, Pressable, ScrollView } from 'react-native'

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

const ContactSection = ({ name, items }: DetailSectionProps) => {
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

const ContactDetailsSection = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <View className="flex flex-col bg-primary rounded-lg p-4">
      <Text className="text-background text-xl font-semibold pb-1">Detajet</Text>
      <Pressable onPress={() => setExpanded((e) => !e)}>
        <View className="flex flex-col">
          <Text className={`text-background text-md  ${!expanded ? 'max-h-24 truncate' : ''}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat, et a tempore esse veniam enim
            culpa nesciunt architecto possimus ratione est odio itaque hic neque sed. Architecto velit fugit dolores
            blanditiis officia tempore soluta eligendi! Saepe quo ut pariatur ipsa earum maiores perspiciatis ipsum quas
            aut reprehenderit mollitia perferendis, ullam rerum corporis unde, sint similique? Recusandae iste vitae,
            debitis quae totam accusamus vero nisi tempora at sequi corrupti, atque perferendis eaque dolor quas. Autem
            mollitia dolorum voluptas ea provident at inventore optio error animi quas dolor reprehenderit recusandae
            aliquid doloremque nisi soluta, ad nemo impedit fugit deleniti voluptate sapiente.
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default function ContactPage() {
  return (
    <Fragment>
      <ScrollView contentContainerClassName="gap-4">
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
        <ContactDetailsSection />
        <ContactSection
          name="Financat"
          items={[
            { icon: 'credit-card', name: 'Buxheti', value: '€ 140 000' },
            { name: 'Financimi', value: 'Liquid' },
          ]}
        />
        <ContactSection
          name="Preferencat"
          items={[
            { icon: 'map', name: 'Zona', value: 'Currila' },
            { icon: 'home', name: 'Siperfaqja', value: '120 m²' },
            { icon: 'layout', name: 'Nr. i Dhomave', value: '2 + 1' },
          ]}
        />
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 pb-safe z-10 bg-background">
        <View className="flex flex-row justify-around items-center py-4">
          <Link href={{ pathname: '/[contact]/edit', params: { contact: 1 } }} asChild>
            <Feather name="edit" size={24} />
          </Link>
          <Pressable className="flex flex-col justify-center items-center">
            <Feather name="trash" size={24} />
          </Pressable>
        </View>
      </View>
    </Fragment>
  )
}
