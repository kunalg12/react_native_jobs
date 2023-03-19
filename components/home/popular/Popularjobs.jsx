import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'next/router'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularjobs.style';

const Popularjobs = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs </Text>
        <TouchableOpacity>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Popularjobs;