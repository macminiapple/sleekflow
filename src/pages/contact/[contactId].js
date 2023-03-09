import Head from "next/head";
import Link from "next/link";
import ProfileImage from "@/components/profileImage";
import Table, { THead, TBody, TH, TR, TD } from "@/components/table";
import DescriptionList, { Description } from "@/components/descriptionList";

export const getServerSideProps = async ({ params }) => {
  const { contactId } = params;
  const res = await fetch(`${process.env.API_URL}/character/${contactId || 1}`);
  const character = await res.json();

  let episodes = [];
  if (character?.episode.length) {
    try {
      const responses = await Promise.all(
        character.episode.map((url) => fetch(url))
      );
      const dataArray = await Promise.all(
        responses.map((response) => response.json())
      );
      episodes = dataArray;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    props: { character, episodes },
  };
};

const constTableHeaderEpisodesObj = ["Name", "Air Date", "Episode"];

const Profile = ({ character, episodes }) => {
  return (
    <>
      <Head>
        <title>
          {character?.name
            ? `${character?.name} - SleekFlow`
            : `Contact not found`}
        </title>
        <meta
          name="description"
          content={
            character?.name
              ? `View information about ${character?.name}`
              : `View information - Contact not found`
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="wrapper wrapper-p-x wrapper-p-t mb-4">
          <div>
            <Link
              className="text-white leading-[40px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                          focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
                          text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              href={`/`}
            >
              Back to all listing
            </Link>
          </div>
        </div>

        {character ? (
          <>
            <div className="border-b-2 mb-4">
              <div className="wrapper wrapper-p-x mb-4">
                <div>
                  <div className="flex space-x-4 ">
                    <ProfileImage src={character?.image} />
                    <div className="flex">
                      <h1 className="self-center">{character?.name}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper wrapper-p-x mb-8">
              <h2 className="mb-4">Personal Info</h2>
              <DescriptionList>
                <Description lable="Status" value={character?.status} />
                <Description lable="Gender" value={character?.gender} />
                <Description
                  lable="Location"
                  value={character?.location?.name}
                />
                <Description lable="Origin" value={character?.origin?.name} />
                <Description lable="Species" value={character?.species} />
              </DescriptionList>
            </div>
          </>
        ) : (
          <p>Loading error</p>
        )}
        {episodes.length ? (
          <div className="wrapper wrapper-p-x mb-4">
            <h2 className="mb-4">Episodes</h2>
            <div>
              <Table>
                <THead>
                  {constTableHeaderEpisodesObj.map((label) => {
                    return <TH key={label}>{label}</TH>;
                  })}
                </THead>
                <TBody>
                  {episodes.map(({ name, air_date, episode }, index) => {
                    return (
                      <TR key={index + episode}>
                        <TD>{name}</TD>
                        <TD>{air_date}</TD>
                        <TD>{episode}</TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            </div>
          </div>
        ) : (
          <p>Loading error</p>
        )}
      </main>
    </>
  );
};

export default Profile;
