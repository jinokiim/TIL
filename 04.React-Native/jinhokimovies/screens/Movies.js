import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState, } from "react";
// Dimensions : 화면 크기를 알기위해 import
import { Text, ActivityIndicator, Dimensions, FlatList, RefreshControl, ScrollView, StyleSheet, useColorScheme, View } from "react-native";
import Swiper from "react-native-web-swiper";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import { makeImgPath } from "../utils";
import Slide from "../components/Slide";
import Poster from "../components/Poster";
import HMedia from "../components/HMedia";
import VMedia from "../components/VMedia";
import { moviesApi } from "../api";



const Container = styled.ScrollView``;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: gray;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom:5px;
`;
const ListTitle = styled.Text`
  color: gray;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
`;
const TrendingScroll = styled.FlatList`
  margin-top: 20px;
`;

const ListContainer = styled.View`
  margin-bottom: 40px;
`;
const ComingSoonTitle = styled.Text`
  color: gray;
  width: 80%;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
`;

const VSeparator = styled.View`
  width:20px;
`;
const HSeparator = styled.View`
  height:20px;
`;




// 화면 높이 측정 height를 SCREEN_HEIGHT로 사용
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Movies = () => {
  
  const [refreshing, setRefreshing] = useState(false);
  const { isLoading: nowPlayingLoading, data: nowPlayingData } = useQuery(
    "nowPlaying",
    moviesApi.nowPlaying
  );
  const { isLoading: upcomingLoading, data: upcomingData } = useQuery(
    "upcoming",
    moviesApi.upcoming
  );
  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    "trending",
    moviesApi.trending
  );
  

  // 새로고침에 관한 함수
  const onRefresh = async () => {};
  const renderVMedia = ({ item }) => (
    <VMedia
      posterPath={item.poster_path}
      originalTitle={item.original_title}
      voteAverage={item.vote_average}
    />
  );
  const renderHMedia = ({ item }) => (
    <HMedia
      posterPath={item.poster_path}
      originalTitle={item.original_title}
      overview={item.overview}
      releaseDate={item.release_date}
    />
  );
  const movieKeyExtractor = (item) => item.id + "";
  const loading = nowPlayingLoading || upcomingLoading || trendingLoading;
  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListHeaderComponent={
        <>
          <Swiper
            horizontal
            loop
            autoplay
            autoplayTimeout={3.5}
            showsButtons={false}
            showsPagination={false}
            containerStyle={{
              marginBottom: 40,
              width: "100%",
              height: SCREEN_HEIGHT / 4,
            }}
          >
            {nowPlayingData.results.map((movie) => (
              <Slide
                key={movie.id}
                backdropPath={movie.backdrop_path}
                posterPath={movie.poster_path}
                originalTitle={movie.original_title}
                voteAverage={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </Swiper>
          <ListContainer>
            <ListTitle>Trending Movies</ListTitle>
            <TrendingScroll
              horizontal
              data={trendingData.results}
              keyExtractor={movieKeyExtractor}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 30 }}
              ItemSeparatorComponent={VSeparator}
              renderItem={renderVMedia}
            />
          </ListContainer>
          <ComingSoonTitle>Coming soon</ComingSoonTitle>
        </>
      }
      data={upcomingData.results}
      keyExtractor={movieKeyExtractor}
      ItemSeparatorComponent={HSeparator}
      renderItem={renderHMedia}
    />
  );
};

export default Movies;