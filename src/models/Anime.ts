import { ObjectType, Field } from 'type-graphql'

@ObjectType()
class Picture {
  @Field()
    medium!: string

  @Field()
    large!: string
}

@ObjectType()
class Node {
  @Field()
    id!: number

  @Field()
    title!: string

  @Field(type => Picture)
    main_picture!: Picture
}

@ObjectType()
class Status {
  @Field()
    watching!: string

  @Field()
    completed!: string

  @Field()
    on_hold!: string

  @Field()
    dropped!: string

  @Field()
    plan_to_watch!: string
}

@ObjectType()
class AlternativeTitles {
  @Field(type => [String])
    synonyms!: string[]

  @Field()
    en!: string

  @Field()
    ja!: string
}

@ObjectType()
class Broadcast {
  @Field()
    day_of_the_week!: string

  @Field()
    start_time!: string
}

@ObjectType()
class Genre {
  @Field()
    id!: number

  @Field()
    name!: string
}

@ObjectType()
class Recommendation {
  @Field(type => Node)
    node!: Node

  @Field()
    num_recommendations!: number
}

@ObjectType()
class RelatedAnime {
  @Field(type => Node)
    node!: Node

  @Field()
    relation_type!: string

  @Field()
    relation_type_formatted!: string
}

@ObjectType()
class StartSeason {
  @Field()
    year!: number

  @Field()
    season!: string
}

@ObjectType()
class Statistics {
  @Field()
    status!: Status

  @Field()
    num_list_users!: number
}

@ObjectType()
export class Anime {
  @Field()
    id!: number

  @Field()
    title!: string

  @Field(type => Picture)
    main_picture!: Picture

  @Field(type => AlternativeTitles)
    alternative_titles!: AlternativeTitles

  @Field()
    start_date!: Date

  @Field()
    end_date!: Date

  @Field()
    synopsis!: string

  @Field()
    mean!: number

  @Field()
    rank!: number

  @Field()
    popularity!: number

  @Field()
    num_list_users!: number

  @Field()
    num_scoring_users!: number

  @Field()
    nsfw!: string

  @Field()
    created_at!: Date

  @Field()
    updated_at!: Date

  @Field()
    media_type!: string

  @Field()
    status!: string

  @Field(type => [Genre])
    genres!: Genre[]

  @Field()
    num_episodes!: number

  @Field(type => StartSeason)
    start_season!: StartSeason

  @Field(type => Broadcast)
    broadcast!: Broadcast

  @Field()
    source!: string

  @Field()
    average_episode_duration!: number

  @Field()
    rating!: string

  @Field(type => [Picture])
    pictures!: Picture[]

  @Field()
    background!: string

  @Field(type => [RelatedAnime])
    related_anime!: RelatedAnime[]

  // @Field()
  // related_manga!: any[];

  @Field(type => [Recommendation])
    recommendations!: Recommendation[]

  @Field(type => [Genre])
    studios!: Genre[]

  @Field(type => Statistics)
    statistics!: Statistics
}

interface Datum {
  node: Anime
}

export interface AnimeListFromMAL {
  data: Datum[]
}
