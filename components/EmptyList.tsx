import { View, Text } from 'react-native'
import React from 'react'

export default function EmptyList({message}: { message: string}) {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
      <Text className="font-bold text-gray-400">{message||'Data not found'}</Text>
    </View>
  )
}