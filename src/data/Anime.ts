import axios, { type AxiosResponse } from 'axios'
import { type Anime, type AnimeListFromMAL } from '../models/Anime'

const baseUrl = 'https://api.myanimelist.net/v2'

const options = {
  headers: {
    'X-MAL-CLIENT-ID': process.env['X-MAL-CLIENT-ID']
  }
}

const getFields = (_fields: string[]): string => _fields.join(',')

const animeListFromResponse = (response: AxiosResponse<any, any>): Anime[] => {
  const animeList = response.data as AnimeListFromMAL

  return animeList.data.map(datum => datum.node)
}

export async function getAnimeList (q: string, fields: string[], limit: number, offset: number): Promise<Anime[]> {
  const url = `${baseUrl}/anime?`
  const reqFields = `fields=${getFields(fields)}&limit=${limit}&offset=${offset}&q=${q}`

  const response = await axios.get(`${url}${reqFields}`, options)

  return animeListFromResponse(response)
}

export async function getAnimeDetail (id: number, fields: string[]): Promise<Anime> {
  const reqUrl = `${baseUrl}/anime/${id}?fields=${getFields(fields)}`

  const response = await axios.get(reqUrl, options)

  return response.data as Anime
}

export async function getAnimeRanking (rankingType: string, fields: string[], limit: number, offset: number): Promise<Anime[]> {
  const url = `${baseUrl}/anime/ranking?`
  const reqFields = `fields=${getFields(fields)}&limit=${limit}&offset=${offset}&ranking_type=${rankingType}`

  const response = await axios.get(`${url}${reqFields}`, options)

  return animeListFromResponse(response)
}

export async function getSeasonalAnime (year: number, season: string, sort: string, fields: string[], limit: number, offset: number): Promise<Anime[]> {
  const url = `${baseUrl}/anime/season/${year}/${season}?`
  const reqFields = `fields=${getFields(fields)}&limit=${limit}&offset=${offset}&sort=${sort}`

  const response = await axios.get(`${url}${reqFields}`, options)

  return animeListFromResponse(response)
}
