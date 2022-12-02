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