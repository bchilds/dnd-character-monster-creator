import React, { useState, useEffect, useMemo } from "react";
import PreformattedTable from "../../../src/components/react-table";
import style from "./style.module.scss";

import { getAllCharacters } from "../../../src/api/character/api";
import UpdateLink from "./update-link";
import DeleteLink from "./delete-link";

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
    return Empty();
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style["preformatted-table"]}>
      <PreformattedTable data={characters} columns={tableColumns} />
    </div>
  );
};

export default CharacterList;
