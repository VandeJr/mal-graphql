/* eslint-disable @typescript-eslint/ban-types */
import { Arg, Info, Query, Resolver } from 'type-graphql'
import { parseResolveInfo } from 'graphql-parse-resolve-info'
import { GraphQLResolveInfo } from 'graphql'

import { getAnimeDetail, getAnimeList, getAnimeRanking, getSeasonalAnime } from '../data/Anime'
import { Anime } from '../models/Anime'

@Resolver()
export default class AnimeResolver {
  @Query(returns => [Anime])
  async getAnimeList (@Arg('search') search: string,
    @Arg('limit', { defaultValue: 10 }) limit: number,
    @Arg('offset', { defaultValue: 0 }) offset: number,
    @Info() _info: GraphQLResolveInfo): Promise<Anime[]> {
    const info = parseResolveInfo(_info)

    const keys: string[] = Object.keys(info?.fieldsByTypeName.Anime as Object)

    return await getAnimeList(search, keys, limit, offset)
  }

  @Query(returns => Anime)
  async getAnimeDetail (@Arg('id') id: number,
    @Info() _info: GraphQLResolveInfo): Promise<Anime> {
    const info = parseResolveInfo(_info)

    const keys: string[] = Object.keys(info?.fieldsByTypeName.Anime as Object)

    return await getAnimeDetail(id, keys)
  }

  @Query(returns => [Anime])
  async getAnimeRanking (@Arg('rankingType') rankingType: string,
    @Arg('limit', { defaultValue: 10 }) limit: number,
    @Arg('offset', { defaultValue: 0 }) offset: number,
    @Info() _info: GraphQLResolveInfo): Promise<Anime[]> {
    const info = parseResolveInfo(_info)

    const keys: string[] = Object.keys(info?.fieldsByTypeName.Anime as Object)

    return await getAnimeRanking(rankingType, keys, limit, offset)
  }

  @Query(returns => [Anime])
  async getSeasonalAnime (@Arg('year') year: number,
    @Arg('season') season: string,
    @Arg('sort') sort: string,
    @Arg('limit', { defaultValue: 10 }) limit: number,
    @Arg('offset', { defaultValue: 0 }) offset: number,
    @Info() _info: GraphQLResolveInfo): Promise<Anime[]> {
    const info = parseResolveInfo(_info)

    const keys: string[] = Object.keys(info?.fieldsByTypeName.Anime as Object)

    return await getSeasonalAnime(year, season, sort, keys, limit, offset)
  }
}
