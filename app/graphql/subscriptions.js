/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIdenbridUser = /* GraphQL */ `
  subscription OnCreateIdenbridUser(
    $filter: ModelSubscriptionIdenbridUserFilterInput
    $id: String
  ) {
    onCreateIdenbridUser(filter: $filter, id: $id) {
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
export const onUpdateIdenbridUser = /* GraphQL */ `
  subscription OnUpdateIdenbridUser(
    $filter: ModelSubscriptionIdenbridUserFilterInput
    $id: String
  ) {
    onUpdateIdenbridUser(filter: $filter, id: $id) {
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
export const onDeleteIdenbridUser = /* GraphQL */ `
  subscription OnDeleteIdenbridUser(
    $filter: ModelSubscriptionIdenbridUserFilterInput
    $id: String
  ) {
    onDeleteIdenbridUser(filter: $filter, id: $id) {
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
export const onCreateIdenbridBlogs = /* GraphQL */ `
  subscription OnCreateIdenbridBlogs(
    $filter: ModelSubscriptionIdenbridBlogsFilterInput
    $ownerId: String
  ) {
    onCreateIdenbridBlogs(filter: $filter, ownerId: $ownerId) {
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
export const onUpdateIdenbridBlogs = /* GraphQL */ `
  subscription OnUpdateIdenbridBlogs(
    $filter: ModelSubscriptionIdenbridBlogsFilterInput
    $ownerId: String
  ) {
    onUpdateIdenbridBlogs(filter: $filter, ownerId: $ownerId) {
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
export const onDeleteIdenbridBlogs = /* GraphQL */ `
  subscription OnDeleteIdenbridBlogs(
    $filter: ModelSubscriptionIdenbridBlogsFilterInput
    $ownerId: String
  ) {
    onDeleteIdenbridBlogs(filter: $filter, ownerId: $ownerId) {
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
export const onCreateIdenbridNews = /* GraphQL */ `
  subscription OnCreateIdenbridNews(
    $filter: ModelSubscriptionIdenbridNewsFilterInput
    $ownerId: String
  ) {
    onCreateIdenbridNews(filter: $filter, ownerId: $ownerId) {
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
export const onUpdateIdenbridNews = /* GraphQL */ `
  subscription OnUpdateIdenbridNews(
    $filter: ModelSubscriptionIdenbridNewsFilterInput
    $ownerId: String
  ) {
    onUpdateIdenbridNews(filter: $filter, ownerId: $ownerId) {
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
export const onDeleteIdenbridNews = /* GraphQL */ `
  subscription OnDeleteIdenbridNews(
    $filter: ModelSubscriptionIdenbridNewsFilterInput
    $ownerId: String
  ) {
    onDeleteIdenbridNews(filter: $filter, ownerId: $ownerId) {
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
export const onCreateIdenbridWork = /* GraphQL */ `
  subscription OnCreateIdenbridWork(
    $filter: ModelSubscriptionIdenbridWorkFilterInput
    $ownerId: String
  ) {
    onCreateIdenbridWork(filter: $filter, ownerId: $ownerId) {
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
export const onUpdateIdenbridWork = /* GraphQL */ `
  subscription OnUpdateIdenbridWork(
    $filter: ModelSubscriptionIdenbridWorkFilterInput
    $ownerId: String
  ) {
    onUpdateIdenbridWork(filter: $filter, ownerId: $ownerId) {
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
export const onDeleteIdenbridWork = /* GraphQL */ `
  subscription OnDeleteIdenbridWork(
    $filter: ModelSubscriptionIdenbridWorkFilterInput
    $ownerId: String
  ) {
    onDeleteIdenbridWork(filter: $filter, ownerId: $ownerId) {
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
export const onCreateIdenbridContact = /* GraphQL */ `
  subscription OnCreateIdenbridContact(
    $filter: ModelSubscriptionIdenbridContactFilterInput
  ) {
    onCreateIdenbridContact(filter: $filter) {
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
export const onUpdateIdenbridContact = /* GraphQL */ `
  subscription OnUpdateIdenbridContact(
    $filter: ModelSubscriptionIdenbridContactFilterInput
  ) {
    onUpdateIdenbridContact(filter: $filter) {
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
export const onDeleteIdenbridContact = /* GraphQL */ `
  subscription OnDeleteIdenbridContact(
    $filter: ModelSubscriptionIdenbridContactFilterInput
  ) {
    onDeleteIdenbridContact(filter: $filter) {
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
