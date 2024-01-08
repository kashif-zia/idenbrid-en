/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIdenbridUser = /* GraphQL */ `
  mutation CreateIdenbridUser(
    $input: CreateIdenbridUserInput!
    $condition: ModelIdenbridUserConditionInput
  ) {
    createIdenbridUser(input: $input, condition: $condition) {
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
export const deleteIdenbridUser = /* GraphQL */ `
  mutation DeleteIdenbridUser(
    $input: DeleteIdenbridUserInput!
    $condition: ModelIdenbridUserConditionInput
  ) {
    deleteIdenbridUser(input: $input, condition: $condition) {
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
export const updateIdenbridUser = /* GraphQL */ `
  mutation UpdateIdenbridUser(
    $input: UpdateIdenbridUserInput!
    $condition: ModelIdenbridUserConditionInput
  ) {
    updateIdenbridUser(input: $input, condition: $condition) {
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
export const createIdenbridBlogs = /* GraphQL */ `
  mutation CreateIdenbridBlogs(
    $input: CreateIdenbridBlogsInput!
    $condition: ModelIdenbridBlogsConditionInput
  ) {
    createIdenbridBlogs(input: $input, condition: $condition) {
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
export const updateIdenbridBlogs = /* GraphQL */ `
  mutation UpdateIdenbridBlogs(
    $input: UpdateIdenbridBlogsInput!
    $condition: ModelIdenbridBlogsConditionInput
  ) {
    updateIdenbridBlogs(input: $input, condition: $condition) {
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
export const deleteIdenbridBlogs = /* GraphQL */ `
  mutation DeleteIdenbridBlogs(
    $input: DeleteIdenbridBlogsInput!
    $condition: ModelIdenbridBlogsConditionInput
  ) {
    deleteIdenbridBlogs(input: $input, condition: $condition) {
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
export const createIdenbridNews = /* GraphQL */ `
  mutation CreateIdenbridNews(
    $input: CreateIdenbridNewsInput!
    $condition: ModelIdenbridNewsConditionInput
  ) {
    createIdenbridNews(input: $input, condition: $condition) {
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
export const updateIdenbridNews = /* GraphQL */ `
  mutation UpdateIdenbridNews(
    $input: UpdateIdenbridNewsInput!
    $condition: ModelIdenbridNewsConditionInput
  ) {
    updateIdenbridNews(input: $input, condition: $condition) {
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
export const deleteIdenbridNews = /* GraphQL */ `
  mutation DeleteIdenbridNews(
    $input: DeleteIdenbridNewsInput!
    $condition: ModelIdenbridNewsConditionInput
  ) {
    deleteIdenbridNews(input: $input, condition: $condition) {
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
export const createIdenbridWork = /* GraphQL */ `
  mutation CreateIdenbridWork(
    $input: CreateIdenbridWorkInput!
    $condition: ModelIdenbridWorkConditionInput
  ) {
    createIdenbridWork(input: $input, condition: $condition) {
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
export const updateIdenbridWork = /* GraphQL */ `
  mutation UpdateIdenbridWork(
    $input: UpdateIdenbridWorkInput!
    $condition: ModelIdenbridWorkConditionInput
  ) {
    updateIdenbridWork(input: $input, condition: $condition) {
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
export const deleteIdenbridWork = /* GraphQL */ `
  mutation DeleteIdenbridWork(
    $input: DeleteIdenbridWorkInput!
    $condition: ModelIdenbridWorkConditionInput
  ) {
    deleteIdenbridWork(input: $input, condition: $condition) {
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
export const createIdenbridContact = /* GraphQL */ `
  mutation CreateIdenbridContact(
    $input: CreateIdenbridContactInput!
    $condition: ModelIdenbridContactConditionInput
  ) {
    createIdenbridContact(input: $input, condition: $condition) {
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
export const updateIdenbridContact = /* GraphQL */ `
  mutation UpdateIdenbridContact(
    $input: UpdateIdenbridContactInput!
    $condition: ModelIdenbridContactConditionInput
  ) {
    updateIdenbridContact(input: $input, condition: $condition) {
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
export const deleteIdenbridContact = /* GraphQL */ `
  mutation DeleteIdenbridContact(
    $input: DeleteIdenbridContactInput!
    $condition: ModelIdenbridContactConditionInput
  ) {
    deleteIdenbridContact(input: $input, condition: $condition) {
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
