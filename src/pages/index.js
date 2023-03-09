import Head from "next/head";
import Input from "@/components/input";
import Table, { THead, TBody, TH, TR, TD } from "@/components/table";
import Link from "next/link";
import { useState } from "react";
import { API_URL } from "@/API";
import { Pagination } from "antd";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/character`);
  const contactListAPI = await res.json();

  return {
    props: { contactListAPI },
  };
};

const Home = ({ contactListAPI }) => {
  const [contactList, setContactList] = useState(contactListAPI);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (value) => {
    setSearchValue(value);
    const res = await fetch(`${API_URL}/character/?name=${value}`);
    const searchApi = await res.json();
    setContactList(searchApi);
  };

  const handlePagination = async (value) => {
    const param = searchValue
      ? `name=${searchValue}&page=${value}`
      : `page=${value}`;
    const res = await fetch(`${API_URL}/character/?${param}`);
    const searchApi = await res.json();
    setContactList(searchApi);
  };

  return (
    <>
      <Head>
        <title>Contact List - SleekFlow</title>
        <meta
          name="description"
          content="View our list of contacts with their related information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="wrapper wrapper-p-x wrapper-p-t wrapper-p-b">
        <div>
          <div className="mb-4">
            <h1>Contacts</h1>
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <Input
                placeholder="Search"
                onInput={(e) => handleSearch(e.target.value)}
                value={searchValue}
              ></Input>
            </div>
            {contactList?.info?.count && (
              <div>
                <Pagination
                  total={contactList?.info?.count}
                  pageSize={20}
                  showSizeChanger={false}
                  onChange={(e) => handlePagination(e)}
                />
              </div>
            )}
          </div>
          <div>
            {contactList?.results?.length ? (
              <Table>
                <THead>
                  <TH>Name</TH>
                  <TH>Status</TH>
                  <TH>Species</TH>
                  <TH>Gender</TH>
                  <TH>Action</TH>
                </THead>
                <TBody>
                  {contactList.results.map(
                    ({ id, name, status, species, gender }) => {
                      return (
                        <TR key={id}>
                          <TD>{name}</TD>
                          <TD>{status}</TD>
                          <TD>{species}</TD>
                          <TD>{gender}</TD>
                          <TD>
                            {" "}
                            <Link
                              className="border px-3 py-2 hover:bg-blue-800 rounded-lg"
                              href={`/contact/${id}`}
                            >
                              View Details
                            </Link>
                          </TD>
                        </TR>
                      );
                    }
                  )}
                </TBody>
              </Table>
            ) : (
              <p>Contact Not Found</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
