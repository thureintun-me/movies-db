
import { View, Text, Image } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function MovieItem({ item }) {
    const voteCount = Math.floor(Math.random() * 100);
    return (
        <View style={{ marginHorizontal: 60, marginBottom: 50 }}>
            <View>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}jhdahj` }}
                    style={{ width: "100%", height: 500, borderRadius: 30, borderWidth: 1, borderColor: "lightgrey" }}>
                </Image>
                <View style={{ position: 'absolute', bottom: -35, right: 0, }}>
                    <AnimatedCircularProgress
                        size={75}
                        width={12}
                        fill={voteCount}
                        tintColor="lightgreen"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#3d5875"
                        children={() => {
                            return (
                                <Text style={{ color: "lightblue", fontSize: 18, fontWeight: "bold" }}>{voteCount}%</Text>
                            )
                        }}
                    >
                    </AnimatedCircularProgress>
                </View>
            </View>


            <View style={{ marginTop: 12, marginRight: 75, }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    // textAlign: "center"

                }}>{item.title}</Text>
                <Text style={{ marginTop: 8 }}>{item.release_date}</Text>
            </View>


        </View>
    )
}