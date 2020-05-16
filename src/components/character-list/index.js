import React, { useState, useEffect, useMemo } from "react";
import ReactTable from "react-table-v6";

import { getAllCharacters } from "../../../src/api/character/api";
import UpdateLink from "./update-link";
import DeleteLink from "./delete-link";

import styled from "styled-components";
import "react-table-v6/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Empty = () => (
  <div>
    <h2>You have no characters! Go make some!</h2>
  </div>
);

const getDefaultColumns = () => [
  {
    Header: "ID",
    accessor: "_id",
    filterable: true,
  },
  {
    Header: "Name",
    accessor: "name",
    filterable: true,
  },
  {
    Header: "Race",
    accessor: "race",
    filterable: true,
  },
  {
    Header: "level",
    accessor: "level",
    filterable: true,
  },
  {
    Header: "Class",
    accessor: "characterClass",
    filterable: true,
  },
  {
    Header: "Subclass",
    accessor: "subclass",
    filterable: true,
  },
  {
    Header: "",
    accessor: "",
    Cell: function (props) {
      return (
        <span>
          <UpdateLink
            id={props.original._id}
            attributes={undefined /*something*/}
          />
        </span>
      );
    },
  },
  {
    Header: "",
    accessor: "",
    Cell: function (props) {
      return (
        <span>
          <DeleteLink id={props.original._id} />
        </span>
      );
    },
  },
];

const CharacterList = () => {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const tableColumns = useMemo(getDefaultColumns);

  useEffect(() => {
    setLoading(true);
    getAllCharacters()
      .then((res) => {
        const chars = res.data.data || [];
        setCharacters(chars);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [setLoading, setCharacters]);

  console.log(
    `CharacterList --> isLoading: ${isLoading} --> render --> characters`,
    characters
  );

  const isEmptyAndNotLoading = !isLoading && characters.length === 0;

  if (isEmptyAndNotLoading) {
    return <Wrapper>{Empty()}</Wrapper>;
  }

  return (
    <Wrapper>
      <ReactTable
        data={characters}
        columns={tableColumns}
        loading={isLoading}
        defaultPageSize={10}
        showPageSizeOptions={true}
        minRows={5}
      />
    </Wrapper>
  );
};

export default CharacterList;
