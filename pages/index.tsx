import Head from 'next/head';

import { sanityClient, urlFor } from '../sanity';
import { Collection } from '../typings';

import type { GetServerSideProps, NextPage } from 'next'
interface Props {
  collections: Collection[]
}
const Home = ({ collections }: Props) => {
  return (
    <div className="flex flex-col min-h-screen px-10 py-20 mx-auto max-w-7xl 2xl:px-0">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mb-10 text-4xl font-extralight">
        The{' '}
        <span className="font-extrabold underline decoration-pink-600/50">
          PAPAFAM
        </span>{' '}
        NFT Market Place
      </h1>

      <main className="p-10 shadow-xl bg-slate-100 shadow-rose-400/20">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <img
                className="object-cover roudned-2xl h-96 w-60"
                src={urlFor(collection.mainImage).url()}
                alt=""
              />
              <div className="p-5">
                <h2 className="text-3xl">{collection.title}</h2>
                <p className="mt-2 text-sm text-gray-400">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == 'collection']{
          _id,
          title,
          address,
          description,
          nftCollectionName,
          mainImage {
            asset
          },
          previewImage {
            asset
          },
          slug {
            current
          },
          creator-> {
              _id,
              name,
              address,
              slug {
                current
            },
          },
        }`

  const collections = await sanityClient.fetch(query)

  return {
    props: {
      collections,
    },
  }
}
