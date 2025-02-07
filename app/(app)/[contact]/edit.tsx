import { View, TextInput, Platform } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '@/components/nativewindui/button'
import { Text } from '@/components/nativewindui/text'
import { Icon } from '@roninoss/icons'
import { Picker, PickerItem } from '@/components/nativewindui/Picker'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { Fragment, useRef } from 'react'
import { atom, useAtom } from 'jotai'
import { useColorScheme } from '@/lib/use-color-scheme'

enum FundType {
  Cash,
  Loan,
}

type ContactForm = {
  firstName: string
  lastName: string
  phoneNumber: string
  budget: number
  fundType: FundType
  location: string
  surface: string
  rooms: string
}

const isSheetOpen = atom(false)

const IOSFundDropDown = ({ value, onChange }: { value: FundType; onChange: (v: FundType) => void }) => {
  const { colors } = useColorScheme()

  const [open, setOpen] = useAtom(isSheetOpen)
  const ref = useRef<BottomSheet>(null)

  return (
    <Fragment>
      <Button
        onPress={() => {
          if (!ref.current) return
          if (open) {
            ref.current.close()
            setOpen(false)
            return
          }
          ref.current.expand()
          setOpen(true)
        }}
      >
        <Text>Select Fund Type</Text>
      </Button>
      <BottomSheet ref={ref} index={-1} style={{ backgroundColor: colors.background }}>
        <BottomSheetView className="flex flex-1 justify-between pb-safe">
          <Picker className="border-none" selectedValue={value} onValueChange={onChange}>
            <PickerItem label="Cash" value={FundType.Cash} />
            <PickerItem label="Loan" value={FundType.Loan} />
          </Picker>
          <Button
            className="mx-5"
            onPress={() => {
              if (!ref.current) return
              ref.current.close()
              setOpen(false)
            }}
          >
            <Text>Select</Text>
          </Button>
        </BottomSheetView>
      </BottomSheet>
    </Fragment>
  )
}

const FundDropDown = ({ value, onChange }: { value: FundType; onChange: (v: FundType) => void }) => {
  return Platform.select({
    ios: <IOSFundDropDown value={value} onChange={onChange} />,
    android: (
      <Picker selectedValue={value} onValueChange={onChange}>
        <PickerItem label="Cash" value={FundType.Cash} />
        <PickerItem label="Loan" value={FundType.Loan} />
      </Picker>
    ),
  })
}

export default function EditModal() {
  const { control, handleSubmit } = useForm<ContactForm>()
  const [open] = useAtom(isSheetOpen)

  return (
    <View className="pt-8 flex flex-1 flex-col bg-background">
      <View className="flex flex-1 px-8 gap-2 bg-background">
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput placeholder="First name" onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="firstName"
        />

        <Controller
          control={control}
          rules={{ maxLength: 100 }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput placeholder="Last name" onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="lastName"
        />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="phone-pad"
              dataDetectorTypes="phoneNumber"
              placeholder="Phone number"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
          name="phoneNumber"
        />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="number-pad"
              placeholder="Buxheti"
              onChangeText={(t) => onChange(t !== '' ? parseFloat(t) : undefined)}
              onBlur={onBlur}
              value={value?.toString()}
            />
          )}
          name="budget"
        />

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => <FundDropDown value={value} onChange={onChange} />}
          name="fundType"
        />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput placeholder="Zona" onChangeText={onChange} onBlur={onBlur} value={value} />
          )}
          name="location"
        />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="number-pad"
              placeholder="Nr. i dhomave"
              onChangeText={(t) => onChange(t !== '' ? parseFloat(t) : undefined)}
              onBlur={onBlur}
              value={value?.toString()}
            />
          )}
          name="surface"
        />
      </View>
      <Button className={open ? 'invisible' : 'mx-5 mb-safe'} onPress={handleSubmit((d) => console.debug(d))}>
        <Text>Click me</Text>
        <Icon name="arrow-right" color="white" size={20} />
      </Button>
    </View>
  )
}
