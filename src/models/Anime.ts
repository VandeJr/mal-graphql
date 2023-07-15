import { ObjectType, Field } from 'type-graphql'

@ObjectType()
class Picture {
  @Field({ nullable: true })
    medium?: string

  @Field({ nullable: true })
    large?: string
}

@ObjectType()
class Node {
  @Field({ nullable: true })
    id?: number

  @Field({ nullable: true })
    title?: string

  @Field(type => Picture, { nullable: true })
    main_picture?: Picture
}

@ObjectType()
class Status {
  @Field({ nullable: true })
    watching?: string

  @Field({ nullable: true })
    completed?: string

  @Field({ nullable: true })
    on_hold?: string

  @Field({ nullable: true })
    dropped?: string

  @Field({ nullable: true })
    plan_to_watch?: string
}

@ObjectType()
class AlternativeTitles {
  @Field(type => [String], { nullable: true })
    synonyms?: string[]

  @Field({ nullable: true })
    en?: string

  @Field({ nullable: true })
    ja?: string
}

@ObjectType()
class Broadcast {
  @Field({ nullable: true })
    day_of_the_week?: string

  @Field({ nullable: true })
    start_time?: string
}

@ObjectType()
class Genre {
  @Field({ nullable: true })
    id?: number

  @Field({ nullable: true })
    name?: string
}

@ObjectType()
class Recommendation {
  @Field(type => Node, { nullable: true })
    node?: Node

  @Field({ nullable: true })
    num_recommendations?: number
}

@ObjectType()
class RelatedAnime {
  @Field(type => Node, { nullable: true })
    node?: Node

  @Field({ nullable: true })
    relation_type?: string

  @Field({ nullable: true })
    relation_type_formatted?: string
}

@ObjectType()
class StartSeason {
  @Field({ nullable: true })
    year?: number

  @Field({ nullable: true })
    season?: string
}

@ObjectType()
class Statistics {
  @Field({ nullable: true })
    status?: Status

  @Field({ nullable: true })
    num_list_users?: number
}

@ObjectType()
export class Anime {
  @Field({ nullable: true })
    id?: number

  @Field({ nullable: true })
    title?: string

  @Field(type => Picture, { nullable: true })
    main_picture?: Picture

  @Field(type => AlternativeTitles, { nullable: true })
    alternative_titles?: AlternativeTitles

  @Field({ nullable: true })
    start_date?: Date

  @Field({ nullable: true })
    end_date?: Date

  @Field({ nullable: true })
    synopsis?: string

  @Field({ nullable: true })
    mean?: number

  @Field({ nullable: true })
    rank?: number

  @Field({ nullable: true })
    popularity?: number

  @Field({ nullable: true })
    num_list_users?: number

  @Field({ nullable: true })
    num_scoring_users?: number

  @Field({ nullable: true })
    nsfw?: string

  @Field({ nullable: true })
    created_at?: Date

  @Field({ nullable: true })
    updated_at?: Date

  @Field({ nullable: true })
    media_type?: string

  @Field({ nullable: true })
    status?: string

  @Field(type => [Genre], { nullable: true })
    genres?: Genre[]

  @Field({ nullable: true })
    num_episodes?: number

  @Field(type => StartSeason, { nullable: true })
    start_season?: StartSeason

  @Field(type => Broadcast, { nullable: true })
    broadcast?: Broadcast

  @Field({ nullable: true })
    source?: string

  @Field({ nullable: true })
    average_episode_duration?: number

  @Field({ nullable: true })
    rating?: string

  @Field(type => [Picture], { nullable: true })
    pictures?: Picture[]

  @Field({ nullable: true })
    background?: string

  @Field(type => [RelatedAnime], { nullable: true })
    related_anime?: RelatedAnime[]

  @Field(type => [Recommendation], { nullable: true })
    recommendations?: Recommendation[]

  @Field(type => [Genre], { nullable: true })
    studios?: Genre[]

  @Field(type => Statistics)
    statistics?: Statistics
}

interface Datum {
  node: Anime
}

export interface AnimeListFromMAL {
  data: Datum[]
}
