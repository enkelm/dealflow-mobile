import { Feather } from '@expo/vector-icons'
import { Icon, MaterialIconName } from '@roninoss/icons'
import { Link } from 'expo-router'
import { Fragment, useState } from 'react'
import { View, Pressable, ScrollView } from 'react-native'
import { Text } from '@/components/nativewindui/text'

type DetailSectionItem = {
  icon?: MaterialIconName
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
      <Text variant="title3" className="font-semibold">
        {name}
      </Text>
      <View className="flex flex-col">
        {items.map(({ icon, name, value }, i, { length }) => (
          <View
            key={name + value}
            className={`flex flex-row py-1 justify-between ${i + 1 < length ? 'border-b border-foreground' : ''}`}
          >
            <Text variant="title3">
              {icon && <Icon name={icon} size={16} />}
              {icon && ' '}
              {name}
            </Text>
            <Text variant="title3">{value}</Text>
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
      <Text variant="heading">Detajet</Text>
      <Pressable onPress={() => setExpanded((e) => !e)}>
        <Text variant="callout" numberOfLines={!expanded ? 3 : undefined} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, repellat, et a tempore esse veniam enim culpa
          nesciunt architecto possimus ratione est odio itaque hic neque sed. Architecto velit fugit dolores blanditiis
          officia tempore soluta eligendi! Saepe quo ut pariatur ipsa earum maiores perspiciatis ipsum quas aut
          reprehenderit mollitia perferendis, ullam rerum corporis unde, sint similique? Recusandae iste vitae, debitis
          quae totam accusamus vero nisi tempora at sequi corrupti, atque perferendis eaque dolor quas. Autem mollitia
          dolorum voluptas ea provident at inventore optio error animi quas dolor reprehenderit recusandae aliquid
          doloremque nisi soluta, ad nemo impedit fugit deleniti voluptate sapiente.
        </Text>
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
            <Text variant="heading">Enkel Murati</Text>
            <Text variant="subhead">Mobile: +355 69660867</Text>
          </View>
          <Icon name="account-circle-outline" size={42} />
        </View>

        <ContactDetailsSection />
        <ContactSection
          name="Financat"
          items={[
            { icon: 'credit-card-outline', name: 'Buxheti', value: '€ 140 000' },
            { name: 'Financimi', value: 'Liquid' },
          ]}
        />
        <ContactSection
          name="Preferencat"
          items={[
            { icon: 'map', name: 'Zona', value: 'Currila' },
            { icon: 'home', name: 'Siperfaqja', value: '120 m²' },
            { icon: 'wrench', name: 'Nr. i Dhomave', value: '2 + 1' },
          ]}
        />
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 pb-safe z-10 bg-background">
        <View className="flex flex-row justify-around items-center py-4">
          <Link href={{ pathname: '/[contact]/edit', params: { contact: 1 } }}>
            <Icon name="pencil-box-outline" size={28} />
          </Link>
          <Pressable className="flex flex-col justify-center items-center">
            <Icon name="trash-can-outline" size={28} />
          </Pressable>
        </View>
      </View>
    </Fragment>
  )
}
