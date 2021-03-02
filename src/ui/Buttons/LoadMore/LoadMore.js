import React from "react";
import styled from "styled-components";
import { colors } from "../../../vars/palette";

const MoreWrap = styled.div`
  max-width: 200px;
  width: 100%;
  button {
    position: relative;
    overflow: hidden;
    background: none;
    text-transform: uppercase;
    &:hover {
      color: ${colors.hex("white")};
    }
  }
`;

const BlogMore = (props) => {
  const { className, id, children } = props;
  const { total, per, more, setMore } = props.moreData;
  const handleMore = () => {
    setMore(more + 1);
  };
  return more < Math.ceil(total / per) && total > per ? (
    <MoreWrap>
      <button
        className={className}
        id={id ? id : undefined}
        onClick={handleMore}
      >
        {children}
      </button>
    </MoreWrap>
  ) : null;
};

export default BlogMore;
