/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIdenbridUser = /* GraphQL */ `
  query GetIdenbridUser($id: ID!) {
    getIdenbridUser(id: $id) {
      id
      name
      email
      avatar
      about
      role
      status
      createdAt
      updatedAt
    }
  }
`;
export const listIdenbridUsers = /* GraphQL */ `
  query ListIdenbridUsers(
    $filter: ModelIdenbridUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdenbridUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        avatar
        about
        role
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIdenbridBlogs = /* GraphQL */ `
  query GetIdenbridBlogs($id: ID!) {
    getIdenbridBlogs(id: $id) {
      id
      title_jp
      title_en
      description_jp
      description_en
      body_jp
      body_en
      slug
      thumbnail
      ownerId
      owner {
        id
        name
        email
        avatar
        about
        role
        status
        createdAt
        updatedAt
      }
      tags_en
      tags_jp
      meta_title_en
      meta_title_jp
      meta_description_en
      meta_description_jp
      meta_keywords_en
      meta_keywords_jp
      isPublished
      createdAt
      updatedAt
    }
  }
`;
export const listIdenbridBlogs = /* GraphQL */ `
  query ListIdenbridBlogs(
    $filter: ModelIdenbridBlogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdenbridBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title_jp
        title_en
        description_jp
        description_en
        body_jp
        body_en
        slug
        thumbnail
        ownerId
        owner {
          id
          name
          email
          avatar
          about
          role
          status
          createdAt
          updatedAt
        }
        tags_en
        tags_jp
        meta_title_en
        meta_title_jp
        meta_description_en
        meta_description_jp
        meta_keywords_en
        meta_keywords_jp
        isPublished
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlogsBySlug = /* GraphQL */ `
  query GetBlogsBySlug(
    $slug: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIdenbridBlogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBlogsBySlug(
      slug: $slug
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title_jp
        title_en
        description_jp
        description_en
        body_jp
        body_en
        slug
        thumbnail
        ownerId
        owner {
          id
          name
          email
          avatar
          about
          role
          status
          createdAt
          updatedAt
        }
        tags_en
        tags_jp
        meta_title_en
        meta_title_jp
        meta_description_en
        meta_description_jp
        meta_keywords_en
        meta_keywords_jp
        isPublished
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIdenbridNews = /* GraphQL */ `
  query GetIdenbridNews($id: ID!) {
    getIdenbridNews(id: $id) {
      id
      ownerId
      owner {
        id
        name
        email
        avatar
        about
        role
        status
        createdAt
        updatedAt
      }
      title_jp
      title_en
      description_jp
      description_en
      body_jp
      body_en
      slug
      thumbnail
      meta_title_jp
      meta_title_en
      tags_jp
      tags_en
      meta_description_jp
      meta_description_en
      meta_keywords_jp
      meta_keywords_en
      isPublished
      createdAt
      updatedAt
    }
  }
`;
export const listIdenbridNews = /* GraphQL */ `
  query ListIdenbridNews(
    $filter: ModelIdenbridNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdenbridNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ownerId
        owner {
          id
          name
          email
          avatar
          about
          role
          status
          createdAt
          updatedAt
        }
        title_jp
        title_en
        description_jp
        description_en
        body_jp
        body_en
        slug
        thumbnail
        meta_title_jp
        meta_title_en
        tags_jp
        tags_en
        meta_description_jp
        meta_description_en
        meta_keywords_jp
        meta_keywords_en
        isPublished
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNewsBySlug = /* GraphQL */ `
  query GetNewsBySlug(
    $slug: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIdenbridNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getNewsBySlug(
      slug: $slug
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ownerId
        owner {
          id
          name
          email
          avatar
          about
          role
          status
          createdAt
          updatedAt
        }
        title_jp
        title_en
        description_jp
        description_en
        body_jp
        body_en
        slug
        thumbnail
        meta_title_jp
        meta_title_en
        tags_jp
        tags_en
        meta_description_jp
        meta_description_en
        meta_keywords_jp
        meta_keywords_en
        isPublished
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIdenbridWork = /* GraphQL */ `
  query GetIdenbridWork($id: ID!) {
    getIdenbridWork(id: $id) {
      id
      ownerId
      owner {
        id
        name
        email
        avatar
        about
        role
        status
        createdAt
        updatedAt
      }
      title_jp
      title_en
      description_en
      description_jp
      body_jp
      body_en
      slug
      thumbnail
      tags_jp
      tags_en
      meta_title_jp
      meta_title_en
      meta_description_jp
      meta_description_en
      meta_keywords_en
      meta_keywords_jp
      isPublished
      createdAt
      updatedAt
    }
  }
`;
export const listIdenbridWorks = /* GraphQL */ `
  query ListIdenbridWorks(
    $filter: ModelIdenbridWorkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdenbridWorks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ownerId
        owner {
          id
          name
          email
          avatar
          about
          role
          status
          createdAt
          updatedAt
        }
        title_jp
        title_en
        description_en
        description_jp
        body_jp
        body_en
        slug
        thumbnail
        tags_jp
        tags_en
        meta_title_jp
        meta_title_en
        meta_description_jp
        meta_description_en
        meta_keywords_en
        meta_keywords_jp
        isPublished
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkBySlug = /* GraphQL */ `
  query GetWorkBySlug(
    $slug: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelIdenbridWorkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getWorkBySlug(
      slug: $slug
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ownerId
        owner {
          id
          name
          email
          avatar
          about
          role
          status
          createdAt
          updatedAt
        }
        title_jp
        title_en
        description_en
        description_jp
        body_jp
        body_en
        slug
        thumbnail
        tags_jp
        tags_en
        meta_title_jp
        meta_title_en
        meta_description_jp
        meta_description_en
        meta_keywords_en
        meta_keywords_jp
        isPublished
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIdenbridContact = /* GraphQL */ `
  query GetIdenbridContact($id: ID!) {
    getIdenbridContact(id: $id) {
      id
      inchargePerson
      inquiryMatter
      companyName
      email
      phoneNo
      description
      createdAt
      updatedAt
    }
  }
`;
export const listIdenbridContacts = /* GraphQL */ `
  query ListIdenbridContacts(
    $filter: ModelIdenbridContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIdenbridContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        inchargePerson
        inquiryMatter
        companyName
        email
        phoneNo
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
