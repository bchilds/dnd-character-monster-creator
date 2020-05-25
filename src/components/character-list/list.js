import React, { useEffect, useMemo, useContext } from "react";
import PreformattedTable from "../react-table";

import CharacterContext from "../../../src/contexts/character-list";
import UpdateLink from "./update-link";
import DeleteLink from "./delete-link";

import style from "./style.module.scss";
// TODO -- build own table, possibly using react table for logical bits
// but really, fuck tables.

const Empty = () => (
  <div className="empty">
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
    accessor: "update-link",
    Cell: function ({ row }) {
      return (
        <span>
          <UpdateLink id={row.values._id} />
        </span>
      );
    },
  },
  {
    Header: "",
    accessor: "delete-link",
    Cell: function ({ row }) {
      return (
        <span>
          <DeleteLink id={row.values._id} />
        </span>
      );
    },
  },
];

const CharacterList = () => {
  const context = useContext(CharacterContext);
  const { characters, isLoadingCharacters, fetchAndSetAllCharacters } = context;
  const tableColumns = useMemo(getDefaultColumns);

  // likely need to add API call back in here to fetch due to memory leak
  useEffect(() => {
    fetchAndSetAllCharacters();
  }, [fetchAndSetAllCharacters]);
  const isEmptyAndNotLoading = !isLoadingCharacters && characters.length === 0;

  if (isEmptyAndNotLoading) {
    return Empty();
  }

  if (isLoadingCharacters) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style["preformatted-table"]}>
      <PreformattedTable data={characters} columns={tableColumns} />
    </div>
  );
};

export default CharacterList;
