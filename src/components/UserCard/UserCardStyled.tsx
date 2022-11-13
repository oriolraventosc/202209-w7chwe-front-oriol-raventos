import styled from "styled-components";

const UserCardStyled = styled.div`
  position: relative;

  .user-card .user-info {
    visibility: none;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .user-card .user-info__username {
    visibility: none;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .user-card .user-info__email {
    visibility: none;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .user-card:hover .user-info {
    visibility: visible;
    opacity: 1;
  }
  .user-card:hover .user-info__username {
    visibility: visible;
    opacity: 1;
  }
  .user-card:hover .user-info__email {
    visibility: visible;
    opacity: 1;
  }

  .user-info:hover {
    cursor: pointer;
    opacity: 0.5;
    .user-info__email {
      visibility: visible;
    }
  }

  img {
    width: 100%;
    max-width: 400px;
    max-height: 375px;
    padding-bottom: 20px;
  }
  .user-info__username,
  .user-info__email {
    color: black;
  }
  img:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .user-info {
    position: absolute;
    top: 120px;
    width: 100%;
  }
`;

export default UserCardStyled;
