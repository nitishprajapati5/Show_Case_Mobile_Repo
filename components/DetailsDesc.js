import { View, Text } from 'react-native'
import {useState} from 'react'

import { EthPrice,NFTTitle } from './SubInfo'
import {SHADOWS,SIZES,COLORS,assets, FONTS} from '../constants'
import React from 'react'

const DetailsDesc = ({data}) => {
  const [text,setText] = useState(data.description.slice(0,100));
  const [readMore,setReadMore] = useState(false);
  return (
    <React.Fragment>
    <View style={{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }}>
      <NFTTitle 
      title={data.name}
      subTitle={data.creator}
      titleSize={SIZES.extraLarge}
      subTitleSize={SIZES.extraLarge}
      
      />

      <EthPrice price={data.price}/>

      

    </View>
    <View style={{marginVertical:SIZES.large * 1.5}}>
        <Text style={{
          fontFamily:FONTS.semiBold,
          fontSize:SIZES.medium,
          color:COLORS.primary
        }}>Description</Text>

      </View>

      <View style={{marginTop:SIZES.base}}>
        <Text style={{
          fontFamily:FONTS.regular,
          fontSize:SIZES.small,
          color:COLORS.secondary,
          lineHeight:SIZES.large
          
        }}>{text}
        {!readMore && '...'}
        <Text style={{
          fontFamily:FONTS.small,
          fontSize:SIZES.semiBold,
          color:COLORS.primary,
          
        }}
        onPress={() => {
          if(!readMore){
            setText(data.description);
            setReadMore(true);
          }else{
            setText(data.description.slice(0,100));
            setReadMore(false);
          }
        }}
        >

          {readMore ? 'Show Less' : "Read More"}</Text></Text>
        
      </View>
    </React.Fragment>
  )
}

export default DetailsDesc