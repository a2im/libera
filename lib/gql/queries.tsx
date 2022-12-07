'use client';

import {gql} from '@apollo/client'

const GET_ALL_SPONSORS = gql`
query getLiberaSponsorsList($Level: String!, $Title: String!) {
    sponsors(filters: { sponsor_packages: { Level: { contains: $Level }, event: { Title: { contains: $Title }}}}) {
      data {
        id
        attributes {
          Name
          Bio
          URL
          Logo {
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                url
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
  `;

export { GET_ALL_SPONSORS }  


const GET_ALL_ADS = gql`
query getLiberaAds($isActive: Boolean, $Name: String!) {
  ads(filters: { isActive: { eq: $isActive }, apps: { Name: {eq: $Name}}}) {
    data{
      id
      attributes {
        Name
        URL
        Asset {
          data {
            id
            attributes {
              alternativeText
              width
              height
              url
            }
          }
        }
      }
    }
  }
}
`;
export { GET_ALL_ADS } 

const GET_PREVIEW_POST = gql`
query PreviewPost($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    databaseId
    slug
    status
  }
}`
;
export { GET_PREVIEW_POST }

const GET_ALL_POSTS_WITHSLUG = gql`
{
  posts(sort: "id:desc") {
    data {
      id
      attributes {
        Slug
      }
    }
  }
}
`
;
export { GET_ALL_POSTS_WITHSLUG }

const GET_ALL_POSTS_FORHOME = gql`
query AllPosts($PublicationState: PublicationState){
  posts(publicationState: $PublicationState){
    data {
      id
      attributes {
        Title
        coverImage {
          data {
            id
            attributes {
              alternativeText
              caption
              width
              height
              url
            }
          }
        }
        Date
        Excerpt
        Slug
        Body
        news_categories {
          data {
            id
            attributes {
              Name
            }
          }
        }
        tags {
          data {
            id
            attributes {
              Name
            }
          }
        }
      }
    }
  }
}`
;
export { GET_ALL_POSTS_FORHOME }

const GET_POST_BY_SLUG = gql`
query PostbySlug($Slug: String!){
  posts(filters: { Slug: { eq: $Slug } } ){
    data {
      id
      attributes {
        Body
      }
    }
  }
}`
;
export { GET_POST_BY_SLUG}

const GET_POST_AND_MOREPOSTS = gql`
fragment PostFields on Post {
  Title
  Excerpt
  Slug
  Date
  coverImage {
    data {
      id
      attributes {
        name
        alternativeText
        caption
        width
        height
        url
        previewUrl
      }
    }
  }
  news_categories {
    data {
      id
      attributes {
        Name
      }
    }
  }
  tags {
    data {
      id
      attributes {
        Name
      }
    }
  }
}
query PostBySlug($id: ID!) {
  post(id: $id) {
    data {
      id
      attributes {
        ...PostFields
        Body
      }
    }
  }
  posts(pagination: { start: 0, limit: 3}, sort: "id:desc", publicationState: LIVE) {
    data {
      id
      attributes {
        ...PostFields
      }
    }
  }
}
`;
export { GET_POST_AND_MOREPOSTS }

const GET_RECENT_NEWS = gql`
query RecentNews ($PublicationState: PublicationState){
  posts(pagination: { start: 0, limit: 3}, sort: "id:desc", publicationState: $PublicationState) {
    data {
      id
      attributes {
        Title
        Excerpt
        Slug
      }
    }
  }
}
`;
export { GET_RECENT_NEWS }