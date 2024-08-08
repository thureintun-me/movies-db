import { useEffect, useRef, useState } from "react"
import { FlatList, TextInput, View } from "react-native"
import { getRequest } from "../../api/axiosInstance"
import MovieItem from "../../components/MovieItem"
import { Search } from 'lucide-react-native';

const HomeScreen = () => {

    const [trendingMoviesList, setTrendingMoviesList] = useState([])
    const pageNum = useRef(1)




    const onSearch =async (val) =>{
        if(!val){
            getTrendingMoviesList()
            return
        }
        setTimeout(async ()=>{
            const response = await getRequest(`search/movie?query=${val}&include_adult=false&language=en-US&page=1`)
            console.log("search result",response.data)
            setTrendingMoviesList(response.data.results)
        },800)
      
    }

    const getTrendingMoviesList = async () => {
        const response = await getRequest(`trending/movie/day?language=en-US&page=${pageNum.current}`)
       setTrendingMoviesList([...trendingMoviesList,...response.data.results])
        pageNum.current = pageNum.current + 1
    }

  
    useEffect(() => {
        getTrendingMoviesList()
    }, [])


    return (
        <View>
            <View style={{ marginHorizontal: 30, marginBottom: 39,flexDirection:'row',borderWidth: 1, borderRadius: 30,alignItems:'center', }}>
              
              <Search color="lightgrey" size={30} style={{marginLeft:15}} />
                <TextInput
                    placeholder="Search"
                   // value={searchVal}
                    onChangeText={(val) => onSearch(val)}
                    style={{fontSize:15,flex:1,  height: 60, marginHorizontal:15   }}
                />
            </View>

            <FlatList
             data={trendingMoviesList} 
             renderItem={({ item, index }) => <MovieItem key={item.id} item={item}></MovieItem>}
             onEndReached={getTrendingMoviesList}
              />
        </View>
    )

}

export default HomeScreen