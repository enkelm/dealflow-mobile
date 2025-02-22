import { View, Text, TextInput } from 'react-native'
import { Controller, useForm } from 'react-hook-form'

export default function EditModal() {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    },
  })
  return (
    <View className="p-8 flex flex-1 flex-col">
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
    </View>
  )
}
